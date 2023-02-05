interface PersonExample {
  name: string
  age: number
}

// interface getPerson {
//   getName: () => string
//   getAge: () => number
// }

type Getter<T> = {
  [Property in keyof T as `get${Capitalize<string & Property>}`]: () => T[Property]
}

type GetPerson = Getter<PersonExample>

interface AnimalExample {
  id: number
  name: string
  type: number
  isAdopted: boolean
}

type GetAnimal = Getter<AnimalExample>