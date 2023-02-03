// Tipos basicos

// string, number, boolean, Object, Array<string>, string[]

// any existe por que aveces hay tipos de datos complejos de tipar pero deberias evitarlo

let age = 27; // inferencia de datos
let age2: number = 27 // tipado

let person: Object = {};

let fruits: string[] = ['apple', 'orange', ];
let ArrayObjects: Object[] = [{key: 'apple'}, {key: 'orange'}, ];

// tipo de dato void para funciones que no retornan nada.

function saludar(): void {
  console.log('hello world')
}

// tipo de dato unknow
let response: unknown;
response = true;

// tipo de datos null
let response2 = null; // estan vacias
let response3 = undefined; // no inicializada

// combinacion de tipos
let response4: number | null = 5;

console.log(response4.toString());

let response5: string | null;

// creando mis propios tipos de datos
type ResponseTypeService = number | undefined

let responseProducts: ResponseTypeService;
let responseCategorie: ResponseTypeService;

responseProducts?.toString().concat('');

// Type de asssertion
let message: any = "";

// casteo forma 1
let messageUpperCase = (message as string)
messageUpperCase.toLocaleUpperCase();

// casteo forma 2
messageUpperCase = <string> message;
messageUpperCase.toLocaleUpperCase();

// mas ejemplos de casteo
const canvas = <HTMLCanvasElement> document.getElementById("canvas");

const canvas2 = document.getElementById("canvas") as HTMLCanvasElement;