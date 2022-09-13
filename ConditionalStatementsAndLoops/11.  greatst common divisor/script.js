let text = "";

let a = 1234;
let b = 100;
let gcd;

while (a != b) {
  if (a > b) {
    a = a - b;
  } else {
    b = b - a;
  }
}
gcd = a;
text = `greatest comon divider is ${gcd}`;
console.log(text);
