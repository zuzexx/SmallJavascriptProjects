let text = document.getElementById("text");
let marks = document.getElementById("marks");
let grades = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
let number = 0;

function average(){
    for(let i = 0; i<grades.length; i++){
        number += grades[i][1];
        
    }
    let avr = number / grades.length;
    marks.textContent=`Average grade: ${avr}`
    if(avr<60){
        text.textContent=`The average grade is F`
    }else if(avr<70){
        text.textContent=`The average grade is D`
    }else if(avr<80){
        text.textContent=`The average grade is C`
    } else if(avr<90){
        text.textContent=`The average grade is B`
    }else{
        text.textContent=`The average grade is A`
    }

}

average();