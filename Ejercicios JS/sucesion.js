function sucesion (n){
    if(n > 0){
        var suc = '';
        for(var i = n; i > 0; i--){
            suc += ' ' + i;
            console.log(suc);
        }
    }
}
console.log(sucesion(4));
