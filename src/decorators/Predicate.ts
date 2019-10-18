import { PredicateOptions } from './types'

export const Predicate = (...options: PredicateOptions[]) => {
  return (target: any, key: string) => {
    console.log(target, key);
    const t = Reflect.getMetadata('design:type', target, key);
    console.log(t.name);
  }
}