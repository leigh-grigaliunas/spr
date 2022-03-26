const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput; 
    } else {
      return userInput + ' is not a valid response. Please try again.'
    }
  }
  
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0 ){
        return 'rock';
    } else if (choice === 1){
        return 'paper';
    } else {
        return 'scissors';
    }
}
  
function determineWinner(userChoice,computerChoice){
    let result;
    let win = 'You win :-)'
    let lose = 'You lose :-('
    let draw = 'You tie :-/'

    if ((userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissors' && computerChoice === 'paper')){
        result = win;
    } else if ((computerChoice === 'rock' && userChoice === 'scissors') || (computerChoice === 'paper' && userChoice === 'rock') || (computerChoice === 'scissors' && userChoice === 'paper')){ 
        result = lose;
    } else if (userChoice === 'bomb') { 
        result = "well played, you win out of principle!"
    }else {
        result = draw;
    }

    return `You have ${userChoice} and computer had ${computerChoice} - ${result}`
}

function playGame() {
    console.log(determineWinner(getUserChoice('BOMB'),getComputerChoice()));
  }
  
  playGame();
  
