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
