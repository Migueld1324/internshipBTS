"use strict"
function flatten(ary){
	var arrRes = [];
	var temp = 0;
	for(let i = 0; i < ary.length; i++){
		if(Array.isArray(ary[i])){
			if(ary[i].length === 0){
				return [];
			}
			arrRes = arrRes.concat(flatten(ary[i]));
		} else {
			temp = ary[i];
			if(temp === undefined){ 
				continue;
			}
			arrRes = arrRes.concat(temp);
		}
	}
	return arrRes;
}

describe("Flatten", function(){
	it("Should return [1,2,[3,4,[5,6],7],8] when [1,2,3,4,5,6,7,8]", function(){
		var res = flatten([1,2,[3,4,[5,6],7],8]);
		expect(res).toEqual([1,2,3,4,5,6,7,8]);
	});
	it("Should return [] when []", function(){
		var res = flatten([]);
		expect(res).toEqual([]);
	});
	it("Should return [1,2,[3,4,[5,6],7],8] when [1,2,3,4,5,6,7,8]", function(){
		var res = flatten([{},function(){},[null,false,[true,'hola'],7],8]);
		expect(res).toEqual([{},function(){},null,false,true,'hola',7,8]);
	});
});

function fibonacci (n){
	if((typeof n === 'number' || n instanceof Number) && (n > 0)){
		var fib = 0;
		if(n === 1 || n === 2){
			return 1;
		}
		if(n >= 3){
			fib = (fibonacci(n-1) + fibonacci(n-2));
		}
		return fib;
	} else {
		return false;
	}
}

describe("fibonacci", function(){
	it ("#1 Expect  0 => 0", function () {
		expect (fibonacci (0)).toEqual (0);
	});
	it ("#2 Expect  1 => 1", function () {
		expect (fibonacci (1)).toEqual (1);
	});
	it ("#3 Expect  2 => 1 ", function () {
		expect (fibonacci (2)).toEqual (1);
	});	
	it ("#4 Expect   3 => 2", function () {
		expect (fibonacci (3)).toEqual (2);
	});
	it ("#5 Expect   4 => 2", function () {
		expect (fibonacci (4)).toEqual (3);
	});
	it ("#6 Expect   5 => 5", function () {
		expect (fibonacci (5)).toEqual (5);
	});
	it ("#7 Expect   6 => 8", function () {
		expect (fibonacci (6)).toEqual (8);
	});
	it ("#8 Expect   7 => 13", function () {
		expect (fibonacci (7)).toEqual (13);
	});
});
function sumListSquares (ary){
	if(Array.isArray(ary)){
		ary = flatten(ary);
	}
	for(let i = 0; i < ary.length; i++){

	}
}