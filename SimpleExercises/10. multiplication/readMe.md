Write a JavaScript program to calculate multiplication and division of two numbers (input from user)

## Solution

Firstly I have written the HTML code, including Input boxes and buttons. After that every HTML idem was asigned as a variable in JS. I have written a function for each button, that executes when the button  gets clicked and displays the result.

## Code:

### HTML
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>multiply/divide</title>
</head>
<body>
    <form>
        <label for="first-num">1. Number:</label>
        <input type="number" id="first-num" name="first-num"><br><br>
        <label for="second-num">2. Number:</label>
        <input type="number" id="second-num" name="second-num"><br><br>
        <button id="multiply">Multiply</button>
        <button id="divide">Divide</button>
    </form>
    <div id="result"></div>
</body>
<script src="script.js"></script>
</html>
```

### JavaScript:
```
let multiply = document.getElementById("multiply")
let divide = document.getElementById("divide")
let result = document.getElementById("result")

//result.textContent="hello"

multiply.addEventListener("click", function(){
    let firstNum = document.getElementById("first-num").value
    let secondNum = document.getElementById("second-num").value
    let multi = firstNum*secondNum
     result.textContent= `${multi}`
})

divide.addEventListener("click", function(){
    let firstNum = document.getElementById("first-num").value
    let secondNum = document.getElementById("second-num").value
    let multi = firstNum/secondNum
     result.textContent= `${multi}`
})
```