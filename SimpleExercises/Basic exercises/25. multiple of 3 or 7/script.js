function check(num){
    if(num%3===0 && num%7===0){
        return console.log(`Number ${num} is a multiple of 3 and 7`);
    }
    if(num%3===0){
       return console.log(`Number ${num} is a multiple of 3`);
    }
    if(num%7===0){
        return console.log(`Number ${num} is a multiple of 7`);
     }
     if(num <= 0){
        return console.log(`Please use a positive number`)
     } else{
        return console.log(`Number ${num} is not a multiple of 3 or 7`);
     }

}

console.log(check(3));
console.log(check(13));
console.log(check(49));
console.log(check(21));
console.log(check(- 3));
