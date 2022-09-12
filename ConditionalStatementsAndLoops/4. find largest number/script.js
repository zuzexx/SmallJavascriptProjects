function largest(a, b, c, d, e) {
  if (a > b && a > c && a > d && a > e) {
    return `${a}`;
  } else if (b > a && b > c && b > d && b > e) {
    return `${b}`;
  } else if (c > a && c > b && c > d && c > e) {
    return `${c}`;
  } else if (d > a && d > b && d > c && d > e) {
    return `${d}`;
  } else {
    return `${e}`;
  }
}
console.log(largest(1, 2, 3, 4, 5));
console.log(largest(2, 3, 4, 5, 1));
console.log(largest(3, 4, 5, 1, 2));
console.log(largest(4, 5, 1, 2, 3));
console.log(largest(9, 5, 1, 2, 3));
console.log(largest(5, 4, 3, 2, 1));
