let text = document.getElementById("text");
let star 

for (let i = 1; i < 7; i++){
    for(let a = 1; a < i; a++){
        star += `*`;
    }
    text.innerText = `${star}`;
    star = '';
}