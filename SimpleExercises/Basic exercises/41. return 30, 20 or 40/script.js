function compare(num1, num2, num3){
    if(num1 === num2 && num1 === num3){
        return "30";
    } else if (num1 === num2 && num1 !== num3 || num2 === num3 && num2 !== num1 || num1 === num3 && num2 !== num1){
        return "40";
    }else{
        return "20";
    }
}

console.log(compare(1, 1, 1));
console.log(compare(21, 1, 1));
console.log(compare(1, 12, 1));
console.log(compare(1, 1, 12));
console.log(compare(12, 13, 14));