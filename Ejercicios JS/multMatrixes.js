var matA = [[1,2],[3,4]];
var matB = [[5,6],[7,8]];

function multMatrixes (matA, matB){
	var matRes = []
	for(var i = 0; i < matA.length; i++){
		matRes[i] = [];
		for(var j = 0; j < matA.length; j++){
			matRes[i][j] = 0;
			for(var k = 0; k < matB.length; k++){
				console.log(matA[i][k]);
				console.log(matB[k][j]);
				console.log(matA[i][k] * matB[k][j]);
				console.log('\n');
				matRes[i][j] += matA[i][k] * matB[k][j];
			}
		}
	}
	return matRes;
}

console.log(multMatrixes(matA, matB));