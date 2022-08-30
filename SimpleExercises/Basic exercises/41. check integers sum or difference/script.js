function numbers(num1, num2){
    if(num1 === 8 || num2 === 8 || num1 + num2 === 8 || Math.abs(num1 - num2) ===8){
        return true;
    }else{
        return false;
    }
}

console.log(numbers(1,2));
console.log(numbers(1,8));
console.log(numbers(8,2));
console.log(numbers(4,4));
console.log(numbers(5,3));
console.log(numbers(16,24));