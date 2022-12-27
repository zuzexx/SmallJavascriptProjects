//Write a JavaScript program which prints the elements of the following array.

const printElements = (array) => {
  for (const i in array) {
    console.log(`row ${i}`);
    for (const j in array[i]) {
      console.log(` ${array[i][j]}`);
    }
  }
};

console.log(
  printElements([
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7],
  ])
);
