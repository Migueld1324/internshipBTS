"use strict"
function  pascal (n){
	var pascalRes = [];
	var pascalTemp = [];
	if(typeof n === 'number' || n instanceof Number){
		if(n < 1 || isNaN(n)){
			return false;
		}
		if(n === 1){
			pascalTemp.push(1);
			pascalRes.push(pascalTemp);
			return pascalRes;
		}
		pascalRes = pascal(n-1);
		var lastPascal = Array.from(pascalRes[n-2]);
		for(let i = 0; i < n; i++){
			if(i === 0 || i === n-1){
				pascalTemp.push(1);
			} else {
				pascalTemp.push(lastPascal[i-1] + lastPascal[i]);
			}
		}
		pascalRes.push(pascalTemp);
		return pascalRes;
	} else {
		return false;
	}
}
console.log(pascal(10));