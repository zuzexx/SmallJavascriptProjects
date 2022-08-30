const compare = document.getElementById("compare");

compare.addEventListener("click", function(){

    let numberOne = document.getElementById("number-one").valueAsNumber;
    let numberTwo = document.getElementById("number-two").valueAsNumber
    let text = document.getElementById("text")

    if (numberOne < numberTwo){
        text.textContent=`${numberTwo} is bigger than ${numberOne}`
    } else if (numberOne===numberTwo){
        text.textContent=`Both numbers are equal`
    }else{
        text.textContent = `${numberOne} is bigger than ${numberTwo} `
    }
    
})

