let text = document.getElementById("text");

function switchy(str){
    if(str.length <= 1){
        text.textContent = `${str}`;
    } else{
        change = str.substring(1, str.length -1); //gets all of the character except for first and last
        let t = str.charAt(str.length -1) + change + str.charAt(0)
        text.innerText = `${t}`;
    }
}
switchy("switchMe");
switchy("bw");
switchy("q");