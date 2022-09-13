Write a JavaScript program to find the armstrong numbers of 3 digits. 
Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.

### Solution - JavaScript:
```
function armstrongNum() {
  let text = [];
  for (let a = 1; a < 10; a++) {
    for (let b = 0; b < 10; b++) {
      for (let c = 0; c < 10; c++) {
        let number = a * 100 + b * 10 + c;
        let armstrong = Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3);
        if (number == armstrong) {
          text.push(`Number ${number} is and armstrong number`);
        }
      }
    }
  }
  return text;
}

console.log(armstrongNum());
```