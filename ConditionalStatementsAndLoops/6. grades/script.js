let grades = [
  ["David", 80],
  ["Vinoth", 77],
  ["Divya", 88],
  ["Ishitha", 95],
  ["Thomas", 68],
];
let number = 0;

function average() {
  for (let i = 0; i < grades.length; i++) {
    number += grades[i][1];
  }
  let avr = number / grades.length;

  if (avr < 60) {
    return `The average grade is F`;
  } else if (avr < 70) {
    return `The average grade is D`;
  } else if (avr < 80) {
    return `The average grade is C`;
  } else if (avr < 90) {
    return `The average grade is B`;
  } else {
    return `The average grade is A`;
  }
}

console.log(average());
