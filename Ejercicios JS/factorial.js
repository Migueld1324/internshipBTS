function factorial (n){
	var result = 1;
	while(n>0){
		result *= n;
		n--;
	}
	return result;
}
console.log(factorial(171));