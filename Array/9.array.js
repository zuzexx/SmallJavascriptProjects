//Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

const changeCase = (string) => {
  let result = [];

  for (let i = 0; i < string.length; i++) {
    if (i === 0) {
      result.push(string[i].toLowerCase());
    } else if (string[i] === " ") {
      result.push(string[i]);
      result.push(string[i + 1].toLowerCase());
      i++;
    } else {
      result.push(string[i].toUpperCase());
    }
  }
  return result.join("");
};
console.log(changeCase("The Quick Brown Fox"));
