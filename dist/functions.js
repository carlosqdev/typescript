// arrow functions
var sayHi = function (name) {
    console.log("Hola ".concat(name));
};
sayHi('Carlos');
// palabra reservada function
function sayGoodbye(name) {
    console.log("Adios amigo ".concat(name));
}
sayGoodbye('Carlos');
// tipando nuestras funciones
function show() {
    console.log('Hola');
    return 1;
}
show();
// tipando los parametros
function show2(name) {
    console.log("Hola ".concat(name));
    return 2;
}
show2('Carlos Alberto');
