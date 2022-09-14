# Unlucky 13

Given a sorted array of numbers, return any numbers that are divisible by 13.

### Solution - JavaScript:
```
let unlucky = (arr) => {
  let result = arr.filter((i) => i % 13 != 0);
  return result;
};
console.log(unlucky([1, 13, 2, 16, 26]));
```

Used .filter() for the solution. More about Array.filter() is [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)