//// uid
// reverse

//// default, uid, bool, datetime, float, geo, int, string
// list
// - count
// index
// - upsert

//// datetime
// index
// - year
// - month
// - day
// - hour

//// string
// lang
// index - must select at least 1 tokenizer, select only 1 from exact / hash / term
// - exact
// - hash
// - term
// - fulltext
// - trigram

//// password

export const reverse  = Symbol('directive:reverse');
export const count    = Symbol('directive:count');
export const upsert   = Symbol('directive:upsert');
export const year     = Symbol('datetime:index:year');
export const month    = Symbol('datetime:index:month');
export const day      = Symbol('datetime:index:day');
export const hour     = Symbol('datetime:index:hour');
export const exact    = Symbol('string:index:exact');
export const hash     = Symbol('string:index:hash');
export const term     = Symbol('string:index:term');
export const fulltext = Symbol('string:index:fulltext');
export const trigram  = Symbol('string:index:trigram');
export const password = Symbol('password');

export type PredicateOptions = 
  typeof reverse | 
  typeof count | 
  typeof upsert | 
  typeof year | 
  typeof month | 
  typeof day | 
  typeof hour | 
  typeof exact | 
  typeof hash | 
  typeof term | 
  typeof fulltext | 
  typeof trigram | 
  typeof password;

const a = (...args: PredicateOptions[]) => {

}
