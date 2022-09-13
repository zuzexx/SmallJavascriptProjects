Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

### Solution - Javascript:
```
function loopy() {
  let text = "";
  for (let i = 0; i < 16; i++) {
    if (i === 0) {
      text += ` ${i} is even \n`;
    } else if (i % 2 === 0) {
      text += ` ${i} is even \n`;
    } else {
      text += ` ${i} is odd \n`;
    }
  }
  return text;
}
console.log(loopy());
```