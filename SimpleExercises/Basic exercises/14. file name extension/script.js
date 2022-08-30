//Write a JavaScript exercise to get the extension of a filename.

let text = document.getElementById("text")
let filename = "hello.jpg"
let result = filename.split('.').pop()

text.textContent = `the extension of the file is ${result}`