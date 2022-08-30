Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.

## Solution:

For every year from 2014 to 2050 I have to look if the 1st of Jannuary is Saturday. I used a for loop to loop throgh all of the integers and compared the integer that `getDay()` generated. If the day is 0 then we have a saturday.

### Code:

```
let lext = document.getElementById("text")

for( let i = 2014; i <=2050; i++){
let d = new Date (i, 0, 1)
let day = d.getDay() 
if(day ===0){
    text.textContent += ` 1st January ${i} is a saturday. `
}
}
```