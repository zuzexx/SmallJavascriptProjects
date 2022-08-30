Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7

### Solution:
The first challenge was finding the right equation for the triangle area. If you have all three lenghts of the sides, then the best equation to use is Heron's formula. 

I defined the three lenghts as constants and defined another constant named s. I got s from the sum of lenghts divided by 2. After that all i had to do is write a new constant, that would be the result of Heron's formula. I got the formula from [Britannnica](https://www.britannica.com/science/Herons-formula).


### Final code:

```
let text = document.getElementById("text")

const a = 5
const b = 6
const c = 7
const s = (a+b+c)/2

let area = Math.sqrt(s*(s-a)*(s-b)*(s-c))


text.textContent =  Area of a triangle with the lenghts of it's sides: ${a}, ${b} and ${c} is ${area}

```