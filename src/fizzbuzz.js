fizzbuzz = function(num){
    for (var i=1; i<=num; i++){
        var tempI =i;
        if(i%15==0)
            i = "FizzBuzz"
        else if(i%5==0)
            i="Buzz"
        else if(i%3==0)
            i="Fizz"
        
       console.log(i)
       i=tempI;
    }
}

fizzbuzz(20)