//using arrow function syntax to get the users choice
const getUserChoice = userInput=>{
  Input = userInput.toLowerCase();
  if (userInput ==='rock' || userInput ==='paper' || userInput === 'scissors') {
    return userInput
  }
  else {
    console.log('error, choose one of the expected choices')
  }
};

// get the choice of the computer
const getComputerChoice = () =>{
  randomNum = Math.floor(Math.random() * 3);
  switch (randomNum){
    case 0:
    return 'rock';
    case 1:
    return 'paper';
    case 2:
    return 'scissors'
  }
};

// Determing the user of the game
const determineWinner = (userChoice, computerChoice) =>{
  if (userChoice === computerChoice){
    return 'The game was a tie';
  }
  if (userChoice ==='rock'){
    if (computerChoice ==='paper'){
      return 'The computer won';
    } else{
      return 'The user won';
    }
  if (userChoice === 'paper'){
    if (computerChoice === 'scissors' || computerChoice === 'rock'){
      return 'The computer won';
    }else{
      return 'The user won';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock' || computerChoice === 'paper') {
      return 'The computer won';
    }
    else {
      return 'The user won';
    }
  }
  }
  }

//  Logic that plays the game
const playGame = () =>{
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);

console.log(determineWinner(userChoice, computerChoice));
};

// calling the playgame function
playGame();


