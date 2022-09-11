 Write a JavaScript program to calculate days left until next Christmas.  

 ### Solution - JavaScript:
```
let d = new Date();
let day = 24 * 60 * 60 * 1000;

let christmas = new Date(d.getFullYear(), 11, 25); //christmas has the same year as today, month is -1 and the day is 25

if (d.getMonth() === 11 && d.getDate() > 25) {
  christmas.setFullYear = christmas.currentYear + 1; // setting a new year if it is past christmas
}
let result = Math.ceil((christmas.getTime() - d.getTime()) / day);
console.log(`There is ${result} days until Xmas`);
```