/*Create a function called closerIndex which takes two strings,
the first one is the word to look into, and the second one is
the string to look, the function have to return 1 if the second
parameter is closer to the index 0 than the last index to the
first parameter .length, have to return 0 if is a draw and -1
if the index is closer to the end than the start, and if there
are no match return undefined*/

"use strict"
function closerIndex (str1, str2){
	var firstIndexStr2 = str1.indexOf(str2);
	var lastIndexStr2 = str1.lastIndexOf(str2);
	var midLength = str1.length / 2;
	if(lastIndexStr2 === ((str1.length-1) - firstIndexStr2)){
		return 0;
	} 	
	if((firstIndexStr2 > 0 && firstIndexStr2 < midLength) || (lastIndexStr2 > 0 && lastIndexStr2 < midLength)){
				return 1;
	}
	if((firstIndexStr2 > midLength && firstIndexStr2 < str1.length-1) || (lastIndexStr2 > midLength && lastIndexStr2 < str1.length-1)){
				return -1;
	}
	if(firstIndexStr2 === -1 && lastIndexStr2 === -1){
				return undefined;
	}
}
console.log(closerIndex('abracadabra', 'a'));
console.log(closerIndex('abracadabra', 'b'));
console.log(closerIndex('abracadabra', 'd'));
console.log(closerIndex('abracadabra', 'z'));