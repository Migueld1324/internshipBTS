"use strict"
function convertMatrix(matrix){
	var indexA = [];
	var indexB = [];
	var matRes = matrix;
	for(let i = 0; i < matrix.length; i++){
		for(let j = 0; j < matrix[i].length; j++){
			if(matrix[i][j] === 0){
				indexA[indexA.length] = i;
				indexB[indexB.length] = j;
			}
		}
	}
	for(let i = 0; i < indexA.length; i++){
		for(let j = 0; j < matRes[i].length; j++){
				matRes[indexA[i]][j] = 0;
			for(let k = 0; k < matRes.length; k++){
				matRes[k][indexB[i]] = 0;
			}
		}
	}
	return matRes;
}
console.log(convertMatrix([[1,2,0]]));
console.log(convertMatrix([[1,2,3,1],[4,0,6,1],[7,8,9,0],[1,2,3,3]]));