/**
 * Operadores
 */

/**
 * Operadores de asignacion
 */

//Operador de asignacion
var x = 2; 
var y = true;

//Operador de asignacion de adicion (+=)
var x = 2;
var y = 1;
x +=y; // x=x+y
console.log(x);

//Operador de asignacion de resta (-=)
var x = 1;
var y = 2;
x -= y; //x =x-y;
console.log(x);

//Operador de asignacion de Multiplicacion (*=)
var x = 1;
var y = 2;
x *= y; //x =x*y;
console.log(x);

//Operador de asignacion de División (/=)
var x = 1;
var y = 2;
x /= y; //x =x*y;
console.log(x);

//Operador de asignacion de Residuo (%=)
var x = 1;
var y = 2;
x %= y; //x =x%y;
console.log(x);

//Operador de asignacion de Exponenciacion (**=)
var x = 1;
var y = 2;
x **= y; //x =x^y;
console.log(x);

/**
 * Operadores de comparacion (Retornan Valores Lógicos)
 */

// Operador igual (==)
console.log(3==3);
console.log(3=='3'); //True, en este string java interpreta que hay un numero

// Operador no es igual (!=)
console.log(3!=3);

// Operador estrictamente igual (===)
console.log(3===3);
console.log(3 === '3'); //False, el operador estricto por lo tanto el tipo tambien toma relevancia

//Operadpor desigualdad estricta (!==)
console.log(3 !== '3');

//Operadores  >, >=, <, <=
console.log(3>4); 
console.log(3>=3);
console.log(2<4);
console.log(2<=2);

/**
 * Operadores aritméticos
 * +, -, *, /, %, **
 */

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);
console.log(2**2);

//Operadores de incremento (++)
var numero = 0;
console.log(++numero); //Incrementa la variable en una unidad
console.log(numero++); //Muestra como esta actualmente y luego incrementa en el proximo uso
console.log(numero); //Prueba del incremento de la sentencia anterior

//Operador de decremento (--)
var numero = 3;
console.log(--numero);
console.log(numero--);
console.log(numero);

/**
 * Operadores Lógicos
 */

// AND 
console.log(true && true);
console.log(2 > 3 && 1 <= 2);

//OR
console.log(true || false);
console.log(false || false);

//NOT
console.log(!true);
console.log(!false);

/**
 * Otros Operadores
 */

//Operador de caneda o concatenación (+ en strings)
var nombre = 'Ezequiel';
var apellido = 'Tello';
var nombresCompletos = nombre + ' ' + apellido;
console.log(nombresCompletos);

//Operador condicional (condicion ? valor si es verdadero : valor si es falso)
console.log(2 > 3 ? 'Es mayor' : 'Es menor');

//Operador de desestructuracion
var persona = {
    nombre: 'Ezequiel',
    apellido: 'Tello'
}

var {nombre, apellido} = persona; //Extrae esa propiedad de ese objeto
console.log(nombre);
console.log(apellido);
console.log(persona); 

var {nombre:name, apellido} = persona;
console.log(name);
console.log(apellido);
console.log(persona); 

//desestructuracion de arreglos
var arreglo = [1,2,3,4,5];

var [primerPosicion, segundaPosicion] = arreglo;
console.log(primerPosicion);
console.log(segundaPosicion);

/**
 * Operador de miembro o acceso de propiedad
 */

//Notacion punto
var persona = {
    nombre: 'Alexis',
    apellido: 'Tello'
}

console.log(persona.nombre);
console.log(persona.apellido);

//Notacion Corchetes
var persona = {
    nombre: 'Alexis',
    apellido: 'Tello'
}

console.log(persona['nombre']); //se accede mediante el nombre de la propiedad del objeto

// notacion por corchete en arreglos
var arreglo =[21,22,23,25,26,27];
console.log(arreglo[1]); //se accede mediante la posicion

//Operador de determinacion de tipo (typeof)
console.log(typeof'Hola');
console.log(typeof 21);
console.log(typeof true);

