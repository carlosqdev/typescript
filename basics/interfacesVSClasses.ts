// interface
interface PersonInterface {
  name: string;
  code: string | number;
  charge: number
  description?: string
  sayHello: () => string;
}

// class
class PersonClass {
  name: ""
  code: ""
  charge: 0
  description: ""

  sayHello() {
    console.log('Something')
  }
}

const personOne: PersonClass = new PersonClass();

personOne.sayHello()

interface PetInterface {
  sayHello: () => string
}

class PetClass {
  sayHello() {
    return "hola"
  }
}

class Dog implements PetInterface {
  sayHello() {
    return 'hola desde dog'
  }
}

class Cat extends PetClass {
  
}