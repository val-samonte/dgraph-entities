import 'reflect-metadata';
import { MetadataStorage } from './metadata/MetadataStorage';
import { Predicate } from './decorators/Predicate';
import { Node } from './decorators/Node';
import { reverse, exact, fulltext, int } from './decorators/types';
import { ListOf } from './decorators/ListOf';

declare global {
  namespace globalThis {
    var DgraphEntitiesMetadataStorage: MetadataStorage;
  }
}

@Node()
class User {

  @Predicate(int)
  age?: number;

  @Predicate(exact, fulltext)
  name?: string;

  @Predicate(reverse)
  @ListOf(User)
  follows?: User[];

}



export const dummy = () => {
  return 'Hello World!';
}