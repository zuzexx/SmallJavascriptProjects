
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

