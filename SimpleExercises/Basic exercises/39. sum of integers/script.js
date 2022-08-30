function sum(num1, num2){
    let a = num1 + num2;
    if(a>=50 && a<=80){
        return "65";
    }else{
        return "80";
    }
}

console.log(sum(1, 2));
console.log(sum(50, 30));
console.log(sum(25, 25));
console.log(sum(100, 23));
console.log(sum(40, 40));