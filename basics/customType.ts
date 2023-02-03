type Person = {
  name: string
  code: string | number
  description?: string
}

const newPerson: Person = {
  code: 'h',
  name: 'carlos',
  description: 'hola'
}

type ServiceResponse = string | null | number | undefined

type UserCharges = 'admin' | 'normal' | 'superuser'

let response: ServiceResponse;
let user: UserCharges = 'admin'
