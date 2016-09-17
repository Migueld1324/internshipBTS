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
            }
        if(ban === true){
            str += "O ";
            ban = false;
        } else {
            str += "I ";
            ban = true;
        }
    }
    return str;
}
console.log(chess(500));
