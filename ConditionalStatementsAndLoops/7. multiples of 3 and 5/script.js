function multiples() {
  let text = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      text.push(`FizzBuzz`);
    } else if (i % 3 === 0) {
      text.push(`Fizz`);
    } else if (i % 5 === 0) {
      text.push(`Buzz`);
    } else {
      text.push(i);
    }
  }
  return text;
}
console.log(multiples());
