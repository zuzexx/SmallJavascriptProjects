
let btn=document.getElementById("btn")
/*when I click on the btn the program generates a random number and checks it against the input value*/
btn.addEventListener("click", function(){
    
    let number = document.getElementById("number").valueAsNumber
    let randoNumber = Math.floor(Math.random()*10)
    let result = document.getElementById("result")
    if(number === randoNumber){
        result.textContent =` Good job! My random number is ${randoNumber}`
    }else{
        result.textContent =` You lose! My random number is ${randoNumber}`
    }

 
})


