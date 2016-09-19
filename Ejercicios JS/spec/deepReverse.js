"use strict"
/*function deepReverse (arr){
	if(!Array.isArray(arr)){
		return false;
	}
	var len = arr.length-1;
	var flag = Array.from(arr);
	for(let k = 0; k < arr.length; k++){
		if(Array.isArray(arr[k])){
			flag[k] = true;
			console.log(arr[k], flag[k]);
		}
	}
	for(let i = 0; i < arr.length; i++){
		for(let j = 0; j < len; j++){
			console.log(arr[j], arr[j+1]);
			if(Array.isArray(arr[j]) && flag[j] === true){
				arr[j] = deepReverse(arr[j]);
				flag[j] = false;
			}
			if(Array.isArray(arr[j+1]) && flag[j+1] === true){
				arr[j+1] = deepReverse(arr[j+1]);
				flag[j+1] = false;
			}
			var temp = 0;
			temp = arr[j];
			arr[j] = arr[j+1];
			arr[j+1] = temp;
			console.log(arr[j], arr[j+1]);
		}
		len--;
	}
	return arr;
}

//console.log(deepReverse([[1,2],[3,4]]));
//console.log(deepReverse([[1,2,3],[4,5,6],[7,8,9]]));
//console.log(deepReverse([[12,11,10],[9,8,7], [6,5,4], [3,2,1]]));
console.log(deepReverse([50, 51,[52, 53]]));

function find (arr, callback){
	if(Array.isArray(arr) && (callback instanceof Function)){
		var flag = true;
		for(let i = 0; i < arr.length; i++){
			var newArray = Array.from(arr);
			flag = callback(arr[i], i, newArray);
			if(flag){
				return arr[i];
			}
		}
		return undefined;
	} else {
		return false;
	}
}
console.log(find([1,2,3], function (element, i, array){
	return element > array.length;
}));
*/
function encrypt(str, num){
	var res = '';
	if((typeof str === 'string' || str instanceof String) && (typeof num === 'number' || num instanceof Number)){
		if(!Number.isInteger(num) || num < 0){
			return false;
		}
		if(num === 0 || str.length === 0){
			return str;
		}
		if(num > 1){
			str = encrypt(str, num-1);
		}
		for(let i = 0; i < 2; i++){
			if(i === 0){
				for(let j = 1; j < str.length; j++){
					res += str[j];
					j++;
				}
			} else {
				for(let j = 0; j < str.length; j++){
					res += str[j];
					j++;
				}
			}
			
		}
		return res;
	}
}
console.log(encrypt('This is a test!', 1));
console.log(encrypt('This is a test!', 2));
console.log(encrypt('This is a test!', 16));