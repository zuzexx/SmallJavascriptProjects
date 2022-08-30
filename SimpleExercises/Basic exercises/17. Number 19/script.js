//Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19. 

let btn = document.getElementById("btn")

btn.addEventListener("click", function(){
   let number = document.getElementById("number").valueAsNumber
    let text = document.getElementById("text")
    if(number<20){
        let abs = 19-number
        text.textContent = `the absolute difference between 19 and ${number} is ${abs}`
    }else{
        let abs = (number-19)*3
        text.textContent=`Tripple absolute difference is ${abs}`
    }
})