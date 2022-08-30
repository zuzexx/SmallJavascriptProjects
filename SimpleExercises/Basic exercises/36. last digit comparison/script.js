function compare (num1, num2, num3){
    if(num1>0 && num2>0 && num3>0){
        if (num1%10==num2%10 && num1%10 == num3%10 && num2%10 == num3%10){
            return"Last integer is the same."
        }else{
            return "last integers are NOT the same"
        }
    }else{
        return "integers have to be positive."
    }
}

console.log(compare(10, 20, 30));
console.log(compare(-10, 20, 30));
console.log(compare(10, -20, 30));
console.log(compare(10, 20, -30));
console.log(compare(1, 2, 3));
console.log(compare(1, 20, 30));
console.log(compare(10, 2, 30));
console.log(compare(10, 20, 3));
console.log(compare(12, 22, 32));