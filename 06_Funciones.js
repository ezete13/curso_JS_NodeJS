/**
 * Funciones
 */

//declarativa
function saludar(){
    console.log('Hola desde una funcion');
}
saludar();


var name = 'Ezequiel';
function saludar (nombre) {
    console.log(`Hola soy ${nombre}`);
}
saludar(name);


var name = 'Ezequiel';
function saludar(nombre) {
    return `Hola soy ${nombre}`; 
}
var saludo = saludar(name);
console.log(saludo);


//Funciones Expresion o anonimas
var suma = function(a, b) {
    return (a + b);
}
 var resultado = suma(2, 2);
console.log(suma(2, 2));
console.log(resultado);

//Funciones Arrow
var resta = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
    } else {
        return 'Uno de los elementos no es número';
    }
    
}
console.log(resta(2, 4));


var multiplicar = (a, b) => a * b; //se pueden utilizar con el return implícito
console.log(multiplicar(2, 2));
//El uso depende de la complejidad de la funcion si se necesitan mas lineas las llavez seran una mejor opcion

