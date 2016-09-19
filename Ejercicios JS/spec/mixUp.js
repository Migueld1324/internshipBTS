"use strict"
function mixUp (str){
	let result = [];
	if(str.length === 0){
		return '';
	}
	if(str.length === 1){
		return [str];
	}
	for(let i = 0; i < str.length; i++){
		let current = str[i];
		let extra = str.replace(str[i], '');
		mixUp(extra).forEach(function(e){
			result.push(current + e);
		});
	}
	return result;
}
console.timeEnd(mixUp('duck'));