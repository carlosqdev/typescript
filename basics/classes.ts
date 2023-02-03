class Animal {
  name: 'Generic animal' // este es publico
  private age = 10 // solo lo accedo desde la clase original
  protected identity = 'lll' // es accesible desde otras clases que extiendan de la misma

  constructor() { }

  sayHi() { // esta funcion es publico
    console.log(`Grr ${this.age}`)
  }
}

const myAnimal = new Animal();
myAnimal.sayHi();

// Herencia entre clases

class Dog extends Animal {
  type: 'Pastor aleman'

  constructor() {
    super()
    console.log('something')
  }

  sayHi() {
    this.identity
  }
}

const myDog = new Dog();
myDog.sayHi()