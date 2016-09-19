"use strict"
function flatten(ary){
	var arrRes = [];
	var temp = 0;
	for(let i = 0; i < ary.length; i++){
		if(Array.isArray(ary[i])){
			if(ary[i].length === 0){
				return [];
			}
			arrRes = arrRes.concat(flatten(ary[i]));
		} else {
			temp = ary[i];
			if(temp === undefined){ 
				continue;
			}
			arrRes = arrRes.concat(temp);
		}
	}
	return arrRes;
}

function fibonacci (n){
	var fib = 0;
	if(n === 1 || n === 2){
		return 1;
	}
	if(n >= 3){
		fib = (fibonacci(n-1) + fibonacci(n-2));
	}
	return fib;
}
console.log(fibonacci(10));

console.log(flatten([1,2,[3,4,5,[6,7,8,[9,10,11,[12,13,14,15,[16, 17 , 18, 19, [20, 21, 22, 23, [24, 25, 26, [27, 28, 29, 30]]]]]]]]]));
//console.log(flatten([1,2,[3,4,[5,6],7],8]));