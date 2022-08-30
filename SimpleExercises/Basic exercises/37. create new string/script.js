function stringo(str){
    if(str.length<3){
        return str.toUpperCase();
    }else if(str.length >= 3){
        let newString = str.substring(0, 3);
        return newString.toLowerCase()
    }
}

console.log("hi");
console.log("HELLO");
console.log("HeLLO");
console.log("HelLO");
console.log("HElLO");