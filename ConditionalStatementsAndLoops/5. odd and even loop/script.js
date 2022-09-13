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
