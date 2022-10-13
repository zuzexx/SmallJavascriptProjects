const CHARACTER_CHART = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
};

function rot13(str) {
  let convertedString = "";
  for (let i = 0; i < str.length; i++) {
    const character = str[i];
    let convertedCharacter = "";
    if (/[a-z]/i.test(character)) {
      convertedCharacter = CHARACTER_CHART[character];
    } else {
      convertedCharacter = character;
    }
    convertedString += convertedCharacter;
  }

  return convertedString;
}

let result = rot13("SERR PBQR PNZC");
console.log(result);
