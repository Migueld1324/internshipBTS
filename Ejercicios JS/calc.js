/*Create a function called calc which takes 3 parameters,
the first and second one are string than can or can not
be a number, so the function have to validate if they
are valid numbers, and the third parameter will be a
string with 4 posibles operations “+” or “-“ or “*” or “/“,
(if the third param is not a valid operator return a string with
‘invalid parameter’) in base to that realise the operation
and return the value, if one of the parameters are NaN return NaN*/

function calc (num1, num2, operator){
	var res;
	if (Number.isNaN(+num1) || Number.isNaN(+num2)){
		return NaN;
	}
	switch(true){
		case operator === '*':
			res = ((Number.parseFloat(num1))*(Number.parseFloat(num2)));
			return res;
		case operator === '/':
			res = ((Number.parseFloat(num1))/(Number.parseFloat(num2)));
			return res;
		case operator === '+':
			res = ((Number.parseFloat(num1))+(Number.parseFloat(num2)));
			return res;
		case operator === '-':
			res = ((Number.parseFloat(num1))-(Number.parseFloat(num2)));
			return res;
		default:
			return 'Invalid parameter';
	}
}
console.log(calc('12','-11','*'));