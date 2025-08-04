//Data Types in JS

// jeito bruto, não muito prático
let boolean = "boolean" ;
let num = "num";
let string = "string";
let bigInt = "bigInt";
let undefined = "undefined";
let nul = "nul";
let symbol = "symbol";
let object = "object";

const showData = [boolean, num, string, bigInt, undefined, nul, symbol, object];

console.log(showData);

// jeito like a PRO

const dataTypes = [
    "boolean",
    "number",
    "string",
    "bigInt",
    "undefined",
    "null",
    "symbol",
    "object"
  ];
  
  console.log(dataTypes);

  //object

  var obj = {
    a : "Hello World",
    b : "42",
    c :true,
  };

  obj.a;
  obj.b;
  obj.c;

console.log()

//badstring - work with strings
const badString = string;
console.log(badString);

const name = "Ral";
const greeting = `Hello, Master ${name}`;
console.log(greeting); // "Hello, Ral"

const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."

let text = "Big RAl";
let char = text.charAt(2);
console.log(char);