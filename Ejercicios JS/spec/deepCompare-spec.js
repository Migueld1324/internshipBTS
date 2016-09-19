"use strict"
function deepCompare(obj1, obj2){
	var flag = true;
	if(typeof obj1 !== 'object' || typeof obj2 !== 'object'){
		return false;
	}
	if(obj1 instanceof Object && obj2 instanceof Object){
		var keys1 = Object.keys(obj1);
		var keys2 = Object.keys(obj2);
		keys1.sort();
		keys2.sort();
		if(keys1.length !== keys2.length){
			return false;
		} else if(keys1.length === 0 && keys2.length === 0){
			return flag;
		}
		for(let j = 0; j < keys1.length; j++){
			if(keys1[j] !== keys2[j]){
				return false;
			}
		}
		for(var i in obj1){
			if((obj1[i] instanceof Object && obj2[i] instanceof Object) || (Array.isArray(obj1[i]) && Array.isArray(obj2[i]))){
				flag = deepCompare(obj1[i], obj2[i]);
			} else {
				if(obj1[i] !== obj2[i]){
					if(typeof obj1[i] === 'number' && typeof obj2[i] === 'number' && (isNaN(obj1[i]) && isNaN(obj2[i]))){
						continue;
					}
					return false;
				}
			}
		}
	} else if(Array.isArray(obj1) && Array.isArray(obj2)){
		if(obj1.length !== obj2.length){
			return false;
		} else if(obj1.length === 0 && obj2.length === 0){
			return flag;
		}
		for(let i = 0; i < obj1.length; i++){
			if((obj1[i] instanceof Object && obj2[i] instanceof Object) || (Array.isArray(obj1[i]) && Array.isArray(obj2[i]))){
				flag = deepCompare(obj1[i], obj2[i]);
			} else {
				if(obj1[i] !== obj2[i]){
					if(typeof obj1[i] === 'number' && typeof obj2[i] === 'number' && (isNaN(obj1[i]) && isNaN(obj2[i]))){
						continue;
					}
					return false;
				}
			}
		}
	}
	return flag;
}

console.log(deepCompare({name: 'Miguel', lastName: 'Delgado'}, {name: 'Miguel', lastName: 'Delgado'}));
console.log(deepCompare({name: 'Miguel', grades: [5, 6], car: 'Toyota'}, {name: 'Miguel', grades: [5, 6], cars: 'Toyota'}));
console.log(deepCompare({name: 'Miguel', grades: [5, 6], car: 'Toyota'}, {name: 'Miguel', grades: [5, 6], car: 'Toyota', foo: 'bar'}));
console.log(deepCompare({},{}));
console.log(deepCompare({ary: []}, {ary: []}));