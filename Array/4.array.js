//Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

const getLastArrayElements = (array, n) => {
  if (array == null) return void 0;
  if (n == null) return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));
};

console.log(getLastArrayElements([7, 9, 0, -2]));
console.log(getLastArrayElements([7, 9, 0, -2], 3));
console.log(getLastArrayElements([7, 9, 0, -2], 6));
