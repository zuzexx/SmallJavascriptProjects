let text = document.getElementById("text");

function remove(str, position){
    beginning = str.substring(0, position);
    end = str.substring(position+1, str.length);
    text.textContent = `${beginning}${end}`;
    return text.textContent;
}
remove ("Hello", 2);