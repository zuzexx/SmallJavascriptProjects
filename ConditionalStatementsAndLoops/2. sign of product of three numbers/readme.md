Write a JavaScript conditional statement to find the sign of product of three numbers. D

### Solution-JavaScript:
```
function sign(a, b, c) {
  if (a < 0 && b < 0 && c < 0) {
    return `the sign is -`;
  } else if (a < 0 && b < 0 && c > 0) {
    return `the sign is +`;
  } else if (a < 0 && b > 0 && c > 0) {
    return `the sign is -`;
  } else if (a < 0 && b > 0 && c < 0) {
    return `the sign is +`;
  } else if (a > 0 && b > 0 && c < 0) {
    return `the sign is -`;
  } else {
    return `the sign is +`;
  }
}
console.log(sign(1, 2, 3));
console.log(sign(-1, 2, 3));
console.log(sign(-1, -2, 3));
console.log(sign(-1, -2, -3));
console.log(sign(1, -2, 3));
console.log(sign(1, -2, -3));
console.log(sign(1, 2, -3));
```