function compare(num1, num2){
    if (Math.abs(num1-100)>Math.abs(num2-100)){
        return `${num2} is closer to 100 than ${num1}`
    }else{
        return `${num1} is closer to 100 than ${num2}`
    }
}

console.log(compare(1,2));
console.log(compare(100,200));
console.log(compare(13,-2));
console.log(compare(1000,52));