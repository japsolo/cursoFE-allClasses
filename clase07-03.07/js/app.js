/* Creo una variable mensaje */
var mensaje = 'Estoy programando 💩';

console.log(mensaje); // Ejecuto el método log del objeto console.
console.error(mensaje);
console.warn(mensaje);

var userName = window.prompt('Hola, ¿cómo te llamas?');
var birthYear = window.prompt('Decime en que año naciste');
var result = 'Hola ' + userName + ' tenes ' + (2019 - birthYear) + ' años';

// console.log(userName);
// console.log(birthYear);
// console.log(result);
window.alert(result);
