let hello = document.querySelector("#hello")

/* I have to get todays day and look how many days there are untill 25.12*/
let d = new Date()
let day = 24*60*60*1000


let christmas = new Date(d.getFullYear(), 11, 25) //christmas has the same year as today, month is -1 and the day is 25

if(d.getMonth()===11 && d.getDate()>25){
    christmas.setFullYear = (christmas.currentYear + 1) // setting a new year if it is past christmas
}
 let result = Math.ceil((christmas.getTime()- d.getTime())/day)
 hello.textContent=`There is ${result} days until Xmas`
 