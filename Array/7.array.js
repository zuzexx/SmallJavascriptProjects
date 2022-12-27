//Write a JavaScript program to sort the items of an array.

const sortArray = (array) => {
  let resultArray = [];
  let position;
  let minimal = array[0];
  let maximal = array[0];

  for (let i = 0; i < array.length; i++) {
    if (maximal < array[i]) maximal = array[i];
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] != "x") {
        if (minimal > array[j]) {
          minimal = array[j];
          position = j;
        }
      }
    }
    resultArray[i] = minimal;
    array[position] = "x";
    minimal = maximal;
  }
  return resultArray;
};

console.log(sortArray([-3, 8, 7, 6, 5, -4, 3, 2, 1]));
