"use strict"
function largestSum(arr){
	var sum;
	var arrSum = []
	var tempSum = 0;
	var indexSumSup = 0;
	var indexSumInf = 0;
	for(let i = 0; i < arr.length; i++){
		for(let j = i+1; j < arr.length; j++){
			if(j-1 === i){
				tempSum = arr[i] + arr[j];
				if(sum == undefined || tempSum > sum){
					sum = tempSum;
					indexSumInf = i;
					indexSumSup = j;
				}
			} else {
				tempSum += arr[j];
			}
			if(tempSum > sum){
				sum = tempSum;
				indexSumInf = i;
				indexSumSup = j;
				tempSum = 0;
			}
		}
	}
	for(let i = indexSumInf; i <= indexSumSup; i++){
		arrSum[arrSum.length] = arr[i];
	}
	console.log(arrSum);
	return sum;
}

console.log(largestSum([2,-8,3,-2,4,-10]));
