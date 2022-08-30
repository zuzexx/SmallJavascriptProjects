Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.

## Solution:

Defined two functions, one for each button, that return the desired value. When the button is pressed, the function takes the input value and converts it to Celsius/Fahrenheit and displays the value below.

## Code:

### HTML: 
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>C to F converter</title>
</head>
<body style="display:flex; justify-content:center; align-items: center;">
    <main style="margin-top: 100px;">
       <label for ="input">Number:</label>
        <input type="number" name="input" id="input">
        <button id="ctof-btn">From Celsius to Fahrenheit</button>
        <button id="ftoc-btn"> from Fahrenheit to Celsius</button><br>

        <div id="result" style="color:blue; font-size:30px; text-align: center; margin-top:50px"></div>

    </main>
    
</body>
<script src="script.js"></script>

</html>
```

### JavaScript:
```
let cToFBtn = document.getElementById("ctof-btn")
let fToCBtn = document.getElementById("ftoc-btn")
let result = document.querySelector("#result")
//result.innerHTML ="I am still not work"

cToFBtn.addEventListener("click", function(){
    let input = document.getElementById("input").value
    let cToF = (5*(input-32))/9

    result.textContent=Math.floor(cToF)
    
})

fToCBtn.addEventListener("click", function(){
    let input = document.getElementById("input").value
    let cToF = (9*input + (32*5))/5

    result.textContent=Math.floor(cToF)
    
})
```