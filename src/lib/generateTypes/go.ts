import { Field } from "lib/types";
import { getCollections } from "../api";

export default async function generatePyTypes(api) {
  const collections = await getCollections(api);
  let ret = "";
  const types = [];

  ret += `package directus
  import (
    "encoding/json"
    "github.com/google/uuid"
    "time"
  )
  `

  ret += Object.values(collections).map((collection) => {
      const collectionName = collection.collection;
      const typeName = pascalCase(collectionName);
      types.push(`${collectionName}: ${typeName}`);

      let collectionFields = `\t${(Object.values(collection.fields).map((x:Field) => `${formatTypename(x.field)} ${getType(x)} \`json:"${x.field}"\``)).join("\n\t")}`;

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
}
`

      let struct = `
type ${typeName} struct {
  ${collectionFields}
}
${collection.fields.some((p)=>p.field.toLowerCase()=="id")?unmarshallString:""}`;
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

function getType(field: Field) {

  let type = "any";
  if (["json", "csv", "alias"].includes(field.type)) type = "any";
  if (["hash", "text", "string", "bigInteger"].includes(field.type)) type = "string";
  if (["boolean"].includes(field.type)) type="bool";
  if (["uuid"].includes(field.type)) type = "uuid.UUID";
  if (["timestamp"].includes(field.type)) type = "time.Time";
  if (["integer"].includes(field.type)) type = "int";
  if (["float", "decimal"].includes(field.type)) type = "float64";

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
