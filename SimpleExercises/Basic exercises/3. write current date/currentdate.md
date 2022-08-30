Write a JavaScript program to print the contents of the current window.

### Solution:
I have written some simle HTML and the vent straight to the JavaScript. at first I have writen: 

```

let currentDate = document.getElementById("current-date")
const date = new Date();
const year =date.getFullYear()
const month =date.getMonth() +1 
const day = date.getDay()


currentDate.textContent = Curent date is: ${day} / ${month} / ${year}


```

But the day was not generated in the right way. The `getDate()` returned 0, not 3 as it was supposed to. The correct syntax is `getddate()` since this returns the right day. `getDay()` only returns numbers from 0 to 6 (usefull when we want to know a ray of the week, but not the date in the month). I realized this thanks to [stackoverflow](https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript#:~:text=Use%20new%20Date()%20to,the%20current%20date%20and%20time.&text=This%20will%20give%20you%20today's,to%20whatever%20format%20you%20wish.) .
The + 1 with the `getMonth()` is also important, since it generates numbers from 0 to 11.

### Final code:

```
let currentDate = document.getElementById("current-date")
const date = new Date();
const year =date.getFullYear()
const month =date.getMonth() +1 
const day = date.getDate()


currentDate.textContent = Curent date is: ${day} / ${month} / ${year}

```
