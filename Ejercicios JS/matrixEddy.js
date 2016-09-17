var mA = [[1, 2, 3], [4, 5, 6]];
var mB = [[5, 6], [7, 8], [1, 2]];
var mC = [[1, 2, 3], [4, 5, 6]];
var mD = [[7, 8,8,8,8,8,8], [9, 10],[5,6,7,3,12], [9,10,7,3,2,1],[11, 12]];
function matrixMultiplication (matrixA, matrixB) {
	var columnaItem;
	var matrisota = new Array (matrixA.length);
	if (matrixA[0].length===matrixB.length){
		for (var i = 0; i < matrixA.length; i++) {
			matrisota[i] = new Array (matrixA.length);
			var renglon = matrixA[i];
			for (var x = 0; x < renglon.length; x++) {
				var resultadoItemPorItem = 0;
				for (var y = 0; y < matrixB.length; y++) {
					columnaItem = matrixB[y][x];
					resultadoItemPorItem = resultadoItemPorItem + (columnaItem * renglon[y]);
				}
				console.log (resultadoItemPorItem);
				matrisota[i][x] = resultadoItemPorItem;
			}
		}
		console.log (matrisota);
		}else {
			console.log("No se puede multiplicar por favor intenta multiplicar las matrices")
			return console.log("try again")
		}
}
matrixMultiplication (mA , mB);