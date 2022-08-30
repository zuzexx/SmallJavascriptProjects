// formula = weight(kg) /[height(m)]sq
/* below 18.5 = underweight
18.5 - 24.9 healthy
25 - 29.9 overweight
30.0 + obese */

let btn=document.getElementById("button")
let result = document.getElementById("result")
let jugment = document.getElementById("jugment")
let theme = document.getElementById("theme")

btn.addEventListener("click", function(){
    let weight = document.getElementById("weight").value
let height = document.getElementById("height").value
let BMI = weight/(height*height)
result.textContent=`Your BMI is ${BMI}`

if(BMI < 18.5){
    jugment.textContent = "You are underweight"
    jugment.style.color="yellow"
    
} else if(BMI >= 18.5 && BMI < 25){
    jugment.textContent="Your weight is in a healthy range"
    jugment.style.color="green"
}else if(BMI >=25 && BMI < 30){
    jugment.textContent="You are overweight"
    jugment.style.color="orange"
} else if(BMI>=30){
    jugment.textContent="You are obese"
    jugment.style.color="red"
} else{
    jugment.textContent="Please enter weight and height"
}

})

