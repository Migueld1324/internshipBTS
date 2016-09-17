function convertSpaces(str1){
	var arreStr = str1.split('');
	str1 = '';
	for(var i = 0; i < arreStr.length; i++){
		if(arreStr[i] === ' '){
			arreStr[i] = '%20';
		}
		str1 += arreStr[i];
	}
	return str1;
}

console.log(convertSpaces('hola mundo menespia'));