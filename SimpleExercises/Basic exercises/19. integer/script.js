let text = document.getElementById("text");
let number = 50;
function test(){
    if(Math.abs(100-number)<=20){
        text.textContent = `The integer is within 20 0f 100`;
    }
    else if(Math.abs(400-number)<=20){
        text.textContent = `The integer is within 20 of 400`;
    }else{
        text.textContent="The integer is not within 20 of 400 or 100";
    }
    return text.textContent;
}
test()