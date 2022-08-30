let currentDay = document.getElementById("current-day")
let currentTime = document.getElementById("current-time")
const d = new Date()
const weekDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let dayWeek = weekDays[d.getDay()];
let time = d.getTime();

let seconds = d.getSeconds()
let minutes = d.getMinutes()
//let hours = d.getHours()
let hours = d.toLocaleString("en-US", {hour: 'numeric', hour12:true})



currentDay.textContent = `Today is ${dayWeek}`
currentTime.textContent = `Current time is ${hours}  : ${minutes} : ${seconds} `