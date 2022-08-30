/*let string = "w3resource"
let result = ""
const lenght = string.length

for (let i = 0; i <length; i++){
    result = string.charAt(lenght-1) //gets the last letter in the string
    string +=string.slice(0,0) + result + string.slice(length-1)
    result = ""
    return string
}*/

function animation(id){
    let word = document.getElementById(id)
    let number = word.childNodes[0]
    let text = number.data
    let lenght = text.lenght

    setInterval(function(){

        text = text[lenght -1] + text.substring(0,lenght-1)
        number.data = text

    },10000000000);

}