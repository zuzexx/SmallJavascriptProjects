## Display current day and time


Write a JavaScript program to display the current day and 
time in the following format. 
Today is : Tuesday.
Current time is : 10 PM : 30 : 38 



Solution: 

For days: 

I defined an array full of week days and used
`getDay()` to return a number from 0 to 6. After that the program writes the day in the week.

For the time: 

I used `getSeconds()`, `getMinutes()` and `getHours()` to get the current time. After that I wanted to display AM or PM next to the hour. After searching around the internet I found an ansiwer on [stackoverflow](https://stackoverflow.com/questions/8888491/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format). I changed the variable hours from `d.getHours()` to `d.toLocaleString("en-US", {hour: 'numeric', hour12:true})`, because the latter includes the hour value and AM/PM.

### Final code

```
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
```