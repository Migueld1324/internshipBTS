/*Create a function called transformToUnicode which takes
a string literal parameter and transform each position
into a unicode value and return an array which have a unicode
per index*/

"use strict"
function transformToUnicode(str){
	var arr = [];
	for(let i = 0; i < str.length; i++){
		arr[arr.length] = str.codePointAt(i);
	}
	return arr;
}

console.log(transformToUnicode('tacos'));
console.log(transformToUnicode('holis'));
console.log(transformToUnicode('hola mundo!'));