"use strict"
function countSubArrays(ary){
	var elems = 0;
	var countArrays = 0;
	if((Array.isArray(ary))){
		if(ary.length === 2){
			return 1;
		}
		if(ary.length < 2){
			return false;
		}
		elems = ary.length;
		for(let i = 0; i < elems; i++){
			if(i >= 1){
				countArrays++;
			}
		}
		ary.shift();
		return countArrays += countSubArrays(ary);
	} else {
		return false;
	}
}
console.log(countSubArrays([2, -8, 3, -2, 4, -10, 1, 12]));