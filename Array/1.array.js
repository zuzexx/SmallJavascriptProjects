//Write a JavaScript function to check whether an `input` is an array or not.

const checkForArray = (test) => {
  let result = "";
  const check = Array.isArray(test);
  if (check === true) {
    result = "This is an array.";
  } else {
    result = "this is not an array";
  }
  return result;
};
console.log(checkForArray("w3resource"));
console.log(checkForArray([1, 2, 3, 4]));
console.log(checkForArray(1));
