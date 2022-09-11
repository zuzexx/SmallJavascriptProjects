Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.

## Solution - JavaScript:
```
function CelsiusToF(celsius) {
  let result = (5 * (celsius - 32)) / 9;
  return result;
}
function FToCelsius(fahrenheit) {
  let result = (9 * fahrenheit + 32 * 5) / 5;
  return result;
}

console.log(CelsiusToF(10));
console.log(FToCelsius(10));
console.log(CelsiusToF(20));
console.log(FToCelsius(20));
console.log(CelsiusToF(30));
console.log(FToCelsius(30));
```

