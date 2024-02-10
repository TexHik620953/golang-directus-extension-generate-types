import { Collections, Field } from "lib/types";
import { getCollections } from "../api";

export default async function generateGoTypes(api) {
  const collections = await getCollections(api);
  let ret = "";

  ret += `package directus
  import (
    "encoding/json"
    "github.com/google/uuid"
    "time"
  )
  type IDirectusObject interface {
    DeepCopy() IDirectusObject
    Diff(old IDirectusObject) map[string]interface{}
    Track() []IDirectusObject
    GetId() string
    CollectionName() string
    Map() map[string]interface{}
  }

  `

  let blacklistedCollectionNames = Object.values(collections).filter((collection) => {
    let hasId = collection.fields.some((p)=>p.field.toLowerCase()=="id");
    return !hasId;
  }).map(p=>p.collection);

  let filteredCollections = Object.values(collections).filter((collection) => {
    return !blacklistedCollectionNames.includes(collection.collection);
  });

  ret += Object.values(filteredCollections).map((collection) => {
      const typeName = pascalCase(collection.collection);
      collection.fields = collection.fields.filter((p:Field)=> !blacklistedCollectionNames.includes(p.relation?.collection));

      let collectionFields = `\t${(Object.values(collection.fields).map((x:Field) => `${formatTypename(x.field)} ${getGoType(x)} \`json:"${x.field}"\``)).join("\n\t")}`;
      let deepCopyString = 
`func (cf ${typeName}) DeepCopy() IDirectusObject {
	new_obj := &${typeName}{}
  ${(Object.values(collection.fields).map((x:Field) => getGoDeepCopyString(x))).join("\n\t")}
	return new_obj
}`;

let diffString = 
`func (cf ${typeName}) Diff(old IDirectusObject) map[string]interface{} {
  diff := make(map[string]interface{})

  ${(Object.values(collection.fields).map((x:Field) => getGoDiffString(x, typeName))).join("\n\t")}

	if len(diff) == 0 {
		return nil
	}
	return diff
}`;

      let unmarshallString = 
`func (cf *${typeName}) UnmarshalJSON(data []byte) error {
	type ${typeName.toLowerCase()}_internal struct {
    ${collectionFields}
	}
	if data[0] == '"' { //Data is a string
		return json.Unmarshal(data, &cf.Id)
	} else if data[0] == '{' { //Data is an object
		var _obj ${typeName.toLowerCase()}_internal
		err := json.Unmarshal(data, &_obj)
		if err != nil {
			return err
		}
    ${(Object.values(collection.fields).map((x:Field) => `cf.${formatTypename(x.field)} = _obj.${formatTypename(x.field)}`)).join("\n\t")}
	} else {
	  //Number or unkown, probably id
	  return json.Unmarshal(data, &cf.Id)
  }
  return nil
}`

  let trackString = 
  `func (cf ${typeName}) Track() []IDirectusObject {
    trakingList := make([]IDirectusObject, 0)
  
    ${(Object.values(collection.fields).map((x:Field) => getGoTrackString(x, typeName))).join("\n\t")}
    return trakingList
  }  `;

let collectionNameFuncString = `func (cf ${typeName}) CollectionName() string {
  return "${collection.collection}"
}`;

let idType = getGoType(collection.fields.find((p)=>p.field.toLowerCase()=="id"));

let getIdString = `func (cf ${typeName}) GetId() string	{
  return ${getGoIdString(idType)}
}`;

let mapString = `func (cf ${typeName}) Map() map[string]interface{} {
  mp := make(map[string]interface{})

  ${(Object.values(collection.fields).map((x:Field) => getGoMapString(x, typeName))).join("\n\t")}


	if len(mp) == 0 {
		return nil
	}
	return mp
}`;

      let struct = 
`type ${typeName} struct {
  IDirectusObject
  ${collectionFields}
}
${unmarshallString}
${deepCopyString}
${diffString}
${mapString}
${trackString}
${getIdString}
${collectionNameFuncString}
`;
return struct;
  })
.join("\n");

  return ret;
}

function formatTypename(typeName:string) {
  return (typeName[0].toUpperCase() + typeName.substring(1)).replace(/_./g, (match) => match.charAt(1).toUpperCase());
}

function pascalCase(typeName:string) {
  return typeName
        .split("_")
        .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
        .join("");
}

function getGoDiffString(field:Field, typeName:string):string {
  if (field.relation) {
    return "";
  }
let goType = getGoType(field);

  if (field.schema?.is_nullable && goType != "any") {
    return `if cf.${formatTypename(field.field)} == nil {
      if old.(*${typeName}).${formatTypename(field.field)} != nil {
        diff["${field.field}"] = nil
      }
    } else {
      if old.(*${typeName}).${formatTypename(field.field)} == nil {
        diff["${field.field}"] = cf.${formatTypename(field.field)}
      } else {
        if *cf.${formatTypename(field.field)} != *old.(*${typeName}).${formatTypename(field.field)} {
          diff["${field.field}"] = cf.${formatTypename(field.field)}
        }
      }
    }`;
  }
  return `
  if cf.${formatTypename(field.field)} != old.(*${typeName}).${formatTypename(field.field)} {
      diff["${field.field}"] = cf.${formatTypename(field.field)}
  }`;
}

function getGoMapString(field:Field, typeName:string):string {
  if (field.relation) {
    return "";
  }
  return `mp["${field.field}"] = cf.${formatTypename(field.field)}`;
}

function getGoDeepCopyString(field:Field):string {
  if (field.relation) {
    if (field.relation.type === "many") {
      return `if cf.${formatTypename(field.field)} != nil {
        new_obj.${formatTypename(field.field)} = make([]${pascalCase(field.relation.collection)}, len(cf.${formatTypename(field.field)}))
        copy(new_obj.${formatTypename(field.field)}, cf.${formatTypename(field.field)})
      }`;
    } else {
      return `if cf.${formatTypename(field.field)} != nil {
        new_obj.${formatTypename(field.field)} = (*cf.${formatTypename(field.field)}).DeepCopy().(*${pascalCase(field.relation.collection)})
      }`
    }
  }
  let goType = getGoType(field);
  if (field.schema?.is_nullable && goType != "any") {
    return `if cf.${formatTypename(field.field)} != nil {
		temp := ${getGoDefaultValue(goType)}
		new_obj.${formatTypename(field.field)} = &temp
		*new_obj.${formatTypename(field.field)} = *cf.${formatTypename(field.field)}
	}`;
  }
  return `new_obj.${formatTypename(field.field)} = cf.${formatTypename(field.field)}`
}

function getGoTrackString(field:Field, typename:string):string {
  if (field.relation) {
    if (field.relation.type === "many") {
      return `if cf.${formatTypename(field.field)} != nil {
        for _, iter := range cf.${formatTypename(field.field)} {
          trakingList = append(trakingList, iter.Track()...)
        }
      }
      `;
    } else {
      return `if cf.${formatTypename(field.field)} != nil {
        trakingList = append(trakingList, cf.${formatTypename(field.field)})
    trakingList = append(trakingList, cf.${formatTypename(field.field)}.Track()...)
  }`
    }
  }
  return "";
}
function getGoIdString(idGotypename:string):string {
  if (idGotypename == "uuid.UUID"){
    return "cf.Id.String()";
  } 
  if (idGotypename == "string") {
    return "cf";
  }
  if (idGotypename == "int") {
    return "fmt.Sprintf(\"%d\", cf.Id)";
  }
}

function getGoDefaultValue(goType:string):string {
  switch(goType) {
    case "any":
      return "struct{}{}";
      case "*string":
        return "\"\"";
        case "*bool":
          return "false";
          case "*uuid.UUID":
            return "uuid.Nil"
            case "*time.Time":
              return "time.Time{}";
              case "*int":
                case "*float32":
                return "0";
    default:
      return `<unknown-default-value(${goType})>`;
  }
}
function getGoType(field: Field):string {

  let type = `<unknown-type(${field.type})>`;
  if (["json", "csv", "alias"].includes(field.type)) type = "any";
  if (["hash", "text", "string", "bigInteger"].includes(field.type)) type = "string";
  if (["boolean"].includes(field.type)) type="bool";
  if (["uuid"].includes(field.type)) type = "uuid.UUID";
  if (["timestamp"].includes(field.type)) type = "time.Time";
  if (["integer"].includes(field.type)) type = "int";
  if (["float", "decimal"].includes(field.type)) type = "float32";

  if (field.schema?.is_nullable && type != "any") {
    type = "*" + type;
  }
  if (field.relation) {
    if (field.relation.type === "many") {
      return "[]" + pascalCase(field.relation.collection);
    } else {
      return "*" + pascalCase(field.relation.collection);
    }
  }
  return type;
}