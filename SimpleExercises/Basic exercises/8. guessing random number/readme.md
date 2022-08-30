 Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".

 ## Solution:

 My goal for the programme was to generate a random number when the user inputs a number and pushes the button. After that the program has to see if the input number is the same as the generated number and display the appropriate message.
 The development went smoothly for the majority of the time. After I tested the programme I realized that it always displays the You lose message. This was solved by using `.valueAsNumber` instead of `.value` to get the value of the input number.

 ## Code:

 ### HTML:
 ```
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>guess random number</title>
</head>
<body>
    <p>Please choose a number between 1 and 10:</p>
    <input name="number" type="number" id="number">
    <button id="btn">Feel lucky?</button>
    <div id="result"></div>
    
</body>
<script src="script.js"></script>
</html>
 ```

 ### JavaScript:
 ```
 
let btn=document.getElementById("btn")

btn.addEventListener("click", function(){
    
    let number = document.getElementById("number").value
    let randoNumber = Math.floor(Math.random()*10)
    let result = document.getElementById("result")
    if(number === randoNumber){
        result.textContent =` Good job! My random number is ${randoNumber}`
    }else{
        result.textContent =` You lose! My random number is ${randoNumber}`
    }

 
})
 ```

 