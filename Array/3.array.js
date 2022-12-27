//Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

const getArrayElements = (array, n) => {
  if (array == null) {
    return void 0;
  } else if (n == null) {
    return array.splice(0, 1);
  } else {
    return array.splice(0, n);
  }
};

console.log(getArrayElements([7, 9, 0, -2]));
console.log(getArrayElements([], 3));
console.log(getArrayElements([7, 9, 0, -2], 3));
console.log(getArrayElements([7, 9, 0, -2], 6));
console.log(getArrayElements([7, 9, 0, -2], -3));
