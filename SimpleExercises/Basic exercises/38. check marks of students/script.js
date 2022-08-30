function checkMark(mark, final){
    if(final === false && mark >= 89 && mark <= 100){
        return "A+";
    } else if(final === true && mark >= 90){
        return "A+";
    }else{
        return "No A+ for you"
    }
}

console.log(checkMark(70, true));
console.log(checkMark(90, true));
console.log(checkMark(100, true));
console.log(checkMark(70, false));
console.log(checkMark(89, false));
console.log(checkMark(100, false));