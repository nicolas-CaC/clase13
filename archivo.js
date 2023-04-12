// Variables:
// var noUsar
let paraCambiar = 2;
const valorFijo = "asas";

// Operaciones:
paraCambiar = paraCambiar + 3;
console.log('Resultado:', paraCambiar);

paraCambiar = paraCambiar - 1;
console.log('Resultado:', paraCambiar);

paraCambiar = paraCambiar * 2;
console.log('Resultado:', paraCambiar);

paraCambiar = paraCambiar / 4;
console.log('Resultado:', paraCambiar);

console.log(`El valor actual es ${paraCambiar} (estoy hablando de la variable)`)
console.log({ paraCambiar }) // 2

paraCambiar = '2';

let pregunta = paraCambiar === 2
let pregunta2 = paraCambiar == 2

// Condicionales

if (pregunta) {
    console.log('\n\nparaCambiar es igual a dos')
} else {
    console.log('\n\nparaCambiar no es para nada igual a dos')
}


if (pregunta) {
    console.log('\n\nparaCambiar es del mismo tipo que 2')
} else if (pregunta2) {
    console.log('\n\nparaCambiar no es del tipo número pero si lo convierto es igual a 2')
}

// console.log(algo)