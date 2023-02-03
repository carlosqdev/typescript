// interfaces.
interface Person {
  name: string;
  code: string | number;
  charge: number
  description?: string // Si quiero que sea opcional le agrego => ?
  sayHello: () => string; // Aqui podemos decir que todos los objeto de este tipo tendran una funcion sayHello
}

let person: Person = {
  name: 'carlos',
  code: '01',
  charge: 1,
  description: 'Hola',
  sayHello: () => 'hola'
}

console.log(person.code);

let secondPerson: Person = {
  name: "",
  code: "",
  charge: 0,
  sayHello: () => 'Hello'
}

console.log(secondPerson.description = 'something'?.toUpperCase())