"use strict"
function greatestCommonDivisor(x, y){
	var div = 2;
	var gcd = 1;
	if((typeof x === 'number' || x instanceof Number) && (typeof y === 'number' || y instanceof Number)){
		if(x < 1 || y < 1){
			return false;
		}
		if(x < y){
			var min = x;
		} else {
			var min = y;
		}
		while (div < min){
			if(x%div === 0 && y%div === 0){
				x /= div;
				y /= div;
				gcd = div;
				return gcd *= (greatestCommonDivisor(x, y));
			} else {
				div++;
			}
		}
		return gcd;
	} else {
		return false;
	}
}
console.log(greatestCommonDivisor(36, 60));
console.log(greatestCommonDivisor(104723, 104729));
console.log(greatestCommonDivisor(104724, 104728));