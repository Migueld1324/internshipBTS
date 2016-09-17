//write a program that prints the numbers from 1 to 100. But for multiplies of three print "Fizz" instead of the number and for the multiplies
//of five print "Buzz". For numbers which are the multiplies of both three and five print "FizzBuzz".

for (var i = 1; i <= 100; i++){
    if(i % 3 === 0){
        if(i % 5 === 0){
            console.log("FizzBuzz");
        }
        else{
            console.log("Fizz");
        }
    }
    else if(i % 5 === 0){
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
