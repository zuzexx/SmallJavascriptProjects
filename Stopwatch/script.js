let startBtn = document.getElementById("start-btn")
let stopBtn = document.getElementById("stop-btn")
let resetBtn = document.getElementById("reset-btn")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")
let miliseconds = document.getElementById("miliseconds")
let min = 0
let sec = 0
let interval
//let milisec = 00

stopBtn.addEventListener("click", function(){
    clearInterval(interval)
    
})

startBtn.addEventListener("click", function(){
    clearInterval(interval)
    interval = setInterval(startTimer, 1000)

})

resetBtn.addEventListener("click", function(){
    sec = 0
    min = 0
    minutes.textContent="00"
    seconds.textContent="00"
})

function startTimer(){
    sec++
    if (sec <= 9){
        //sec++
        seconds.textContent = `0${sec}`
    }else{
        
        seconds.textContent = sec
    }
    if (sec===60){
        min++
        sec = 0
        minutes.textContent= `0${min}`
        seconds.textContent = `0${sec}`
    } if(min >9){
        minutes.textContent = min
    }
}