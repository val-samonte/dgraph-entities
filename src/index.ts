import 'reflect-metadata';
import { MetadataStorage } from './metadata/MetadataStorage';

declare global {
  namespace globalThis {
    var DgraphEntitiesMetadataStorage: MetadataStorage;
  }
}

export const dummy = () => {
  return 'Hello World!';
}