// Es un tipo de datos que nos permite almacenar lista de valores estaticos.
var Users;
(function (Users) {
    Users[Users["NormalUser"] = 0] = "NormalUser";
    Users[Users["PayedUser"] = 1] = "PayedUser";
    Users[Users["AdminUser"] = 2] = "AdminUser";
    Users[Users["MegaUser"] = 3] = "MegaUser"; // 3
})(Users || (Users = {}));
var myUser = Users.AdminUser;
console.log(myUser); // => 2
// Personalizando los valore de mi enum para que inicie desde 5
var Users2;
(function (Users2) {
    Users2[Users2["NormalUser"] = 5] = "NormalUser";
    Users2[Users2["PayedUser"] = 6] = "PayedUser";
    Users2[Users2["AdminUser"] = 7] = "AdminUser";
    Users2[Users2["MegaUser"] = 8] = "MegaUser"; // 8
})(Users2 || (Users2 = {}));
var myUser2 = Users2.AdminUser;
console.log(myUser2); // => 7
// Personalizando los valore de mi enum e indicarle los valores que quiero
var Users3;
(function (Users3) {
    Users3[Users3["NormalUser"] = 5] = "NormalUser";
    Users3[Users3["PayedUser"] = 10] = "PayedUser";
    Users3[Users3["AdminUser"] = 15] = "AdminUser";
    Users3[Users3["MegaUser"] = 20] = "MegaUser";
})(Users3 || (Users3 = {}));
var myUser3 = Users3.AdminUser;
console.log(myUser3); // => 15
// Personalizando los valore de mi enum para trabajar con cadenas (string)
var Users4;
(function (Users4) {
    Users4["NormalUser"] = "normal";
    Users4["PayedUser"] = "payed";
    Users4["AdminUser"] = "admin";
    Users4["MegaUser"] = "mega";
})(Users4 || (Users4 = {}));
var myUser4 = Users4.AdminUser;
console.log(myUser4); // => admin
