function recursion (n){
	if(n < 0){
		return false;
	} else {
		console.log(n);
		recursion(n-1);
		console.log(n);
	}
}
recursion(10);