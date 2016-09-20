"use strict"
function createCalculator(n){
	function innerSuma (number){
		return number + n;
	}
	function innerResta (number){
		return number - n;
	}
	function innerMultiplicacion (number){
		return number * n;
	}
	function innerDivision (number){
		return number / n;
	}
	return {
			suma: innerSuma,
			resta: innerResta,
			multiplicacion: innerMultiplicacion,
			division: innerDivision
		   };
}

var calc = createCalculator(3);
console.log(calc.suma(7));
console.log(calc.resta(2));
console.log(calc.multiplicacion(3));
console.log(calc.division(1));