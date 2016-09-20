function CreateCalculator(n){
	this.suma = function (number){
					return number + n;
				}
	this.resta = function (number){
					return number - n;
				}
	this.multiplicacion = function (number){
					return number * n;
				}
	this.division = function (number){
					return number / n;
				}
}

var calc = new CreateCalculator(3);
console.log(calc.suma(7));
console.log(calc.resta(2));
console.log(calc.multiplicacion(3));
console.log(calc.division(1));