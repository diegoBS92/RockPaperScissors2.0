const choices = ['rock', 'paper', 'scissors']

const getComputerChoice = () => choices[Math.trunc(Math.random()*3)]

const playRound = function() {
    let playerSelection = prompt('select rock, paper or scissors')
    playerSelection = playerSelection.toLowerCase()
    let computerSelection = getComputerChoice()
    let result

    if (playerSelection == computerSelection) {
        result = 'it is a draw'
    } else if(playerSelection == 'rock') {
        result = computerSelection == 'paper' ? 'computer wins' : 'player wins'
    } else if(playerSelection == 'paper') {
        result = computerSelection == 'rock' ? 'player wins' : 'computer wins'
    } else {
        result = computerSelection == 'paper' ? 'player wins' : 'computer wins'
    }
    console.log(playerSelection, computerSelection)
    return  result
}

let game = () => {
    let player = 0
    let computer = 0
    for (let rounds = 0; rounds < 5; rounds++) {
        let result = playRound()
        if (result == 'it is a draw') continue
        result == 'player wins' ? player++ : computer++
    }
    if (player == computer) return console.log('its a draw') 
    player>computer ? console.log(`${player}, ${computer}, player wins`) : console.log(`${player}, ${computer}, computer wins`)
    
}
