function chess (n){
    var str = '';
    var ban = true;
    for(var i = 0; i < (n*n); i++){
        if((i%n) === 0){
            if(n%2 === 0){
              if(ban === true){
                  ban = false;
                } else {
                  ban = true;
                }
            }
            str += '\n'; 
        }
        if(ban === true){
            str += "1 ";
            ban = false;
        } else {
            str += "0 ";
            ban = true;
        }
    }
    return str;     
}
console.log(chess(33));
