
function strenght(str){
    
    if(str.length < 6){
        return str;
    }
    
    if(str.substring(4,10) =="script"){
        return str.substring(0,4) + str.substring(10,str.length);
    }
    else{
        return "The string does not include script"
    }
}

console.log(strenght("Javascript"));
console.log(strenght("hello"));
console.log(strenght("script"));
console.log(strenght("Scriscript"));