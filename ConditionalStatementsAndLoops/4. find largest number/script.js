let text = document.getElementById("text");
const a = 5;
const b = 6;
const c = 7;
const d = 8;
const e = 4;


function largest(){
    if (a>b && a>c && a>d && a>e){
        text.textContent=`${a}`
    }else if ( b>a && b>c && b>d && b>e){
        text.textContent=`${b}`
    } else if ( c>a && c>b && c>d && c>e){
        text.textContent=`${c}`
    } else if (d>a && d>b && d>c && d>e){
        text.textContent=`${d}`
    } else{
        text.textContent=`${e}`
    }
}
largest();

