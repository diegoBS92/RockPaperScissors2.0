const choices = ['rock', 'paper', 'scissors']

const getComputerChoice = () => choices[Math.trunc(Math.random()*3)]

let playerScore = 0
let computerScore = 0



const playRound = function(e) {
    let playerSelection = e.target.textContent
    let computerSelection = getComputerChoice()
    let result

    if (playerSelection == computerSelection) {
        outcome.textContent = 'it is a draw'
    } else if(playerSelection == 'rock') {
        outcome.textContent = computerSelection == 'paper' ? 'computer wins' : 'player wins'
    } else if(playerSelection == 'paper') {
        outcome.textContent = computerSelection == 'rock' ? 'player wins' : 'computer wins'
    } else {
        outcome.textContent = computerSelection == 'paper' ? 'player wins' : 'computer wins'
    }
    console.log(playerSelection, computerSelection)
    if (outcome.textContent == 'player wins') playerScore++
    else if(outcome.textContent == 'computer wins') computerScore++
    resultext.textContent = `player score: ${playerScore} - computer score: ${computerScore}`
    if (computerScore == 5) outcome.textContent = 'The final winner is the computer!'
    else if (playerScore == 5) outcome.textContent = 'The final winner is the player!'
    return  result
}

let options =  Array.from (document.querySelectorAll('.option'))
let outcome = document.querySelector('.outcome')
let resultext =document.querySelector('.score')
outcome.textContent= 'make your choise!'
resultext.textContent = `player score: ${playerScore} - computer score: ${computerScore}`

for (item of options) {
    item.addEventListener('click', playRound)
}


