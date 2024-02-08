//Comentario de una sola linea
/*Comentario multilinea*/

/**
 * Tipos de Datos
 */

// numero - number
console.log(27);
console.log(27.56);

// texto - text
console.log("Comillas Dobles");
console.log("Comillas simples");
console.log(`Comillas invertidas`);

// logicos - booleans
console.log(true);
console.log(false);

// indefinido - undefined
console.log(undefined);

// null - nulo
console.log(null);

/**
 * Tipo de datos estructurales
 */

// objeto - object
console.log({
  nombre: "Ezequiel",
  edad: 27,
  fechaNacimiento: null,
  esAlto: false,
  ciudad: ["San Juan", "Mendoza", "San Luis"],
  direccion: { callePrincipal: "Alvear" },
});

// arreglo - array
console.log(["Argentina", "Mexico", "Chile", "Brasil"]);
console.log(["Ezequiel", true, { nombre: "Ezequiel" }, [1, 2, 3, 4, 5]]);


//Ejecicio 1
var horasXdia = 24;
var minutosXhora = 60;
var segundosXminuto = 60;

var segundosXdia = segundosXminuto * minutosXhora * horasXdia;
console.log(segundosXdia);

//Ejercicio 2
var ancho = 2;
var alto = 5;
var area = ancho * alto;
console.log(area);

//Ejecicio 3
var factor = 9;
var divisor = 5;
var sumando = 32;
let grados=20;
var calculo = ((grados * factor) / divisor) + sumando;

console.log(calculo);
