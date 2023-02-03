// Es un tipo de datos que nos permite almacenar lista de valores estaticos.

enum Users{
  NormalUser, // 0
  PayedUser, // 1
  AdminUser, // 2
  MegaUser // 3
}

const myUser = Users.AdminUser
console.log(myUser) // => 2

// Personalizando los valores de mi enum para que inicie desde 5

enum Users2{
  NormalUser = 5, // 5
  PayedUser, // 6
  AdminUser, // 7
  MegaUser // 8
}

const myUser2 = Users2.AdminUser
console.log(myUser2) // => 7

// Personalizando los valores de mi enum e indicarle los valores que quiero

enum Users3{
  NormalUser = 5,
  PayedUser = 10,
  AdminUser = 15,
  MegaUser = 20
}

const myUser3 = Users3.AdminUser
console.log(myUser3) // => 15

// Personalizando los valores de mi enum para trabajar con cadenas (string)

enum Users4{
  NormalUser = 'normal',
  PayedUser = 'payed',
  AdminUser = 'admin',
  MegaUser = 'mega'
}

const myUser4 = Users4.AdminUser
console.log(myUser4) // => admin