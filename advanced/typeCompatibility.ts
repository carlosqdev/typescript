// Case 1
// interface Pet {
//   name: string
// }

// class Dog2 {
//   name: string
// }

// let pet: Pet;
// // Ok, because of structural typing
// pet = new Dog2()

// Case 2
// interface Pet {
//   name: string
// }

// let pet: Pet;
// // dog's inferred type is { name: string; owner: string; }
// let dog = {name: 'dog 2', owner: 'Carlos' }
// pet = dog
// console.log(pet)

// Case 3
// interface Pet {
//   name: string
// }

// let dog = {name: 'dog 2', owner: 'Carlos' }
// function greet (pet: Pet) {
//   console.log(`Hello ${pet.name}`)
// }
// greet(dog) // Ok

// // Case 4
// enum Status {
//   Ready,
//   Waiting
// }

// enum Color {
//   Red,
//   Blue,
//   Green
// }

// let stat = Status.Ready
// stat = Color.Green; // Error

// Case 5
// class Animal2 {
//   feet: number;
//   constructor(name: string, numFeet: number){ }
// }
// class Size {
//   feet: number;
//   constructor(numFeet: number){}
// }
// let a:Animal2;
// let s:Size;
// a = s; // Ok
// s = a; // Ok

// Case 6
// interface Empty<T> {}
// let x: Empty<number>
// let y: Empty<string>
// x = y; // Ok, because y matches structure of x

// Case 7
interface NotEmpty<T> {
  data: T
}
let x: NotEmpty<number>
let y: NotEmpty<string>
x = y; // Error, because x and y are not compatible