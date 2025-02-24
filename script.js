/*
1. Create a generateTarget() function. This function should return a random integer between 0 and 9. The purpose of this function is to be called at the start of each new round in order to generate the new secret target number.
2. Create a compareGuesses() function. This function:

Has three parameters representing the user (human) guess, a computer guess, and the secret target number to be guessed.
Determines which player (human or computer) wins based on which guess is closest to the target. If both players are tied, the human user should win.
Return true if the human player wins, and false if the computer player wins.
The purpose of this function is to be called each round to determine which guess is closest to the target number.

3. Create an updateScore() function. This function:

Has a single parameter. This parameter will be a string value representing the winner.
Increases the score variable (humanScore or computerScore) by 1 depending on the winner passed in to updateScore. The string passed in will be either 'human' or 'computer'.
Does not need to return any value.
The purpose of this function is to be used to correctly increase the winner’s score after each round.

*/


let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

// const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
//   const humanDifference = Math.abs(targetGuess - humanGuess);
//   const computerDifference = Math.abs(targetGuess - computerGuess);
//   return humanDifference <= computerDifference;
// }

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

const advanceRound = () => currentRoundNumber++;

const getAbsoluteDistance = (num1, num2) => Math.abs(num1 - num2);

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  if (humanGuess < 0 || humanGuess > 9) {
    alert('Your number is out of range');
  }
  const humanDifference = getAbsoluteDistance(humanGuess, targetGuess);
  const computerDifference = getAbsoluteDistance(computerGuess, targetGuess);
  return humanDifference <= computerDifference;
}   // end of compareGuesses function
