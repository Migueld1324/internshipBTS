function jeraOpe (str){
    var j = 0;
    var arre = [];
    arre = str.split('');
    console.log(arre);
    for (var i = 0; i < arre.length; i++){
        if(arre[i] === '*' || arre[i] === '/'){
            arre[j] += arre[i];
        } else if(arre[i] === '+' || arre[i] === '-'){
            j++;
            arre[j] = arre[i];
            j++;
        } else if(arre[i].parseInt){
            arre[j] += arre[i].toString;
        }
    }
    console.log(arre);
}
console.log(jeraOpe("4+2*8-4/2"));
