/**
 * Control flujo
 */

// Estructura IF

var administrador = true;
if (administrador) {
    console.log('Bienvenido al Sistema');
} 

var administrador = 'administrador';
if (administrador === 'administrador') {
    console.log('Bienvenido al Sistema');
}

const MAYORIA_EDAD = 18;
var edadPersona = 15;

if (edadPersona>=MAYORIA_EDAD) {
    console.log('Es mayor');
} else {
    console.log('Es menor');
}

var semaforo = 'pupura';
if (semaforo==='verde') {
    console.log('Avanza');
}else if (semaforo==='amarillo'){
    console.log('Preparate');
} else if (semaforo === 'rojo'){
    console.log('Pare');
} else {
    console.log('color invalido');
}


var semaforo = 'pupura';
switch (semaforo) {
    case (semaforo==='verde'):
        console.log('Avanza');
        break;
    case (semaforo==='amarillo'):
        console.log('Prcaución');
        break;
    case (semaforo==='rojo'):
        console.log('Pare');
        break;
    default:
        console.log('color invalido');
        break;
}

