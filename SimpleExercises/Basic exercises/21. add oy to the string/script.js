let text = document.getElementById("text");


function checkString(str){
    
    if(str===null || str.substring(0,2)==="Py"|| str === undefined){
        return text.textContent=str;
    }else{
        str = "Py"+str;
        return text.textContent=str;
    }
}
checkString("Python")
