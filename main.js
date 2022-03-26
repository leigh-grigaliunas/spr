let playGame = (a) => console.log(determineWinner(getUserChoice(a),getComputerChoice()));

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    return (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') ? userInput : userInput + ' is not a valid response. Please try again.';
}
  
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    return (choice === 0) ? 'rock' : (choice === 1) ? 'paper' : 'scissors';
}
  
function determineWinner(userChoice,computerChoice){
    let choices = `You have ${userChoice} and computer had ${computerChoice}`;
    
    return (userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissors' && computerChoice === 'paper') ? choices + ' - You win :-)' : 
    (computerChoice === 'rock' && userChoice === 'scissors') || (computerChoice === 'paper' && userChoice === 'rock') || (computerChoice === 'scissors' && userChoice === 'paper') ? choices + ' - You lose :-(' : 
    (userChoice === 'bomb') ? choices + ' - well played, you win out of principle!' :
    choices + ' - You tie :-/';
}

playGame('BOMB');
