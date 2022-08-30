//Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50. 

let btn = document.getElementById("btn")

btn.addEventListener("click", function(){
    let firstNum=document.getElementById("number-one").valueAsNumber
    let secondNum = document.getElementById("number-two").valueAsNumber
    let text = document.getElementById("text")
    if(firstNum===50 || secondNum===50 || firstNum+secondNum===50){
        text.textContent="true"
    }else{
        text.textContent="false"
    }

})