import { getCollections } from "../api";

export default async function generatePyTypes(api) {
  const collections = await getCollections(api);
  let ret = "";
  const types = [];
  
  ret += `import (
    "github.com/google/uuid"
    "time"
  )
  `

  ret += Object.values(collections).map((collection) => {
      const collectionName = collection.collection;
      const typeName = collectionName
        .split("_")
        .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
        .join("");
      types.push(`${collectionName}: ${typeName}`);
      return `type ${typeName} struct {
${Object.values(collection.fields).map((x) => `  ${x.field}: ${getType(x.type)}`).join("\n")}`;})
.join("\n}\n\n");
  ret += "\n\n";

  return ret;
}

function getType(directusType: string) {
  
  if (["uuid"].includes(directusType)) return "uuid.UUID";
  if (["timestamp"].includes(directusType)) return "time.Time";
  if (["json", "csv"].includes(directusType)) return "interface{}";
  
  if (["integer"].includes(directusType)) return "int";
  if (["bigInteger"].includes(directusType)) return "int64";

  if (["float"].includes(directusType)) return "float";
  if (["decimal"].includes(directusType)) return "float64";
  if (["boolean"].includes(directusType)) return "bool";
  if (["text", "string"].includes(directusType)) return "string";

  if (["alias"].includes(directusType)) return "interface{}";
  if (["hash"].includes(directusType)) return "string";
  
  return "interface{}";
}
