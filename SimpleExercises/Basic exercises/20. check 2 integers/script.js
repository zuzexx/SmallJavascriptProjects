let text = document.getElementById("text");
let numOne = -10;
let numTwo = 20;

function test(){
    if(numOne <= 0 && numTwo > 0){
        text.textContent="First number is negative and the second number is positive."

    } else if (numOne > 0 && numTwo <= 0){
        text.textContent="First number is positive and the second number is negative."

    }else if (numOne <= 0 && numTwo <= 0){
        text.textContent="Both numbers are negative."

    }else{
        text.textContent="Both numbers are positive."

    }
}
test()