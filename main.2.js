const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
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
    } else {
        result = draw;
    }

    return `You have ${userChoice} and computer had ${computerChoice} - ${result}`
}

console.log(determineWinner(getUserChoice('paper'),getComputerChoice()));
