let hexName = document.getElementById("hex-name")
let Hex =["0","1","2","3","4","5","6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
let btn = document.getElementById("btn")


btn.addEventListener("click", function(){
    let background = "#";
    for(let i = 0; i<6; i++){
    
    background += Hex[Math.floor(Math.random()*16)]
}
hexName.textContent=background
document.body.style.backgroundColor = background
})
