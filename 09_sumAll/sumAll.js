const sumAll = function(num1,num2 ) {
    let start;
    let end;
    let sum =0;
    if (num1> num2){
        end=num1;
        start=num2;
    }
    else if(num1< num2){
        end=num2;
        start=num1;
        
    };

    for(let i= start; i<=end; i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
