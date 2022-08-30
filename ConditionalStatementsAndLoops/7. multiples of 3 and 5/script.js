let text = document.getElementById("text");

function multiples(){
    for (let i = 1; i<=100; i++){
        if(i%3===0 && i%5===0){
            text.innerText += `${i} is FizzBuzz\n`;
        }else if (i%3===0){
            text.innerText += `${i} is Fizz\n`;
        } else if (i%5===0){
            text.innerText += `${i} is Buzz\n`;
        }
    }

}
multiples();