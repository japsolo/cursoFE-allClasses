// var number = 1;

// while (number <= 100) {
// 	if (number % 3 === 0) {
// 		console.log('El número ' + number + ' es múltiplo de 3.');
// 	}

// 	// console.log(number % 3 === 0 ? 'El número ' + number + ' es múltiplo de 3.' : null);

// 	number++;
// }

var tries = 0;

if (window.confirm('¿Querés jugar?')) {
	do {
		var numeroDelUsuario = Number(window.prompt('Ingresá un número entre 1 y 5'));

		var isOk = numeroDelUsuario < 1 || numeroDelUsuario > 5 || isNaN(numeroDelUsuario);

		if (isOk === true) {
			window.alert('Tenés que ingresar un número del 1 al 5');
			tries++;
			window.alert('Intento: ' + tries);
		}
	} while (isOk === true && tries < 3);

	if (!isOk) {
		var randomNumber = Math.ceil(Math.random() * 5);

		if (randomNumber === numeroDelUsuario) {
			window.alert('Los números son iguales');
		} else {
			window.alert('Los números NO son iguales');
		}

		console.log('Valor: ' + numeroDelUsuario);
		console.log('Tipo de dato: ' + typeof numeroDelUsuario);
		console.log('Número random: ' + randomNumber);
	} else {
		window.alert('No podés jugar más');
	}
}
