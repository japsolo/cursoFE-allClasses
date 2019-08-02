function saludarFn () {
	return 'Hola, soy ' + this.nombre + ' ' + this.apellido + ' y estoy cursando ' + this.curso;
}

var pedro = {
	nombre: 'Pedro',
	apellido: 'Perez',
	curso: 'FrontEnd',
	saludar: saludarFn
};

var ana = {
	nombre: 'Ana',
	apellido: 'Saenz',
	curso: 'Backend',
	saludar: saludarFn
};

console.log(pedro.saludar());
console.log(ana.saludar());

var personaNueva = {
	nombre: window.prompt('Decime tu nombre:'),
	apellido: window.prompt('Decime tu apellido:'),
	curso: window.prompt('Decime tu curso:'),
	saludar: saludarFn
};

console.log(personaNueva.saludar());
