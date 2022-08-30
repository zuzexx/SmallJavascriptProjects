//Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

let btn = document.getElementById("btn")

btn.addEventListener("click", function(){
    let firstNum = document.getElementById("first-number").valueAsNumber
    let secondNum = document.getElementById("second-number").valueAsNumber
    let text = document.getElementById("text")
    if(secondNum===firstNum){
        let result = (secondNum+firstNum)*3

        text.textContent=`Both of the numbers are the same! Here is tripple their sum: ${result}`

    }else{
        let result = secondNum + firstNum
        text.textContent=`the numbers are not the same. Here is their sum: ${result}`
    }
})