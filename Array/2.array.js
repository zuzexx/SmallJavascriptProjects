//Write a JavaScript function to clone an array.

const cloneArray = (array) => {
  return array.slice(0);
};
console.log(cloneArray([1, 2, 4, 0]));
console.log(cloneArray([1, 2, [4, 0]]));
