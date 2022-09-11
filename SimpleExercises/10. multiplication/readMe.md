Write a JavaScript program to calculate multiplication and division of two numbers.

## Solution


## Code - JavaScript:

```
function multiply(num1, num2) {
  let result = num1 * num2;
  return `Multiplication of ${num1} and ${num2} results in ${result}`;
}

function divide(num1, num2) {
  if (num2 == 0) {
    return console.log("please use a number other than 0 for num2");
  }
  let result = num1 / num2;
  return `Division of ${num1} with ${num2} results in ${result}`;
}

console.log(divide(8, 4));
console.log(multiply(2, 9));
```