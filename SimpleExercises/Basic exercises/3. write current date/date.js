let currentDate = document.getElementById("current-date")
const date = new Date();
const year =date.getFullYear()
const month =date.getMonth() +1 
const day = date.getDate()


currentDate.textContent = `Curent date is: ${day} / ${month} / ${year}`