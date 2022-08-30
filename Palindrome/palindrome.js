function palindrome(string) {
    let re = /[^A-Za-z0-9]/g;
    string = string.toLowerCase().replace(re, '');
    var lenght = string.length;
    for (var i = 0; i < lenght/2; i++) {
      if (string[i] !== string[lenght - 1 - i]) {
          return false;
      }
    }
    return true;
   }
   palindrome("Hwello, ollewh");