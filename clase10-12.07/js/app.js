function esMayorDeEdad (edad) {
	return edad >= 18;
}

function sumar (n1, n2 = 5) {
	return Number(n1) + Number(n2);
}

// Crear una función que dados dos números los multiplique entre si

function multiplicar (n1, n2) {
	return Number(n1) * Number(n2);
}

// Crear una función que se llame dobleDelSiguiente
/*
	Esta función va a tomar un número y nos retorna el doble del siguiente número que pasamos: Ej:
	5 -> 12 // (5 + 1) * 2
*/

function dobleDelSiguiente (numero) {
	var elSiguiente = sumar(numero, 1);
	var elDoble = multiplicar(elSiguiente, 2);
	return elDoble;
}

console.log('Resultado de la función dobleDelSiguiente:');
console.log(dobleDelSiguiente(5));

console.log('===========');

var resultado = sumar(3);

console.log(resultado);

var resultado2 = sumar(resultado, 22);

console.log(resultado2);

var usuario = window.prompt('Decime tu nombre:');
var edad = window.prompt('Decime tu edad:');

if (esMayorDeEdad(edad)) {
	var confirma = window.confirm('¿Son tus datos correctos? ' + usuario + ' ' + edad);

	if (confirma) {
		window.alert('Hola ' + usuario + ' en 10 años tendrás ' + sumar(edad, 10));
	}
} else {
	window.alert('No tenés la edad necesaria');
}
