"use strict"
function tribonacci (arr, num){
	var arrRes = [];
	var tempSum = 0;
	if(arr.length !== 3){
		console.log("El arreglo recibido no es valido, porque no tiene 3 elementos");
		if (num < 1){
			console.log("El elemento que buscas no se puede calcular");
			arrRes = [];
			return arrRes;
		}
		if(num > 0 && num < 3 && num <= arr.length){
			for(let i = 0; i < num; i++){
				arrRes[i] = arr[i]
			}
			return arrRes;
		}
		arrRes = [];
		return arrRes;
	} else {
		for(let i = 0; i < arr.length; i++){
			if (!(+arr[i]) && arr[i] != 0){
				console.log("Algún elemento del arreglo no es número");
				arrRes = []
				return arrRes;
			}
		}
	}
	if (num < 1){	
		console.log("El elemento que buscas no se puede calcular");
		arr = []
		return arr;
	}
	if(num < arr.length){
		for(let i = 0; i < num; i++){
			arrRes[i] = arr[i];
		}
		return arrRes;
	} 
	if(num > arr.length) {
		for(let i = arr.length; i < num; i++){
			for(let j = arr.length-3; j < arr.length; j++){
				tempSum += arr[j];
			}
			arr[arr.length] = tempSum;
			tempSum = 0; 
		}
		arrRes = arr;
		return arrRes;
	}
}
console.log(tribonacci([0,0,0],4));