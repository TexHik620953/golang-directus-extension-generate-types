import { getCollections } from "../api";

export default async function generatePyTypes(api) {
  const collections = await getCollections(api);
  let ret = "";
  const types = [];
  
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

  ret += `class CustomDirectusTypes(TypedDict):
${types.map((x) => `  ${x}`).join("\n")}
`;

  ret += "\n";

  return ret;
}

function getType(directusType: string) {
  if (["integer"].includes(directusType)) return "int";
  if (["bigInteger"].includes(directusType)) return "int64";

  if (["float"].includes(directusType)) return "float";
  if (["decimal"].includes(directusType)) return "float64";
  if (["boolean"].includes(directusType)) return "bool";
  return "interface{}";
}
