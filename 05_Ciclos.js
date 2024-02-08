/**
 * Ciclos
 */

//While
var contador = 1;
while (contador <= 5) {
    console.log('Hola Mundo');
    contador++;
}

// Do - while
var contador = 6;
do {
    console.log('Hola Mundo');
    contador++;
} while (contador <= 5);

// For
for (let i = 0; i < 5; i++) {
    console.log('Hola Mundo');
}

//For in
var persona = {
    nombre: 'Ezequiel',
    apellido: 'Tello',
    edad: 27
}
for (let clave in persona) {
    console.log(clave, persona[clave]);
}

//for of
var arreglo = [1,2,3,4,5]
for (const valor of arreglo) {
    console.log(valor);
}
var nombre='Ezequiel'
for (const valor of nombre) {
    console.log(valor);
}