/* Create a function that receives three params.
The 1st one is the inicial counter value of a series
of integer values. The second parameter is the value
that will be used to increment the initial counter.
The third value is the number of seconds whilst the
counter will be increasing by the second parameter */
"use strict"
/*function incrementByTime(param1, param2, param3){
	for(var i = 0; i <= param3; i++){
		setTimeout(function (){
			console.log(param1);
			param1 += param2;
		}, i * 1000);		
	}
}

console.log(incrementByTime(0, 3, 5));
*/
function foo (valImp){
		setTimeout(function (){
			console.log(valImp + 1);
		}, (valImp + 1) * 1000);
	}
for(var i = 0; i < 5; i++){
	foo(i);
}