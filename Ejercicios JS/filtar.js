function esMayorQueDiez (elemento){
	return elemento >= 10;
}

var filtrados = [12, 5, 8, 130, 44].filter(esMayorQueDiez);
console.log(filtrados);