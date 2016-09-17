function sum (n) {
    var arr = [];
    var resN = 0;
    for(var i = 0; i <= n; i++ ){
        arr[i] = i;
    }
    for(val of arr){
        resN += val;
    }
    console.log(arr.join(' + ') + ' = ' + resN + '\n');
    return arr;
}
console.log(sum(12));
