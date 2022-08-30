let text = document.getElementById("text");
const a = 1;
const b = 2;
const c = -3;

function sign(){

    if(a<0 && b <0 && c <0){
        text.textContent =`the sign is -`
    }else if (a<0 && b<0 && c>0){
        text.textContent =`the sign is +`
    } else if (a<0 && b>0 && c>0){
        text.textContent =`the sign is -`
    }else if (a<0 && b>0 && c<0){
        text.textContent =`the sign is +`
    } else if (a>0 && b>0 && c<0){
        text.textContent =`the sign is -`
    }else{
        text.textContent =`the sign is +`
    }

}
sign();