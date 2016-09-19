"use strict"
function replicate (times, num){
	var res = [];
	if((typeof times === 'number' || times instanceof Number) && (typeof num === 'number' || num instanceof Number)){
		if(times < 1){
			return res;
		}
		times--;
		res.push(num);
		console.log(res.length);
		return res.concat(replicate(times, num));
	} else {
		return false;
	}
}

console.log(replicate(3, 5));
console.log(replicate(10, 5));