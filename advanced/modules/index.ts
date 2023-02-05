import { generateId, PI, User } from "./utils.module";

const myNumber = 10 * PI;

const myUser: User = {
  name: "myUser",
  pass: "myPass",
}

const myId = generateId()

console.log(myId, myUser, myNumber)