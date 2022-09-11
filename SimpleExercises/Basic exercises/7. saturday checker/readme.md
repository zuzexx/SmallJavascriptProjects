Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.

## Solution - JavaScript:

```
function SundayChecker() {
  let text = "";
  for (let i = 2014; i <= 2050; i++) {
    let d = new Date(i, 0, 1);
    let day =
      d.getDay(); /*gets number between 0 and 6, if number is 0 then we have a saturday.*/
    if (day === 0) {
      text += ` 1st January ${i} is a saturday.\n`;
    }
  }
  return text;
}
console.log(SundayChecker());
```