# Palindrome  Checker 
This is a project made for [JavaScript Algorithms and data Structures](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#javascript-algorithms-and-data-structures-projects)

## How I came to the solution:

There are multiple ways to solve this challenge, but my first instinct was to go with a for loop.
 For the palindrome the first half of the word needs to mirror the second half. All of the letters also have to be the same, uppercase or lowercase.
 Something that i had to serch the web for was `/[\W_]/g`. This removes any unwanted characters from the string.
 `string = string.toLowerCase().replace(re, '');` returns a string that is all lower case without any spaces in between the letters.

 After that I stored the lenght of the string into a new variable.

 I used a for loop to check the letters in the string. The first letter has to be the same as the last, the second the same as the second to last. So `string[i] === string[lenght - 1 - i]` for all  `i` from 0 to the lenght of the string. Only in this case is the word a palindrome. If at any point it turns out that the letters are not the same, the for loop can return false at once. Otherwise the function returns true.