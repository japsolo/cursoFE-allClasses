/* global $ */
var alumna = {
	nombre: 'Juana',
	email: 'juana@gmail.com',
	cursos: ['Frontend', 'Bootcamp']
};

var algoEnJson = '{"edad": 25, "nombre": "pedro"}';

console.log(JSON.parse(algoEnJson));
console.log(typeof JSON.parse(algoEnJson));

// var pais = window.prompt('Decime un país');

// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
// 	if (this.readyState === 4 && this.status === 200) {
// 		console.log(xhttp.response);
// 		console.log(typeof xhttp.response);
// 		var resultado = JSON.parse(xhttp.response);
// 		console.log(resultado);
// 		document.write('<h1>El país es ' + resultado[0].name + '<h1>');
// 		document.write('<img src="' + resultado[0].flag + '" width="100">');
// 	}
// };
// xhttp.open('GET', 'https://restcountries.eu/rest/v2/name/' + pais, true);
// xhttp.send();

// fetch('https://restcountries.eu/rest/v2/name/' + pais)
// 	.then(function (response) {
// 		return response.json();
// 	})
// 	.then(function (data) {
// 		console.log(data);
// 		document.write('<h1>El país es ' + data[0].name + '<h1>');
// 		document.write('<img src="' + data[0].flag + '" width="100">');
// 	});

console.log('Esto está después del pedido Asíncrono');

var elSelect = document.querySelector('#countries');
var selectProv = document.querySelector('#provincias');

fetch('https://restcountries.eu/rest/v2/all')
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		for (var i = 0; i < data.length; i++) {
			elSelect.innerHTML += '<option value="' + data[i].name + '">' + data[i].name + '</option>';
		}
	})
	.catch(function (error) {
		console.log('Error: ' + error);
	});

elSelect.addEventListener('change', function () {
	var paisElegido = this.value;
	if (paisElegido === 'Argentina') {
		fetch('https://apis.datos.gob.ar/georef/api/provincias')
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				selectProv.style.display = 'block';
				for (var i = 0; i < data.provincias.length; i++) {
					selectProv.innerHTML += '<option>' + data.provincias[i].nombre + '</option>';
				}
			})
			.catch(function (error) {
				console.log('Error: ' + error);
			});
	} else {
		selectProv.style.display = 'none';
		selectProv.innerHTML = '';
	}
});

$.ajax({
	url: 'https://api.themoviedb.org/3/list/1?api_key=8f2a16d4f0d2593718febacdf7b1d495'
})
	.done(function (data) {
		var lista = document.querySelector('#movies');
		for (var i = 0; i < data.items.length; i++) {
			lista.innerHTML +=
				'<li>' +
				data.items[i].title + '<br>' +
				'<img src="https://image.tmdb.org/t/p/w500' + data.items[i].poster_path + '" width="100">' +
				'</li>';
		}
	});

$.ajax({
	url: 'http://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es',
	success: function (data) {
		console.log(data);
	}
});
