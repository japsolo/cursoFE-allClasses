var nombreDeVisitante = window.prompt('¿Cómo te llamas?');

var saludo = document.querySelector('#saludar');

saludo.innerHTML = 'Hola <i>' + nombreDeVisitante + '</i>. Bienvenid@';

var elH1 = document.querySelector('h1');
console.log(elH1);

var botonRojo = document.querySelector('#botonRojo');
var botonVerde = document.querySelector('#botonVerde');
var botonAmarillo = document.querySelector('#botonAmarillo');

botonRojo.onclick = function () {
	elH1.setAttribute('class', 'texto-rojo');
};

botonVerde.onclick = function () {
	elH1.setAttribute('class', 'texto-verde');
};

botonAmarillo.onclick = function () {
	elH1.setAttribute('class', 'texto-amarillo');
};

var otroH1 = document.querySelector('[title=ej1]');
console.log(otroH1);

var otroH1Mas = document.querySelector('.titulo-rojo');
console.log(otroH1Mas);

var todosLosP = document.querySelectorAll('p');
console.log(todosLosP);

var unEnlace = document.getElementById('enlace');
console.log(unEnlace);

var elMismoEnlace = document.querySelector('#enlace');
console.log(elMismoEnlace);

// todosLosP es un Array. Tengo que hacer un loop, es decir, iterarlos. A cada uno le voy a cambiar el color.

todosLosP.forEach(function (unP) {
	unP.style.color = 'green';
	unP.style.FontSize = '29px';
	unP.style.textAlign = 'center';
	unP.style.fontFamily = 'Comic Sans MS';
});

// for (var i = 0; i < todosLosP.length; i++) {
// 	todosLosP[i].style.color = 'green';
// 	todosLosP[i].style.FontSize = '29px';
// 	todosLosP[i].style.textAlign = 'center';
// 	todosLosP[i].style.fontFamily = 'Comic Sans MS';
// }

// var contador = 0;

// do {
// 	todosLosP[contador].style.color = 'green';
// 	todosLosP[contador].style.FontSize = '29px';
// 	todosLosP[contador].style.textAlign = 'center';
// 	todosLosP[contador].style.fontFamily = 'Comic Sans MS';
// 	contador++;
// } while (contador < todosLosP.length);

// Capturamos a todas las imágenes con la clase thumb. Obtenemos un array de objetos de DOM
var miniaturas = document.querySelectorAll('.thumb');

// Capturamos a la imagen grande
var imagenGrande = document.querySelector('#largeImage');

// Iteramos sobre el array de imágenes miniatura
miniaturas.forEach(function (unaMiniatura) {
	// A cada imagen miniatura le asignamos el evento click
	unaMiniatura.onclick = function () {
		// Capturamos el atributo src de la imagen a la que dimos click
		var srcDeEstaMiniatura = this.getAttribute('src');
		// A la imagen grande le asignamos el valor de src de la imagen miniatura
		imagenGrande.setAttribute('src', srcDeEstaMiniatura);
	};
});

// hasAttribute() - Pregunta si un objeto del DOM tiene un atributo determinado.

console.log('Tiene atributo id:', imagenGrande.hasAttribute('id'));
console.log('Tiene atributo class:', imagenGrande.hasAttribute('class'));
