
// https://github.com/Microsoft/TypeScript/issues/7169

export const Node = () => {
  return (target: any) => {
    
  }
}

/*

@Node()
class User {

  @Predicate(exact)
  name: string;

  @Predicate(int)
  age: number;

  @Predicate(reverse, count)
  follows: User[];
}

// Query
entity(User)
  .select([
    'uid',
    'name', 
    'age',
    subentity('follows')
      .select([
        'uid',
        'name', 
        'age',
        reverse(User, 'follows', 'followers') 
          .select([
            'name'
          ])
      ])
    count('follows', 'follows_count')
  ])
  .whereUid('0x3')
  .anyOfTerms('name', 'foo bar')
  .commit()

// Mutation
entity(User)
  .create({
    name: 'Foo',
    age: 42,
    follows: [
      entity(User)
        .create({
          name: 'Bar',
          age: 24
        }),
      entity(User).whereUid('0x3')
    ]
  })
  .commit()

*/