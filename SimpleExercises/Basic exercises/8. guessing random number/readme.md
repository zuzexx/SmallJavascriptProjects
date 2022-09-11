 Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".

 ## Solution - JavaScript:
 ```
function GuessNumber(number) {
  let randoNumber = Math.floor(Math.random() * 10);

  if (number === randoNumber) {
    return ` Good job! My random number is ${randoNumber}`;
  } else {
    return ` You lose! My random number is ${randoNumber}`;
  }
}

console.log(GuessNumber(10));
console.log(GuessNumber(5));
console.log(GuessNumber(7));
console.log(GuessNumber(1));
 ```

 