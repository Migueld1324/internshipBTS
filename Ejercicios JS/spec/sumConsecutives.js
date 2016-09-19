"use strict"
function sumConsecutives(s) {
    var arr = [];
    var temp = 0;
    for(let i = 1; i < s.length; i++){
    	if(s[i] === s[i-1]){
    		if(temp === undefined){
    			temp = 0;
    		}
    		temp += s[i] + s[i-1];
    		continue;
    	} else {
    		if(temp !== undefined){
    			arr.push(temp);
    		}
    		arr.push(s[i]);
    		temp = undefined;
    		continue;
    	}
    }
    return arr;
}
console.log((sumConsecutives([1,4,4,4,0,4,3,3,1])));
console.log((sumConsecutives([1,1,7,7,3])));
console.log((sumConsecutives([-5,-5,7,7,12,0])));
console.log((sumConsecutives([3,3,3,3,1])));