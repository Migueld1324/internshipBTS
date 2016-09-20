"use strict"
function createCalculator(n){
	function innerSuma (x){
		return n + x;
	}
	function innerResta (x){
		return n - x;
	}
	function innerMultiplicacion (x){
		return n * x;
	}
	function innerDivision (x){
		return n / x;
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