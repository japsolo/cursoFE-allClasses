var enlace = document.querySelector('a');

enlace.addEventListener('click', function (event) {
	event.preventDefault(); // Evita que se ejecute el href del enlace
	window.alert('Hiciste click en el enlace');
});

var elFormulario = document.querySelector('form');

// var validarFormulario = function (e) {
// 	e.preventDefault();
// };

function validarFormulario (e) {
	e.preventDefault();
};

elFormulario.addEventListener('submit', validarFormulario);

// Ejercicio Show me the money
// Obtengo todos los botónes
var botones = document.querySelectorAll('button[name]');

botones.forEach(function (unBoton) {
	// A cada botón le asignamos el evento click
	unBoton.addEventListener('click', function () {
		// Obtengo el valor del atributo name del botón
		var puntero = this.getAttribute('name');
		// Capturo la imagen que en su atributo alt tenga el mismo valor que la variable puntero
		var laImagen = document.querySelector('[alt=' + puntero + ']');
		// Una vez capturada la imagen, le asigno el comportamiento de alternar la clase hidden
		laImagen.classList.toggle('hidden');
	});
});
