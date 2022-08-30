function numbers(num1, num2){
    if(num1>40 && num1<60 || num1>70 && num1 <= 100){
        if(num2>40 && num2<60 || num2>70 && num2 <= 100){
            return `Both are in the desired range`;   
        }else{
            return `only ${num1} is in the desired range`;
        }
    }
    if(num2>40 && num2<60 || num2>70 && num2 <= 100){
            return `only ${num2} is in the desired range`;
        }else{
            return `None of the numbers are in the desired range`;
        }
    
}

console.log(numbers(1, 41));
console.log(numbers(100, 100));
console.log(numbers(71, 11));
console.log(numbers(13, 410));