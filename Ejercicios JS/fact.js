"use strict"
function fact (n){
	var res = 0;
	if(n === 1 || n === 0){
		return 1;
	}
	if(n < 0){
		return false;
	}
	res = n * fact(n-1);
	return res;
}
console.log(fact(4));