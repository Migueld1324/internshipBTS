function isAnagram (str1, str2){
    var res = false;
    var strArre1 = str1.split('');
    var strArre2 = str2.split('');
    var temp = '';
    strArre1 = convertToLowerCase(strArre1);
    strArre2 = convertToLowerCase(strArre2);
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
    return res;
}

function convertToLowerCase (str){
    for(var i = 0; i < str.length; i++){
        switch(true){
            case str[i] == 'A' : 
                str[i] = 'a';
                break;
            case str[i] === 'B' :
                str[i] = 'b';
                break;
            case str[i] === 'C' : 
                str[i] = 'c';
                break;
            case str[i] === 'D' : 
                str[i] = 'd';
                break;
            case str[i] === 'E' : 
                str[i] = 'e';
                break;
            case str[i] === 'F' : 
                str[i] = 'f';
                break;
            case str[i] === 'G' : 
                str[i] = 'g';
                break;
            case str[i] === 'H' :
                str[i] = 'h';
                break;
            case str[i] === 'I' : 
                str[i] = 'i';
                break;
            case str[i] === 'J' : 
                str[i] = 'j';
                break;
            case str[i] === 'K' : 
                str[i] = 'k';
                break;
            case str[i] === 'L' : 
                str[i] = 'l';
                break;
            case str[i] === 'M' : 
                str[i] = 'm';
                break;
            case str[i] === 'N' : 
                str[i] = 'n';
                break;
            case str[i] === 'Ñ' : 
                str[i] = 'ñ';
                break;
            case str[i] === 'O' : 
                str[i] = 'o';
                break;
            case str[i] === 'P' : 
                str[i] = 'p';
                break;
            case str[i] === 'Q' : 
                str[i] = 'q';
                break;
            case str[i] === 'R' : 
                str[i] = 'r';
                break;
            case str[i] === 'S' : 
                str[i] = 's';
                break;
            case str[i] === 'T' : 
                str[i] = 't';
                break;
            case str[i] === 'U' : 
                str[i] = 'u';
                break;
            case str[i] === 'V' : 
                str[i] = 'v';
                break;
            case str[i] === 'W' : 
                str[i] = 'w';
                break;
            case str[i] === 'X' : 
                str[i] = 'x';
                break;
            case str[i] === 'Y' : 
                str[i] = 'y';
                break;
            case str[i] === 'Z' : 
                str[i] = 'z';
                break;
            default:
        }
    }
    return str;
}
console.log(isAnagram('amar', 'rrma'));
