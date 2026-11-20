let edadActual = parseInt(prompt("Ingresa tu edad actual:"));
let edadMaxima = parseInt(prompt("Ingresa tu edad máxima estimada:"));
let snackFavorito = prompt("Ingresa el nombre de tu snack favorito:");
let snacksPorDia = parseInt(prompt("¿Cuántos snacks estimás comer por día?"));
let precioPorUnidad = parseFloat(prompt("¿Cuál es el precio por unidad del snack?"));

let añosRestantes = edadMaxima - edadActual;
let diasRestantes = añosRestantes * 365;
let cantidadFinal = diasRestantes * snacksPorDia;

alert(`Necesitarás ${cantidadFinal} de ${snackFavorito} para que te alcancen hasta los ${edadMaxima} años.`);

let gastoTotal = cantidadFinal * precioPorUnidad;
alert(`Gastarás un total de $${gastoTotal} en ${snackFavorito} a lo largo de tu vida.`);
console.log(`Gasto total estimado en ${snackFavorito}: $${gastoTotal}`);