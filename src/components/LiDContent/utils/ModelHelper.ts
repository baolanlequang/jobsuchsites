 
export class ModelHelper {
  async decodeJsonFromFile<T>(fileName: string, modelType: { new(): T } | Array<{ new(): T }>): Promise<T | T[] | null> {
    try {
      const fileResponse = await fetch("lid_jsons/" + fileName + ".json");
      if (!fileResponse.ok) {
          throw new Error(`Failed to fetch ${fileName}.json`);
      }
      const data = await fileResponse.text();
      if (Array.isArray(modelType)) {
        const decodedObjects = JSON.parse(data) as T[];
        return decodedObjects;
      } else {
        const decodedObject = JSON.parse(data) as T;
        return decodedObject;
      }
    } catch (error) {
      console.log('error:', error);
      return null;
    }
  }
}