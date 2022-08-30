

function time(){
    let date = new Date()
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let clock = document.getElementById("clock")
    let amPm = "AM"

   
    if(hour==0){
        hour = 12
    }else{
        amPm = "PM"
        hour -=12
    }
    if(hour <10){
        hour = "0"+hour
    }
    if(minutes <10){
        minutes = "0"+minutes
    }
    if(seconds <10){
        seconds = "0"+seconds
    }
    clock.textContent = `${hour} : ${minutes} : ${seconds} ${amPm}`
    setTimeout(time, 1000);
}
time();