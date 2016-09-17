function getTotal (days){
	var totalAmount = days * 40;
	if(days >= 3 && days < 7){
		totalAmount -= 20;
	} else if(days >= 7){
		totalAmount -= 50;
	}
	return totalAmount;
}
console.log(getTotal(2));
console.log(getTotal(3));
console.log(getTotal(5));
console.log(getTotal(7));
console.log(getTotal(10));