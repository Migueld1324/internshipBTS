"use strict"
function countTwos(n){
	var counter = 0;
	for(let i = 0; i <= n; i++){
		var strTemp = i + '';
		var counterTemp = 0;
		while (strTemp[counterTemp]){
			counterTemp++;
		}
		for(let k = 0; k < counterTemp; k++){
			if(strTemp[k] == 2){
				counter++;
			}
		}
	}
	return counter;
}
console.log(countTwos(52));