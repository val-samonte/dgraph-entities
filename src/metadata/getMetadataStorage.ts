import { MetadataStorage } from './MetadataStorage';

export const getMetadataStorage = (): MetadataStorage => {
  return globalThis.DgraphEntitiesMetadataStorage || (globalThis.DgraphEntitiesMetadataStorage = new MetadataStorage());
}