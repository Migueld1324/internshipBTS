"use strict"
function didSomeoneWon(matrix){
	var flag = false;
	if(matrix.length !== 3 || matrix[0].length !== 3 || matrix[1].length !== 3 || matrix[2].length !== 3){
		console.log("El juego tic-tac-toe debe estar representado por una matriz de 3x3");
		return flag;
	}
	if(!flag){
		for(let i = 0; i < 2; i++){
			if((matrix[i][i] === matrix[i+1][i+1])){
				flag = true;
			} else {
				flag = false;
				break;
			}
		}
		if(flag){
			return flag;
		}
	}
	if(!flag){
		for(let i = 0; i < 2; i++){
			for(let j = 2; j > 0; j--){
				if((matrix[i][j] === matrix[i+1][j-1])){
					flag = true;
				} else {
					flag = false;
					break;
				}
			}
			if(flag){
				return flag;
			}
		}
	}
	if(!flag){
		for(let i = 0; i < 3; i++){
			for(let j = 0; j < 2; j++){
				if((matrix[i][j] === matrix[i][j+1])){
					flag = true;
				} else {
					flag = false;
					break;
				}
			}
			if(flag){
				return flag;
			}
		}
	}
	if(!flag){
		for(let i = 0; i < 3; i++){
			for(let j = 0; j < 2; j++){
				if((matrix[j][i] === matrix[j+1][i])){
					flag = true;
				} else {
					flag = false;
					break;
				}
			}
			if(flag){
				return flag;
			}
		}
	}
	return flag;
}

console.log(didSomeoneWon([['o','o','o'],
						   ['x','o','x'],
						   ['x','o','o']]));