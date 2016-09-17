"use strict"
function isValidIPAddress (str1){
	var arr = [];
	var j = 0;
	var counter = 0;
	while (str1[counter]){
		counter++;
	}
	for(let i = 0; i < counter; i++){
		if(+str1[i] || str1[i] == 0){
			if(arr[j] === undefined){
				arr[j] = '';
			}
			arr[j] += str1[i];
		} else {
    		j++;
    		arr[j] = str1[i];
    		j++;
    	}
	}
	if(arr.length !== 7){
		return false;
	} else {
		for(let i = 0; i < arr.length; i++){
			if(+(arr[i])){
				if(!(+(arr[i]) >= 0) || !(+(arr[i]) <= 255)){
					return false;
				}
			} else if(arr[i] !== '.' && arr[i] != 0){
				return false;
			}
		}
	}
	return true;
}
console.log(isValidIPAddress('198.128.1.192'));
