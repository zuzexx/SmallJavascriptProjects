let text = document.getElementById("text");

function loopy(){
    for(let i = 0; i<16; i++){
        if(i===0){
            text.innerText += ` ${i} is even \n`

        }else if(i%2===0){
            text.innerText += ` ${i} is even \n`

        }
        else{
            text.innerText+= ` ${i} is odd \n`
        }
    }

}
loopy();