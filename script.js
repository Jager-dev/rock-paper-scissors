
const message = document.querySelector(".message")
const buttons = document.querySelectorAll("button")
const score = document.querySelector(".score")
let winnerScores = [0, 0]


buttons.forEach(button => {
  button.addEventListener("click", playGame)
})

function playGame(e) {
  let computerSelection = Math.random()
  let playerSelection = e.target.innerText

  if (computerSelection < .34) {
    computerSelection = 'Rock'
  } else if(computerSelection < .67) {
    computerSelection = 'Paper'
  }else {
    computerSelection = 'Scissors'
  }


  let result = checkWinner(playerSelection, computerSelection)

  function checkWinner(player, computer){
    if (player === computer){
      return 'Draw'
    }
    if (player === 'Rock' && computer === 'Scissors' ||
      player === 'Paper' && computer === 'Rock' ||
    player === 'Scissors' && computer === 'Paper'){
      return 'Player'
    }else{
      return 'Computer'
    }
  }

  if (result === 'Player'){
    result += ':wins!'
    winnerScores[0]++
  }else if (result === 'Computer'){
    result += ':wins'
    winnerScores[1]++
  }
  if (result === 'Draw'){
    result += ':eto ravno!'
  }
  score.innerHTML = `Player [${winnerScores[0]}] Computer [${winnerScores[1]}]`
  messenger(`Player: ${playerSelection} Computer: ${computerSelection} <br>${result}`)
}

function messenger(selectionMessage) {
  message.innerHTML = selectionMessage
}









