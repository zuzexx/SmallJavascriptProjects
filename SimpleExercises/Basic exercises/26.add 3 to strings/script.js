function addThree(str){
    if (str.lenght >= 3){
        three = str.substring(str.lenght - 3);
        return three + str + three;
    } else{
        return `no`
    }
}

console.log(addThree("Hello"));
console.log(addThree("dog"));
console.log(addThree("a"));
console.log(addThree("ThisIsALog"));
