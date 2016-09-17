function squareSum(arrNum){
	var squareSum = 0;
	for(var i = 0; i < arrNum.length; i++){
		squareSum += arrNum[i] * arrNum[i];
	}
	return squareSum;
}
console.log(squareSum([1,2,2]));