/*Create a function which takes a string literal or a
string object and  put the first letter of each word in
upper case and the rest of them in lowe case, this
function have to return a string*/
"use strict"
function capitalize (str){
	var arrStr = [];
	var resStr = '';
	var tempStr = '';
	arrStr = str.split(' ');
	for(let i = 0; i < arrStr.length; i++){
		tempStr = arrStr[i].slice(0,1).toUpperCase();
		tempStr += arrStr[i].slice(1).toLowerCase();
		if(i === arrStr.length-1){
			resStr = resStr.concat(tempStr);
		} else {
			resStr = resStr.concat(tempStr, ' ');
		}
	}
	return resStr;
}
console.log(capitalize('desde el cielo cayo una caguama'));
console.log(capitalize('aniTa lAva la tiNa'));