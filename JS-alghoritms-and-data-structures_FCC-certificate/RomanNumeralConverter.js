function convertToRoman(num) {
  let RomanNumeral = [];
  let number1 = "";
  let number2 = "";
  let number3 = "";
  let number4 = "";

  var str = "";
  str += num;

  if (str.length == 0) {
    RomanNumeral = [];
  } else if (str.length > 0) {
    switch (str[str.length - 1]) {
      case "1":
        number1 = "I";
        break;
      case "2":
        number1 = "II";
        break;
      case "3":
        number1 = "III";
        break;
      case "4":
        number1 = "IV";
        break;
      case "5":
        number1 = "V";
        break;
      case "6":
        number1 = "VI";
        break;
      case "7":
        number1 = "VII";
        break;
      case "8":
        number1 = "VIII";
        break;
      case "9":
        number1 = "IX";
        break;
    }
    switch (str[str.length - 2]) {
      case "1":
        number2 = "X";
        break;
      case "2":
        number2 = "XX";
        break;
      case "3":
        number2 = "XXX";
        break;
      case "4":
        number2 = "XL";
        break;
      case "5":
        number2 = "L";
        break;
      case "6":
        number2 = "LX";
        break;
      case "7":
        number2 = "LXX";
        break;
      case "8":
        number2 = "LXXX";
        break;
      case "9":
        number2 = "XC";
        break;
    }
    switch (str[str.length - 3]) {
      case "1":
        number3 = "C";
        break;
      case "2":
        number3 = "CC";
        break;
      case "3":
        number3 = "CCC";
        break;
      case "4":
        number3 = "CD";
        break;
      case "5":
        number3 = "D";
        break;
      case "6":
        number3 = "DC";
        break;
      case "7":
        number3 = "DCC";
        break;
      case "8":
        number3 = "DCCC";
        break;
      case "9":
        number3 = "CM";
        break;
    }
    switch (str[str.length - 4]) {
      case "1":
        number4 = "M";
        break;
      case "2":
        number4 = "MM";
        break;
      case "3":
        number4 = "MMM";
        break;
    }
  }
  RomanNumeral.push(number4, number3, number2, number1);

  return RomanNumeral.join("");
}

convertToRoman(36);
