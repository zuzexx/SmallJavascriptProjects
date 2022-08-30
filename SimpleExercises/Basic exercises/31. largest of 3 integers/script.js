function compare(num1, num2, num3){
    if(num1>num2 && num1>num3){
            return `${num1} is bigger than ${num2} and ${num3}`
    }if(num2>num1 && num2>num3){
        return `${num2} is bigger than ${num1} and ${num3}`
    }else{
        return `${num3} is bigger than ${num1} and ${num2}`
    }
}

console.log(compare(1,2,3));
console.log(compare(1,20,3));
console.log(compare(1,2,30));
console.log(compare(1,2,-3));
console.log(compare(1,-2,3));
console.log(compare(-1,2,3));