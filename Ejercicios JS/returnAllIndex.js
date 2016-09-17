/*Create a function called returnAllIndex which takes two
strings as parameter, the first one is the word to look
into, and the second one what are we looking in the word.
if there is no matches return -1, if there is only one
match return the index and if there are more than 1 match
return an array with all the match index.*/

"use strict"
function returnAllIndex(str1,str2){
	var a = [];
	for(let i = 0; i < str1.length; i++){
		if(str1.indexOf(str2[i]) >= 0){
			a[a.length] = str1.indexOf(str2[i]);
		}
	}
	if(a.length < 1){
		a = -1;
	} else if(a.length === 1){
		a = a[0];
	}
	return a;
}
console.log(returnAllIndex('hola','a'));
console.log(returnAllIndex('hola','oa'));
console.log(returnAllIndex('hola','z'));