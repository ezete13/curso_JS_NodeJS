/**
 * Variables
 *
 * 3 Formas de definir variables
 * var
 * let
 * const
 */

// variables con VAR
var nombre = "Ezequiel";
console.log(nombre);

var edad = 27;
console.log(edad);

var persona = {
  nombre: "Ezequiel",
  apellido: "Tello",
  edad: 29,
  direccion: {
    calle: "alvear",
    numeroCasa: 27,
  },
  ciudades: ["San Juan", "Mendoza", "San Luis"],
};

console.log(persona);

var ciudad; 
console.log(ciudad);//Devuelve undefined
ciudad = 'San Juan';
console.log(ciudad);//Devuelve el valor asignado
ciudad = 'San Luis';
console.log(ciudad);//Devuelve el valor redefinido
ciudad = 13;
console.log(ciudad);//Al ser devilmente tipado se le puede asignar cualquier valor


// variables con LET
let nombre = 'Ezequiel';
console.log(nombre);

//Let funciona dentro de un bloque especifico y var en el archivo global

{
    let saludo = 'Hola';
    var despedida = 'Chau'
    console.log(saludo + ' por dentro');
    console.log(despedida + ' por fuera');
}
/*console.log(saludo + ' por fuera');//Dara error*/
console.log(despedida + ' por dentro'); 


//variables con CONST
const NUMERO_PI = 3.14;
console.log(NUMERO_PI);
/*NUMERO_PI = 45; //Las constantes no se puede redefinir ni declarar vacias*/

//template strings

var nombre = 'Alexis';
var saludo = `Hola soy ${nombre}

Como estas?`; //Template string permite instroducir variables dentro de strings y permite espacios en linea
console.log(saludo);