// Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference. 


let btn = document.getElementById("btn")

btn.addEventListener("click", function(){
    let number = document.getElementById("number").valueAsNumber
    let text = document.getElementById("text")
    if(number<14){
        let result = 13-number
        text.textContent = `The difference between your number and 13 is ${result}`
    }else{
        let result = number-13
        let doubresult= result*2
        text.textContent = `The double absolute difference between two numbers is ${doubresult}`
    }
})