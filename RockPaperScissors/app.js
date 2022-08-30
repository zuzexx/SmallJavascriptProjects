
let startGameBtn = document.getElementById("start-game-btn");
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS="SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW="DRAW";
const PLAYER_WINS ="PLAYER WINS";
const COMPUTER_WINS = "COMPUTER WINS";
let gameIsRunning = false;

const getPlayerChoice = ()=>{
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`, "").toUpperCase();
    if(selection !== ROCK && 
       selection !== PAPER && 
       selection !== SCISSORS){
        alert(`Invalid choice. We chose ${DEFAULT_USER_CHOICE} for you`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
}

const getComputerChoice = ()=>{
    const randomValue = Math.random();
    if(randomValue<0.34){
        return ROCK;
    }else if(randomValue<0.67){
        return PAPER;
    }else{
        return SCISSORS;
    }
}

//terniary expression CONDITION ? RETURN THIS IF TRUE : ELSE DO THIS
const getWinner = (cChoice, pChoice)=>{
    return cChoice === pChoice 
    ? RESULT_DRAW : 
    cChoice === ROCK && pChoice === PAPER ||
    cChoice === PAPER && pChoice === SCISSORS ||
    cChoice === SCISSORS && pChoice === ROCK 
    ? PLAYER_WINS 
    : COMPUTER_WINS;
}/*
    if(cChoice === pChoice){
        return RESULT_DRAW;
    }else if(
        cChoice === ROCK && pChoice === PAPER ||
        cChoice === PAPER && pChoice === SCISSORS ||
        cChoice === SCISSORS && pChoice === ROCK){
        return PLAYER_WINS;
    }else{
        return COMPUTER_WINS;
    }
}*/


startGameBtn.addEventListener("click", () =>{

    if(gameIsRunning){
        return ;
    }
    gameIsRunning = true;
   const playerSelection = getPlayerChoice();
   const computerChoice = getComputerChoice();
   const winner = getWinner(computerChoice, playerSelection);
    console.log(winner);
   
});





/*const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
let text = document.getElementById("text")
const arr = ["rock", "paper", "scissors"]
//const lenght = arr.lenght
let result = document.getElementById("result")
let computer = document.getElementById("computer")
let myResult = 0;
let yourResult = 0;




rock.addEventListener("click", function(){
    let myNum = Math.floor(Math.random()*3); 
    if(arr[myNum]===arr[0]){
        text.textContent = `I got ${arr[0]}, it is a draw 😓`
        
    }else if (arr[myNum]===arr[1]){
        text.textContent = `I got ${arr[1]}, I win 🥳`
        yourResult++;
        computer.textContent= yourResult
        
    } else {
        text.textContent = `I got ${arr[2]}, you win 😅`
        myResult++;
        result.textContent = myResult
        
    }
    
})

paper.addEventListener("click", function(){
    let myNum = Math.floor(Math.random()*3);
    if(arr[myNum]===arr[0]){
        text.textContent = `I got ${arr[0]}, you win 😅`
        myResult++;
        result.textContent = myResult
        
    }else if (arr[myNum]===arr[1]){
        text.textContent = `I got ${arr[1]}, it is a draw 😓`
        
    } else {
        text.textContent = `I got ${arr[2]}, I win 🥳`
        yourResult++;
        computer.textContent= yourResult
        
    }
    
})

scissors.addEventListener("click", function(){
    let myNum = Math.floor(Math.random()*3);
    if(arr[myNum]===arr[0]){
        text.textContent = `I got ${arr[0]}, I win 🥳`
        yourResult++;
        computer.textContent= yourResult
        
    }else if (arr[myNum]===arr[1]){
        text.textContent = `I got ${arr[1]}, you win 😅`
        myResult++;
        result.textContent = myResult
        
    } else {
        text.textContent = `I got ${arr[2]}, it is a draw 😓`
        
    }
    
})*/
