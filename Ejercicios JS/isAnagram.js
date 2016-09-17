function isAnagram (str1, str2){
    var res = true;
    var strArre1 = str1.split('');
    var strArre2 = str2.split('');
    var indBr = 0;
    var temp = '';
    console.log('Cadena 1: ' + strArre1);
    console.log('Cadena 2: ' + strArre2);
    if(str1.length != str2.length){
        res = false;
        return res;
    } else {
        for(var i = 0; i < strArre1.length; i++){
            for(var j = 0; j < strArre1.length; j++){
              if(strArre1[j] > strArre1[j+1]){
                  temp = strArre1[j];
                  strArre1[j] = strArre1[j+1];
                  strArre1[j+1] = temp;
              }
              if(strArre2[j] > strArre2[j+1]){
                  temp = strArre2[j];
                  strArre2[j] = strArre2[j+1];
                  strArre2[j+1] = temp;
              }
            }
        }
        for(var i = 0; i < strArre1.length; i++){
            if(strArre1[i] !== strArre2[i]){
                res = false;
            }
        }
    }
    console.log('Cadena 1 ordenada: ' + strArre1);
    console.log('Cadena 2 ordenada: ' + strArre2);
    return res;
}
console.log(isAnagram('reconocer', 'rreeooccn'));
