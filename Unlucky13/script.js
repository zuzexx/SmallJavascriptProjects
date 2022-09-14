let unlucky = (arr) => {
  let result = arr.filter((i) => i % 13 != 0);
  return result;
};
console.log(unlucky([1, 13, 2, 16, 26]));
