import { Collections, Field } from "lib/types";
import { getCollections } from "../api";

export default async function generateGoApi(api) {
  const collections = await getCollections(api);
  let blacklistedCollectionNames = Object.values(collections).filter((collection) => {
    let hasId = collection.fields.some((p)=>p.field.toLowerCase()=="id");
    return !hasId;
  }).map(p=>p.collection);

  let filteredCollections = Object.values(collections).filter((collection) => {
    return !blacklistedCollectionNames.includes(collection.collection);
  });

  let accessorsFields = [];
  let accessorsContstructors = [];
  let accessorsMapping = [];
  Object.values(filteredCollections).forEach((collection) => {
    const typeName = pascalCase(collection.collection);
    const fieldName = `${typeName}CollectionAccessor`;
    let idType = getGoType(collection.fields.find((p)=>p.field.toLowerCase()=="id"));
    accessorsFields.push(`${fieldName} *DirectusCollectionAccessor[${idType}, ${typeName}]`);
    accessorsContstructors.push(`h.${fieldName} = NewDirectusCollectionAccessor[${idType}, ${typeName}](h, "${collection.collection}")`);
    accessorsMapping.push(`"${collection.collection}": h.${fieldName},`)
  })


  
  let ret = `package directus

  import (
    "fmt"
    "log"
    "net/http"
    "net/url"
    "os"
    "path"
    "strconv"
    "time"
  
    "github.com/google/uuid"
  )
  
  type DirectusResponse[T any] struct {
    Data   T \`json:"data"\`
    Errors []struct {
      Message string \`json:"message"\`
    } \`json:"errors"\`
  }
  
  type trackingRef struct {
    Original        IDirectusObject
    Actual          IDirectusObject
    OwnerCollection IDirectusCollectionAccessor
  }
  
  func (h trackingRef) delta() map[string]any {
    return h.Actual.(IDirectusObject).Diff(h.Original.(IDirectusObject))
  }
  
  type DirectusApi struct {
    directusUrl *url.URL
    token       string

    errLogger  *log.Logger
    infoLogger *log.Logger
  
    trackingObjects map[IDirectusObject]trackingRef

    ${accessorsFields.join("\n\t")}

    collectionsAccessors map[string]IDirectusCollectionAccessor
  }
  func New(addr, token string) (*DirectusApi, error) {
    u, err := url.Parse(addr)
    if err != nil {
      return nil, err
    }
    h := &DirectusApi{
      directusUrl:     u,
      token:           token,
      trackingObjects: map[IDirectusObject]trackingRef{},
      errLogger:       log.New(os.Stdout, "[DIRECTUS-API][ERROR]\\t", log.Ltime),
      infoLogger:      log.New(os.Stdout, "[DIRECTUS-API][INFO]\\t", log.Ltime),
    }
    err = h.PingDirectus()
    if err != nil {
      return nil, err
    }
  
    ${accessorsContstructors.join("\n\t")}

    h.collectionsAccessors = map[string]IDirectusCollectionAccessor{
      ${accessorsMapping.join("\n\t")}
    }
  
    return h, nil
  }
  
  func (h *DirectusApi) PingDirectus() error {
    addr := *h.directusUrl
    addr.Path = path.Join(addr.Path, "/server/ping")
  
    resp, err := http.Get(addr.String())
    if err != nil {
      return err
    }
    defer resp.Body.Close()
  
    if resp.StatusCode != http.StatusOK {
      h.errLogger.Printf("Directus ping failed: %s\\n", err.Error())
      return fmt.Errorf("unexpected status code: %d", resp.StatusCode)
    }
    return nil
  }
  
  func NewDirectusCollectionAccessor[K string | uuid.UUID | int, V IDirectusObject](api *DirectusApi, collectionName string) *DirectusCollectionAccessor[K, V] {
    api.infoLogger.Printf("Created collection accessor for %s\\n", collectionName)
    return &DirectusCollectionAccessor[K, V]{
      api:            api,
      collectionName: collectionName,
    }
  }
  
  func (h *DirectusApi) add2Track(val any) bool {
    objects := val.(IDirectusObject).Track()
    objects = append(objects, val.(IDirectusObject))
    for _, obj := range objects {
      _, exists := h.trackingObjects[obj]
      if !exists {
        ownerCollection, exists := h.collectionsAccessors[obj.CollectionName()]
        if !exists {
          log.Fatalf("Collection accessor for object: %s not exists in map", obj.CollectionName())
        }
        h.infoLogger.Printf("Added tracking reference for object of type [%s]\\n", obj.CollectionName())
        obj_copy := obj.DeepCopy()
        ref := trackingRef{
          Original:        obj_copy,
          Actual:          obj,
          OwnerCollection: ownerCollection,
        }
        h.trackingObjects[obj] = ref
      }
    }
    return false
  }
  
  func (h *DirectusApi) SaveChanges() error {
    affectedObjects := 0
    startTime := time.Now()
    for _, obj := range h.trackingObjects {
      diff := obj.delta()
      if diff != nil {
        cas := obj.OwnerCollection
        err := cas.patch(diff, obj.Original.GetId())
        if err != nil {
          h.errLogger.Printf("Failed to save changes for object of type [%s]: %s\\n", obj.Original.CollectionName(), err.Error())
          return err
        }
        affectedObjects++
      }
    }
    deltaTime := time.Since(startTime)
    h.infoLogger.Printf("Changes saved, affected [%d] objects, %s\\n", affectedObjects, deltaTime)
    return nil
  }
  
  func key2String[K string | uuid.UUID | int](key K) string {
    switch any(key).(type) {
    case string:
      return any(key).(string)
    case uuid.UUID:
      return any(key).(uuid.UUID).String()
    case uint32:
      return strconv.FormatUint(uint64(any(key).(uint32)), 10)
    }
    // This code should not be reachable
    panic("How did you get there?")
  }
  `

  return ret;
}   


function pascalCase(typeName:string) {
  return typeName
        .split("_")
        .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
        .join("");
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