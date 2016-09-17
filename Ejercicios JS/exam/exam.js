"use strict"
/*function map (arr, callback){
	if(Array.isArray(arr) && (callback instanceof Function)){
		var resArray = [];
		for(let i = 0; i < arr.length; i++){
			resArray.push(callback(arr[i], i, arr));
		}
		console.log(arr);
		return resArray;
	} else {
		return false;
	}
}*/



var inventory = [{name: "apples", quantity: 2}, {name: "bananas", quantity: 0}, {name: "cherries", quantity: 5}];
                /*console.log(map(inventory, function (element) {
                    element.quantity = 0;
                    return element;
                }));
                ).toEqual([{name: "apples", quantity: 0}, {name: "bananas", quantity: 0}, {name: "cherries", quantity: 0}]);

                expect(inventory).toEqual([{name: "apples", quantity: 2}, {name: "bananas", quantity: 0}, {name: "cherries", quantity: 5}]);*/
console.log(inventory);
var res = inventory.map(function(element){
	element.quantity = 0;
	return element;
});

console.log(inventory, '\n', res);