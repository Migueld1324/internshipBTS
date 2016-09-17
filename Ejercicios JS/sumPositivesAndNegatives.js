
/*You will write a function called sumPositivesAndNegatives
which takes only one parameter is going to be an array with
miscellaneous variables, they can be string, number, objects,
arrays and booleans.
If is an string, number or boolean, try to convert it to number,
if is a number, add it to the sum, if not ignore it, if the
object is an instance of  number or string try to convert it to
number and add it as well.
If is an array  you have to check all the index of that array
as well to sum.
The function have to return an array with two spaces, the
first one is the sum of all of the positive numbers and the
second one the sum of all the negatives numbers.*/
"use strict"
function sumPositivesAndNegatives(arr){
	var sumPositives = 0;
	var sumNegatives = 0;
	var temp = 0;
	for(let i = 0; i < arr.length; i++){
		if (Number.isNaN(+arr[i])){
			continue;
		}
		if(arr[i] instanceof String){
			if(!(Number.isNaN(Number.parseFloat(arr[i])))){
				temp = Number.parseFloat(arr[i]);
				if(temp < 0){
					sumNegatives += temp;
					temp = 0;
				} else {
					sumPositives += temp;
					temp = 0;
				}
			}
		}
		if(arr[i] instanceof Number){
			if(!(Number.isNaN(Number.parseFloat(arr[i])))){
				temp = Number.parseFloat(arr[i]);
				if(temp < 0){
					sumNegatives += temp;
					temp = 0;
				} else {
					sumPositives += temp;
					temp = 0;
				}
			}
		}
		if(+(arr[i])){
			if(!(Number.isNaN(Number.parseFloat(arr[i])))){
				temp = Number.parseFloat(arr[i]);
				if(temp < 0){
					sumNegatives += temp;
					temp = 0;
				} else {
					sumPositives += temp;
					temp = 0;
				}
			}
		}
		if(arr[i]===true){
			sumPositives++;
		}
		if(arr[i] instanceof Array){
			for(let j = 0; j < arr[i].length; j++){
				if (Number.isNaN(Number.parseFloat(arr[i][j]))){
					continue;
				}
				if(arr[i][j] instanceof String){
					if(!(Number.isNaN(Number.parseFloat(arr[i][j])))){
						temp = Number.parseFloat(arr[i][j]);
						if(temp < 0){
							sumNegatives += temp;
							temp = 0;
						} else {
							sumPositives += temp;
							temp = 0;
						}
					}
				}
				if(arr[i][j] instanceof Number){
					if(!(Number.isNaN(Number.parseFloat(arr[i][j])))){
						temp = Number.parseFloat(arr[i][j]);
						if(temp < 0){
							sumNegatives += temp;
							temp = 0;
						} else {
							sumPositives += temp;
							temp = 0;
						}
					}
				}
				if(+(arr[i][j])){
					if(!(Number.isNaN(Number.parseFloat(arr[i][j])))){
						temp = Number.parseFloat(Number.parseFloat(arr[i][j]));
						if(temp < 0){
							sumNegatives += temp;
							temp = 0;
						} else {
							sumPositives += temp;
							temp = 0;
						}
					}
				}
				if(arr[i]===true){
					sumPositives++;
				}
			}
		}
	}
	var arrEnd = [sumPositives, sumNegatives];
	return arrEnd;
}
var x = new Number(1);
var s = new String(-22);
console.log(sumPositivesAndNegatives(([1, -2, x, s, [1, -6, -2], true ])))