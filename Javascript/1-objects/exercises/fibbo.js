let log = console.log;

let myObj = {}; // Cria um Novo Objeto
log(myObj.constructor); //function Object(){} <-- Construtor de Objeto com as Propriedades do Prototipo
log(myObj.__proto__ == myObj.constructor.prototype);
function Cat(){
    // constructor for kitty
}

let kitty = new Cat();
log(kitty.__proto__ == Cat.prototype);
log(kitty.__proto__.__proto__ == Object.prototype);
log(Object.prototype.__proto__);

function Animal(){}

Object.setPrototypeOf(Cat.prototype, Animal.prototype);
log(kitty.__proto__); //Propriedade Gato
log(kitty.__proto__.__proto__); //Propriedade Animal
log(kitty.__proto__.__proto__.__proto__); // 
log(kitty.__proto__.__proto__.__proto__.__proto__);