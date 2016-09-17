var matA = [[2,3],[5,6]];
var matB = [[1,2],[3,4]];

function multMatrices (mat1, mat2) {
	var matRes = [];
	for (var x = 0; x < mat1.length; x++){
		matRes[x] = new Array ();
		for(var y = 0; y < mat1[0].length; y++){
			matRes[x][y] = 0;
		}
	}
	console.log(mat1);
	console.log(mat2);
	console.log(matRes);
	for(var i = 0; i < mat1.length; i++){
		for(var j = 0; j < mat1[0].length; j++){
			for(var k = 0; k < mat2.length; k++){
				matRes[i][j] += mat1[i][k] * mat2[k][j];
				console.log(matRes[i][j]);
			}
		}
	}
	return matRes;
}

console.log(multMatrices(matA, matB));