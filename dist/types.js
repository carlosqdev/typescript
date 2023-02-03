// Tipos basicos
// string, number, boolean, Object, Array<string>, string[]
// any existe por que aveces hay tipos de datos complejos de tipar pero deberias evitarlo
var age = 27; // inferencia de datos
var age2 = 27; // tipado
var person = {};
var fruits = ['apple', 'orange',];
var ArrayObjects = [{ key: 'apple' }, { key: 'orange' },];
// tipo de dato void para funciones que no retornan nada.
function saludar() {
    console.log('hello world');
}
// tipo de dato unknow
var response;
response = true;
// tipo de datos null
var response2 = null; // estan vacias
var response3 = undefined; // no inicializada
// combinacion de tipos
var response4 = 5;
console.log(response4.toString());
var response5;
var responseProducts;
var responseCategorie;
responseProducts === null || responseProducts === void 0 ? void 0 : responseProducts.toString().concat('');
// Type de asssertion
var message = "";
// casteo forma 1
var messageUpperCase = message;
messageUpperCase.toLocaleUpperCase();
// casteo forma 2
messageUpperCase = message;
messageUpperCase.toLocaleUpperCase();
// mas ejemplos de casteo
var canvas = document.getElementById("canvas");
var canvas2 = document.getElementById("canvas");
