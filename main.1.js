const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput; 
    } else {
      return userInput + ' is not a valid response. Please try again.'
    }
  }
  
function getComputerChoice(){
    switch (Math.floor(Math.random() * 3)) {
        case 0:
        return 'rock';
        break;
        case 1:
        return 'paper';
        break;
        case 2:
        return 'scissors';
        break;
        default:
        break;
    }
}
  
function determineWinner(userChoice,computerChoice){
    let result;
    let win = 'You win :-)'
    let lose = 'You lose :-('
    let draw = 'You tie :-/'

    if (userChoice === 'rock'){
        if (computerChoice === 'scissors'){
        result = win;
        } else if (computerChoice === 'paper') {
        result = lose;
        } else {
        result = draw;
        }
    } else if (userChoice === 'paper'){
        if (computerChoice === 'rock'){
        result = win;
        } else if (computerChoice === 'scissors') {
        result = lose;
        } else {
        result = draw; 
        }  
    } else {
        if (computerChoice === 'paper'){
            result = win;
        } else if (computerChoice === 'rock') {
            result = lose;
        } else {
            result = draw;      
        }
    }
    return `You have ${userChoice} and computer had ${computerChoice} - ${result}`
}

console.log(determineWinner(getUserChoice('rock'),getComputerChoice()));
