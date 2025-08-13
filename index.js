// Rock Paper Scissor

const choices = ["rock", "paper", "scissors"];

const playerDisplay = document.getElementById("playerDisplay");

const computerDisplay = document.getElementById("computerDisplay");

const resultDisplay = document.getElementById("resultDisplay");

const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;


function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    // console.log(computerChoice);
    
    let result = "";

    if (playerChoice == computerChoice) {
        result = `It's a Tie !`;
    }
    else{
        switch (playerChoice){  
            case "rock":
                result = (computerChoice === "scissors") ? "Player Wins" : "Computer Wins";
                break;
                
            case "paper":
                result = (computerChoice === "rock") ? "Player Wins" : "Computer Wins";
                break;

            case "scissors":
                result = (computerChoice === "paper") ? "Player Wins" : "Computer Wins";
                break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result; 
    
    if (result === "Player Wins"){
        resultDisplay.style.color = "hsla(120, 61%, 52%, 1.00)";
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    
    }    
    else if (result === "Computer Wins"){
        resultDisplay.style.color = "hsla(0, 69%, 50%, 1.00)";
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        
    }
    else{
        resultDisplay.style.color = "hsla(229, 55%, 53%, 1.00)";
    
    }
}































