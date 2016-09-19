function facRec(n){
	if(n === 1){
		return 1;
	}
	return n * facRec(n-1);
}

console.log(facRec(171));