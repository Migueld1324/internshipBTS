function rounded (param){
	var paramStr = param + '';
	var paramAry = paramStr.split('.');
	var acum = 0;
	var paramRes = 0;
	paramStr = '';
	for(var i = 0; i < paramAry.length; i++){
		paramAry[i] = paramAry[i].split('');
	}
	for(var i = paramAry[1].length-1; i > 1 ; i--){
		paramAry[1][i] = paramAry[1][i] * 1 + acum;
		if(paramAry[1][i] >= 5){
			paramAry[1][i] = 0;
			acum = 1;
		} else {
			acum = 0;
		}
		if(i === 2 && acum > 0){
			paramAry[1][i-1] = paramAry[1][i-1] * 1 + acum;
			acum = 0;
			if(paramAry[1][i-1] === 10){
				paramAry[1][i-1] = 0;
				acum = 1;
				paramAry[1][i-2] = paramAry[1][i-2] * 1 + acum;
				if(paramAry[1][i-2] === 10){
					paramAry[1][i-2] = 0;
					acum = 1;
				} else {
					acum = 0;
				}
			}
		}
	}
	paramAry[0][paramAry.length-1] = paramAry[0][paramAry.length-1] * 1 + acum;
	for(var i = 0; i < paramAry.length; i++){
		for(var j = 0; j < paramAry[i].length; j++){
			if(i > 0 && j > 1){
				break;
			}
			paramStr += paramAry[i][j] + '';
		}
		if(i > 0){
				break;
			}
		paramStr += '.';
	}
	console.log(param.toFixed(2));
	console.log(paramStr);
	paramRes = parseFloat(paramStr);
	return paramRes;
}
console.log(rounded(18.9982));