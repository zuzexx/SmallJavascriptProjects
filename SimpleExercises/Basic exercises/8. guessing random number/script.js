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
