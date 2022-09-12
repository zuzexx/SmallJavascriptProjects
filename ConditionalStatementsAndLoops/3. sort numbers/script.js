function compare(a, b, c) {
  if (a > b && a > c) {
    if (b > c) {
      return `${a}, ${b}, ${c}`;
    } else {
      return `${a}, ${c}, ${b}`;
    }
  }
  if (b > a && b > c) {
    if (a > c) {
      return `${b}, ${a}, ${c}`;
    } else {
      return `${b}, ${c}, ${a}`;
    }
  }
  if (c > a && c > b) {
    if (a > b) {
      return `${c}, ${a}, ${b}`;
    } else {
      return `${c}, ${b}, ${a}`;
    }
  }
}

console.log(compare(1, 2, 3));
console.log(compare(3, 1, 2));
console.log(compare(2, 3, 1));
