function character(str){
    let section = str.substring(2,4);
    for(let i = 0; i<=section.length; i++){
        if(section.charAt(i)==="a"){
            return true;
        }else{
            return false;
        }
    }
}

console.log(character("Hello"));
console.log(character("Helao"));
console.log(character("Hella"));
console.log(character("Healo"));
console.log(character("Helloa"));