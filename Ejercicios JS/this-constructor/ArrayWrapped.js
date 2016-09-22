"use strict"
function ArrayWrapped(array){
	this.array = array;

	this.every = function every (callback){
		var arr = this.array;
		if(Array.isArray(arr) && (callback instanceof Function)){
			var flag = true;
			for(let i = 0; i < arr.length; i++){
				flag = callback(arr[i], i, arr);
				if(!flag || isNaN(flag)){
					return false;
				}
			}
			return true;
		} else {
			return false;
		}
	}

	this.some = function some (callback){
		var arr = this.array;
		if(Array.isArray(arr) && (callback instanceof Function)){
			var flag = true;
			for(let i = 0; i < arr.length; i++){
				flag = callback(arr[i], i, arr);
				if(flag){
					return true;
				}
			}
			return false;
		} else {
			return false;
		}
	}

	this.find = function find (callback){
		var arr = this.array;
		if(Array.isArray(arr) && (callback instanceof Function)){
			var flag = true;
			for(let i = 0; i < arr.length; i++){
				flag = callback(arr[i], i, arr);
				if(flag){
					return arr[i];
				}
			}
			return undefined;
		} else {
			return false;
		}
	}

	this.map = function map (callback){
		var arr = this.array;
		if(Array.isArray(arr) && (callback instanceof Function)){
			var resArray = [];
			for(let i = 0; i < arr.length; i++){
				resArray[i] = callback(arr[i], i, arr);
			}
			return resArray;
		} else {
			return false;
		}
	}

	this.foreach = function foreach (callback){
		var arr = this.array;
		if(Array.isArray(arr) && (callback instanceof Function)){
			for(let i = 0; i < arr.length; i++){
				callback(arr[i], i, arr);
			}
		} else {
			return false;
		}
	}

	this.filter = function filter (callback){
		var arr = this.array;
    	if(Array.isArray(arr) && (callback instanceof Function)){
        	var resArray = [];
        	var copyArr = Array.from(arr);
        	for(let i = 0; i < arr.length; i++){
            	var flag = callback(arr[i], i, copyArr);
            	if(flag){
                	resArray.push(arr[i]);
            	}
        	}
        	return resArray;
    	} else {
        	return false;
    	}
	}

	this.concat = function concat(){
		var arr = this.array;
    	if(!Array.isArray(arr)){
        	return false;
    	}
    	var args = Array.from(arguments);
    	var newArr = Array.from(arr);
    	for(let i = 0; i < args.length; i++){
        	if(Array.isArray(args[i])){
            	for(let j = 0; j < args[i].length; j++){
                	newArr.push(args[i][j]);
            	}
        	} else {
            	newArr.push(args[i]);
        	}
    	}
    	return newArr;
	}

	this.reduce = function reduce(callback){
		var arr = this.array;
		var result;
		if(!Array.isArray(arr)){
        	return false;
    	}
    	if(arguments[1]){
    		var prev = arguments[1];
    		var i = 0;
    	} else {
    		var prev = arr[0];
    		var i = 1;
    	}
    	for(i; i < arr.length; i++){
    		result = callback(prev, arr[i], i, arr);
    	}
    	return result;
	}

	this.slice = function slice(firstIndex, lastIndex){
		var arr = this.array;
		if(!Array.isArray(arr)){
        	return false;
    	}
    	if(firstIndex === undefined && lastIndex === undefined){
    		var arrayCopy = Array.from(array);
    		return arrayCopy;
    	}
    	lastIndex = lastIndex || array.length-1;
	}

	this.pop = function pop(){
		var arr = this.array;
		if(!Array.isArray(arr)){
        	return false;
    	}
    	var popedElement = arr[arr.length-1];
    	arr.length = arr.length-1;
    	return popedElement;
	}

	this.push = function push(element){
		var arr = this.array;
		if(!Array.isArray(arr)){
        	return false;
    	}
    	array[array.length] = element;
    	return array.length;
	}

	this.shift = function shift(){
		var arr = this.array;
		if(!Array.isArray(arr)){
        	return false;
    	}
    	var shiftedElement = array[0];
    	for(let i = 0; i < array.length-1; i++){
    		array[i] = array[i+1];
    	}
    	array.length = array.length-1;
    	return shiftedElement;
	}

	this.unshift = function unshift(element){
		var arr = this.array;
		if(!Array.isArray(arr)){
        	return false;
    	}
    	for(let i = array.length-1; i >= 0; i--){
    		array[i+1] = array[i];
    	}
    	array[0] = element;
    	return array.length;
	}
}

var arrWrapped = new ArrayWrapped([1,2,3]);
function testEvery (element){
	return element < 5;
}

function testSome (element){
	return element > 5;
}

function testFind (element){
	return element === 1;
}

function testMap (element){
	return element + 1;
}

function testForEach (element){
	return element * 2;
}

function testFilter (element){
	return element < 3;
}

function testReduce (prev, current){
	return prev + current;
}

console.log(arrWrapped.every(testEvery));
console.log(arrWrapped.some(testSome));
console.log(arrWrapped.find(testFind));
console.log(arrWrapped.map(testMap));
console.log(arrWrapped.foreach(testForEach));
console.log(arrWrapped.filter(testFilter));
console.log(arrWrapped.reduce(testReduce));
console.log(arrWrapped.concat(4,5,6));
console.log(arrWrapped.pop());
console.log(arrWrapped.push(5));
console.log(arrWrapped.shift());
console.log(arrWrapped.unshift(10));