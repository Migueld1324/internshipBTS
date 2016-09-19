"use strict"
function goodVsEvil(good, evil){
	var resGood = 0;
	var resEvil = 0;
    good = good.split(' ');
    evil = evil.split(' ');
    console.log(good);
    console.log(evil);
    for(let i = 0; i < good.length; i++){
    	resGood += (+(good[i]));
    }
    console.log(resGood);
    for(let j = 0; j < evil.length; j++){
    	resEvil += (+(evil[j]));
    }
    console.log(resEvil);
    if(resEvil > resGood){
    	return 'Battle Result: Evil eradicates all trace of Good';
    } else if(resGood > resEvil){
    	return 'Battle Result: Good triumphs over Evil';
    } else if(resGood === resEvil){
    	return 'Battle Result: No victor on this battle field';
    }
}
console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'));
console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'));