let text = document.getElementById("text");
const a = 12;
const b = 8;
const c = -7;

function compare(){

    if(a>b && a>c){
        if (b>c){
            text.textContent = `${a}, ${b}, ${c}`
        } else{
            text.textContent = `${a}, ${c}, ${b}`
        }
    }
    if (b>a && b>c){
        if (a>c){
            text.textContent = `${b}, ${a}, ${c}`
        } else{
            text.textContent = `${b}, ${c}, ${a}`
        }
    } if (c>a && c>b){
        if (a>b){
            text.textContent = `${c}, ${a}, ${b}`
        } else {
            text.textContent = `${c}, ${b}, ${a}`
        }
    }

}
compare();