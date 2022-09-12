function NormalToRoman(num) {
  const numerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let result = "";
  for (key in numerals) {
    let i = Math.floor(num / numerals[key]);
    if (i !== 0) {
      result += key.repeat(i);
    }
    num %= numerals[key];
    if (num === 0) {
      return result;
    }
  }
  return result;
}

console.log(NormalToRoman(10));
console.log(NormalToRoman(15));
console.log(NormalToRoman(23));
console.log(NormalToRoman(100));
console.log(NormalToRoman(250));
