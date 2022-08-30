function numbers(num1, num2, num3){
    if((num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99) || (num3 >= 50 && num3 <= 99)){
        return true;
    } else{
        return false;
    }
}

console.log(numbers(10,99, 11));
console.log(numbers(50,99, 99));
console.log(numbers(1,9,3));
console.log(numbers(1,9,52));