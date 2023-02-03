// arrow functions
const sayHi = (name) => {
  console.log(`Hola ${name}`)
}

sayHi('Carlos');

// palabra reservada function
function sayGoodbye(name) {
  console.log(`Adios amigo ${name}`)
}

sayGoodbye('Carlos')

// tipando nuestras funciones
function show(): number {
  console.log('Hola')
  return 1
}

show()

// tipando los parametros
function show2(name: string): number {
  console.log(`Hola ${name}`)
  return 2
}

show2('Carlos Alberto')