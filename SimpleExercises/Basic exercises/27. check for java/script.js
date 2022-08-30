function java(string){
    first = string.substring(0,4);
    if (first == "Java"){
        return true;
    } else{
        return false;
    }
}
console.log(java("true"));

console.log(java("Javayes"));
