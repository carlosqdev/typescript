interface Person {
  name: string
  age: number
}

// con las interfaces podemos extender ciertas funcionalidades

interface Employee extends Person { // este incluye los valoes que tiene Person
  charge: string
}

const newEmployee: Employee = {
  name: 'carlos',
  age: 27,
  charge: ""
}

// Union types o extender entre types
type User = {
  id: string
}

type Admin = User & {
  token: string
}

const myAdmin: Admin = {
  id: 'my-admin',
  token: 'my-token'
}

// Los types tienen mas especificidad al momento de elegir valores

// tipos de datos
type ServiceResponseToken = string | null | undefined | number;

// respuestas especificas
type UserTypes = 'admin' | 'super' | 'algo mas'

const myUser:UserTypes = 'super'

// Las interfaces se pueden acomplar entre ellas mismas.

interface Developer {
  name: string
  stack: string[]
}

interface Developer {
  phone: string;
}

const me: Developer = {
  name: '',
  stack: [],
  phone: "1212312144"
}

