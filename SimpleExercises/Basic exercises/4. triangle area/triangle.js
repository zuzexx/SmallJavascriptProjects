function TriangleArea(a, b, c) {
  const s = (a + b + c) / 2;

  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return ` Area of a triangle with the lenghts of it's sides: ${a}, ${b} and ${c} is ${area}`;
}

console.log(TriangleArea(2, 2, 2));
console.log(TriangleArea(1, 2, 3));
console.log(TriangleArea(4, 5, 6));
console.log(TriangleArea(5, 7, 10));
console.log(TriangleArea(5, 6, 7));
