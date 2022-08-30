let text = document.getElementById("text")

for( let i = 2014; i <=2050; i++){
let d = new Date (i, 0, 1)
let day = d.getDay() /*gets number between 0 and 6, if number is 0 then we have a saturday.*/
if(day ===0){
    text.innerText += ` 1st January ${i} is a saturday.\n`
}
}