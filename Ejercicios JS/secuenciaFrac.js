function secuencia(n){
    var den1 = 1;
    var den2 = 1;
    var cDen = 1;
    var num1 = 1;
    var num2 = 1;
    if(n > 0){
        for(var i = 0; i < n; i++){
            if(i === 0){
                den1 = 1;
                num1 = 1;
            } else {
                den2 += 3;
                cDen = den1 * den2;
                num1 = ((cDen/den1*num1)+(cDen/den2*num2));
                den1 = cDen;
            }
        }
        console.log(num1 + '/' +den1);
    }
}
console.log(secuencia (5));
