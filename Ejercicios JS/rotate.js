"use strict"
function rotate (matrix){
	var str = [];
	var matRes = [];
	for(let i = 0; i < matrix.length; i++){
		var indexA = i * (matrix.length);
		for(let j = matrix.length-1; j >= 0; j--){
			str[indexA] = matrix[j][i];
			indexA++;
		}
	}
	for(let i = 0; i < matrix.length; i++){
		matRes[i] = [];
		for(let j = 0; j < matrix.length; j++){
			matRes[i][j] = str[j+(i*matrix.length)]; 
		}
	}
	return matRes;
}

console.log(rotate([[1,2,3,4],[5,6,7,8],[9,0,9,8],[7,6,5,4]]));