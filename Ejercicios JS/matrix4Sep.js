"use strict"
var arr = [[1,2,3],[4,5,6],[7,8,9]];

function uno (arr){
	var str = '';
	for(let i = 0; i < arr.length; i++){
		for(let j = 0; j < arr.length; j++){
			str += arr[i][j];
		}
	}
	return str;
}

function dos (arr){
	var str = '';
	for(let i = arr.length-1; i >= 0; i-- ){
		for(let j = arr.length-1; j >= 0; j--){
			str += arr[i][j];
		}
	}
	return str;
}

function tres (arr){
	var str = '';
	for(let i = 0; i < arr.length; i++){
		for(let j = arr.length-1; j >= 0; j--){
			str += arr[i][j];
		}
	}
	return str;
}

function cuatro (arr){
	var str = '';
	for(let i = arr.length-1; i >= 0; i-- ){
		for(let j = 0; j < arr.length; j++){
			str += arr[i][j];
		}
	}
	return str;
}

function cinco(arr){
	var str = '';
	for(let i = 0; i < arr.length; i++){
		for(let j = 0; j < arr.length; j++){
			str += arr[j][i];
		}
	}
	return str;
}

function seis (arr){
	var str = '';
	for(let i = 0; i < arr.length; i++){
		for(let j = arr.length-1; j >= 0; j--){
			str += arr[j][i];
		}
	}
	return str;
}

function siete (arr){
	var str = '';
	for(let i = arr.length-1; i >= 0; i-- ){
		for(let j = 0; j < arr.length; j++){
			str += arr[j][i];
		}
	}
	return str;
}

function ocho (arr){
	var str = '';
	for(let i = arr.length-1; i >= 0; i-- ){
		for(let j = arr.length-1; j >= 0; j--){
			str += arr[j][i];
		}
	}
	return str;
}

function nueve (arr){
	var str = '';
	for(let i = 0; i < arr.length; i++){
		str += arr[i][i];
	}
	return str;
}

function diez (arr){
	var str = '';
	for(let i = 0; i < arr.length; i++){
		for(let j = arr.length-1; j >= 0; j--){
			j -= i;
			str += arr[i][j];
			break;
		}
	}
	return str;
}

function once (arr){
	var str = '';
	for(let i = 0; i < arr.length; i++){
		str += arr[i][i];
		for(let j = arr.length-1; j >= 0; j--){
			j -= i;
			str += arr[i][j];
			break;
		}
	}
	return str;
}

function doce (arr){
	var str = '';
	for(let i = 0; i < arr.length; i++){
		if(i%2 !== 0){
			for(let j = arr.length-1; j >= 0; j--){
				str += arr[i][j];
			}
		} else {
			for(let j = 0; j < arr.length; j++){
				str += arr[i][j];
			}
		}
	}
	return str;
}

function trece (arr){
	var str = '';
	for(let i = 0; i < arr.length; i++){
		if(i%2 === 0){
			for(let j = arr.length-1; j >= 0; j--){
				str += arr[i][j];
			}
		} else {
			for(let j = 0; j < arr.length; j++){
				str += arr[i][j];
			}
		}
	}
	return str;
}

console.log(uno(arr));
console.log(dos(arr));
console.log(tres(arr));
console.log(cuatro(arr));
console.log(cinco(arr));
console.log(seis(arr));
console.log(siete(arr));
console.log(ocho(arr));
console.log(nueve(arr));
console.log(diez(arr));
console.log(once(arr));
console.log(doce(arr));
console.log(trece(arr));