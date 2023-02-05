// Podemos declarar variables, interfaces, clases que van a responder a un tipo de datos.

interface MyInterface<T> {
  field: T;
}

interface Example {
  id: string;
  name: string;
}

const myExample: MyInterface<Example> ={
  field: {
    id: 'example',
    name: 'example',
  }
}

const myValue: MyInterface<string> = {
  field: "field"
}

const myValue2: MyInterface<number> = {
  field: 2
}

// ejemplo con clases

class myClass<T> {
  field: T

  constructor(field: T) {
    this.field = field
  }
}

const myObject: myClass<number> = new myClass(10)

// Ejemplo  con funciones
function getData<T>(id: string): Promise<T> | void{

}

getData('hola')

// Example with classes
interface UserResponse {
  id: number
  name: string
}

class HttpResponse<T> {
  data: T
  status: number
  code: number

  constructor(data: T, status: number, code: number){
    this.data = data
    this.status = status
    this.code = code
  }
}

const fetchUser = ():UserResponse => {
  return {
    id: 1,
    name: 'Carlos'
  }
}

const myUser = fetchUser()
const res = new HttpResponse(myUser, 200, 1)
console.log(res)

class CRUD<T> {
  private items: T[]
  constructor(items: T[]){
    this.items = items
  }

  addItem(item: T) {
    this.items.push(item)
  }

  RemoveLastItem() {
    this.items.pop
  }

  PrintItems() {
    return this.items
  }
}

const users: UserResponse[] = [
  {
    id: 1, name: 'Carlos'
  },
  {
    id: 2, name: 'Carlos 2'
  },
  {
    id: 3, name: 'Carlos 3'
  }
]

const userCRUD:CRUD<UserResponse> = new CRUD(users)
userCRUD.addItem({id: 4, name: "TypeScript"})
console.log(userCRUD.PrintItems())
