let words = document.getElementById("words")
let year = 2001;

if(year%4===0 && year%100!==0){
    words.textContent = `The year ${year} is a leap year`
} else if (year%4===0 && year%100===0 && year%400 ===0){
    words.textContent = `The year ${year} is a leap year`
}else{
    words.textContent = `The year ${year} is not a leap year`
}