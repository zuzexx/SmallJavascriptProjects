let text = document.getElementById("text")

const a = 5
const b = 6
const c = 7
const s = (a+b+c)/2

const area = Math.sqrt(s*(s-a)*(s-b)*(s-c))


text.textContent = ` Area of a triangle with the lenghts of it's sides: ${a}, ${b} and ${c} is ${area}`