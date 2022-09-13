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
