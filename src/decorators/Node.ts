
export const Node = () => {
  return (target: string, key: string) => {

  }
}

/*

entity(User)
  .select([
    'uid',
    'name', 
    'age',
    subentity('follows') // has type User[]
      .select([
        'uid',
        'name', 
        'age'
      ])
  ])
  .whereUid('0x3')
  .commit()

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