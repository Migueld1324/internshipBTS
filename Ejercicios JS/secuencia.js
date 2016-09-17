function secuencia(n){
    var den = 1;
    var res = 0;
    var den1 = 1;
    var den2 = 1;
    var cDen = 1;
    var num1 = 1;
    var num2 = 1;
    var ent = 0;
    if(n > 0){
        for(var i = 0; i < n; i++){
            if(i === 0){
                res += (1/den);
                den1 = 1;
                num1 = 1;
                console.log("Resultado iteración "+(i+1)+': 1/'+den+' = '+ res.toFixed(2));
            } else {
                den += 3;
                res += (1/den);
                den2 += 3;
                cDen = den1 * den2;
                num1 = ((cDen/den1*num1)+(cDen/den2*num2));
                den1 = cDen;
                console.log("Resultado iteración "+(i+1)+': 1/'+den+' = '+ res.toFixed(2));
            }
        }
    } else if(n === 0){
        res += (0/den);
        console.log("Resultado iteración 1: "  + res.toFixed(2));
    }
    while(num1 > den1){
        num1 -= den1;
        ent += 1;
    }
    console.log("Resultado final: " + res.toFixed(2) +' Resultado fraccion '+ ent + ' + ' + num1 + '/' +den1);
}
console.log(secuencia (10));
