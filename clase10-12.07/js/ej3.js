// Define la función llamada puedoIrAlBanco() la cual, recibiendo dos parámetros, el primero: diaDeLaSemana (string) y el segundo horaActual (number), retorne true, solamente cuando es posible ir al banco y encontrarlo abierto.

// IMPORTANTE: tenemos que saber que un banco está cerrado cuando es fin de semana (sábado y domingo) y cuando siendo día entre semana, no estamos dentro del horario bancario (9 a 15).

// Ejemplos de resultado esperado:

// puedoIrAlBanco('lunes', 10); // true, es día entre semana y está en horario bancario
// puedoIrAlBanco('martes', 18); // false, es día entre semana y NO está en horario bancario
// puedoIrAlBanco('sábado', 11); // false, es fin de semana

function puedoIrAlBanco (dia, hora) {
	return (dia !== 'sabado' && dia !== 'domingo') && (hora >= 9 && hora <= 15);
}

var diaSemana = prompt('Ingresar día de la semana: ');
var horaActual = parseInt(prompt('Ingresar horario: '));

var puedeIr = puedoIrAlBanco(diaSemana, horaActual);

if (puedeIr) {
	alert('Es día entre semana y esta en horario Bancario');
}
else {
	if (diaSemana !== 'sabado' && diaSemana !== 'domingo') {
		alert('Es día entre semana y NO está en horario bancario');
	} else {
 		alert('Es fin de Semana');
	}
}

// var dia = 'lunes';
// var hora = 16;
//
// console.log('Podemos ir al banco: ' + dia + ' ' + hora);
// console.log(puedoIrAlBanco(dia, hora));
