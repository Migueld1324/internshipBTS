"use strict"
function createCustomer(data){
	var name = data.name;
	function getName(){
		return name;
	}
	function setName(newName){
		name = newName;
	}
	return {
			getName: getName,
			setName: setName
		   };
}

let customer = {name: 'John'};
var f = createCustomer(customer);
console.log(f.getName());
f.setName('Juan');
console.log(f.getName());