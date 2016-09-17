/*Create a function called reverseWords() which takes a string
and is going to reverse each word, not the whole string at once,
and if the string have numbers from 0 to 9, you will replace
them will ‘ZERO’, ‘ONE’, ‘TWO’, …, ‘NINE’ strings after you
reverse the words*/
"use strict"
function reverseWords(str){
	var dicNums = {'0': 'ZERO',
				   '1': 'ONE',
				   '2': 'TWO', 
				   '3': 'THREE', 
				   '4': 'FOUR', 
				   '5': 'FIVE', 
				   '6': 'SIX', 
				   '7': 'SEVEN', 
				   '8': 'EIGTH', 
				   '9': 'NINE'};
	var arrStr = str.split(' ');
	var reversedStr = '';
	var tempStr = '';
	for(let j = 0; j < arrStr.length; j++){
		for(let i = arrStr[j].length-1; i >= 0; i--){
			if(+(arrStr[j][i]) || arrStr[j][i] === '0'){
				tempStr += dicNums[arrStr[j][i]];
			} else {
				tempStr += arrStr[j][i];
			}
		}
		if(j === arrStr.length-1){
			reversedStr = reversedStr.concat(tempStr);
		} else {
			reversedStr = reversedStr.concat(tempStr, ' ');
		}
		tempStr = '';
	}
	
	return reversedStr;
}
console.log(reverseWords('anit4 lava la t1na'));
console.log(reverseWords('d3sde el c1el0 cayo una c4guama'));