var estudiantes = ['Maria', 'Lucila', 'Martu', 'Cande', 'Pablo', 'Shaggy', 'Johathan', 'Santino', 'Milo', 'Jose', 'Iosi', 'Eze', 'Ale', 'Marie'];

estudiantes.push('Pedrito', 'Juanita'); // Agrega al final del array
var elUltimo = estudiantes.pop(); // Saca el último elemento dentro del array y te lo devuelve

estudiantes.unshift('Tessie', 'Javi');
var elPrimero = estudiantes.shift(); // Saca el primer elemento dentro del array y te lo devuelve

console.log('Sacamos a ' + elUltimo + ' del array.');
console.log('Sacamos a ' + elPrimero + ' del array.');

// for (var i = 0; i < estudiantes.length; i++) {
// 	if (i < 11) {
// 		console.log(estudiantes[i] + ' está en clase');
// 	} else {
// 		console.log('No está en clase: ' + estudiantes[i]);
// 	}
// }

estudiantes.forEach(function (unEstudiante, i) {
	// El 1er parámetro de forEach será cada uno de los elementos del array
	// El 2do parámentro del forEach será el índice de cada elemento
	if (i < 8) {
		console.log(unEstudiante + ' está en clase');
	} else {
		console.log('ESTÁN ON-LINE: ' + unEstudiante);
	}
});

var btn = document.querySelector('button');
var allPs = document.querySelectorAll('p');

btn.addEventListener('click', function () {
	allPs.forEach(function (oneP) {
		oneP.style.color = 'red';
	});
});

// indexOf(), splice(), slice(), join() y split().

// var i = 0;
// while (i < cantUsuarios) {
// 	usuarios.push(window.prompt('Nombre de Usuario: ' + (i + 1) + '/' + cantUsuarios));
// 	++i;
// }

var cantUsuarios = parseInt(window.prompt('Ingresar la cantidad de usuarios que desea registar: '));

var usuarios = [];

for (var i = 0; i < cantUsuarios; i++) {
	usuarios.push(window.prompt('Nombre de Usuario: ' + (i + 1) + '/' + cantUsuarios));
}

usuarios.forEach(function (elemento, indice) {
	console.log('Usuario ' + (indice + 1) + ': ' + elemento);
});
