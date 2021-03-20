'use strict';

//define the Secret Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//score variable
let score = 20;

//high score variable
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//we want to listen to the event on the click button

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    displayMessage('No number');

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct number');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    //updating the high score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game :(');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// resetting page to play again
document.querySelector('.again').addEventListener('click', function () {
  //reset the score and secretNumber
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').innerHTML = 20;
  document.querySelector('.number').innerHTML = '?';

  // change the message to original
  displayMessage('Start guessing...');

  //reset the guess number input
  document.querySelector('.guess').value = '';

  //reset the color and size
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
