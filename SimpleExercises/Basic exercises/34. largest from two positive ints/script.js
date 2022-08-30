function numbers(num1, num2){
    if(num1<40 || num1>60 || num2<40 || num2>60){
        return `The numbers are not in the appropriate interval berween 40 and 60 inclusive`
    } if(num1>=40 && num1<=60 && num2>=40 && num2<=60){
        if(num1>num2){
            return `${num1} is bigger than ${num2}`
        }if(num1===num2){
            return `both numbers are equal`
        }else{
            return `${num2} is bigger than ${num1}`
        }
    }
}

console.log(numbers(1,2));
console.log(numbers(60,40));
console.log(numbers(60,60));
console.log(numbers(45,47));
console.log(numbers(100,200));