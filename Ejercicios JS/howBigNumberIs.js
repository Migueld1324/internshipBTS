/*Write a function called howBigNumberIs which takes
3 parameters, every one of them are strings, that
can be or can be not a number, so the function have
to validate that, the function will execute a
Exponentiation, first is going to be the bigger
one powered by the smaller one, and then the result
powered by the last one. if one of the numbers is
NaN the function will return NaN.
If the result is a safe integer the function will
return ‘Ok’, if the number is not safe it have to return
‘Warning’ but if the number is Infinity function have
to return ‘To much’*/
"use strict"
function howBigNumberIs (num1, num2, num3){
	var res = 0;
	if (Number.isNaN(+num1) || Number.isNaN(+num2) || Number.isNaN(+num3)){
		return NaN;
	}
	if(+num1 >= +num2 && +num1 >= +num3){
		if(+num2 >= +num3){
			res = Math.pow(Number.parseFloat(num1), (Number.parseFloat(num3)));
			res = Math.pow(res, num2);
		} else {
			res = Math.pow(Number.parseFloat(num1), (Number.parseFloat(num2)));
			res = Math.pow(res, num3);
		}
	} else if(+num2 >= +num1 && +num2 >= +num3){
				if(+num1 >= +num3){
					res = Math.pow(Number.parseFloat(num2), (Number.parseFloat(num3)));
					res = Math.pow(res, num3);
				} else {
					res = Math.pow(Number.parseFloat(num2), (Number.parseFloat(num1)));
					res = Math.pow(res, num1);
				}
	} else if(+num3 >= +num2 && +num3 >= +num1){
				if(+num2 >= +num1){
					res = Math.pow(Number.parseFloat(num3), (Number.parseFloat(num1)));
					res = Math.pow(res, num2);
				} else {
					res = Math.pow(Number.parseFloat(num3), (Number.parseFloat(num2)));
					res = Math.pow(res, num1);
				}
	}
	console.log(res);
	if(Number.isSafeInteger(res)){
		return 'Ok';
	} else if(!(Number.isFinite(res))){
		return 'Too Much';
	} else {
		return 'Warning';
	}
}
console.log(howBigNumberIs('111a1','246gry0','-21'));
console.log(howBigNumberIs('11','-2460','21'));
console.log(howBigNumberIs('1','2','2'));
console.log(howBigNumberIs('16447','194','3'));