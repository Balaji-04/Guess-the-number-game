'use strict';

let randomNum = Math.floor(Math.random() * (20 - 1) + 1); //rand * (max - min) + min
const message = document.querySelector('.message');
let highScore = 0;
const score_val = document.querySelector('.score-val');
const high_score_val = document.querySelector('.high-score-val');
let score = 10;
//console.log(score_val.textContent);

document.querySelector('.check').addEventListener('click', function() {
   const guessVal = Number(document.querySelector('.guess-input').value);
   if (!guessVal){
    message.textContent = '❌ Enter a valid Number!';
   }else{
        if (randomNum > guessVal ){
            message.textContent = '🔎 Guess a Higher Number';
            score--;
            score_val.textContent = score;
            if (score == 0){
                message.textContent = '🔃 You Lost. Game is now Reset.';
                score = 10;
                score_val.textContent = score;
            }
        }else if (randomNum < guessVal){
            message.textContent = '🔎 Guess a Smaller Number';
            score--;
            score_val.textContent = score;
            if (score == 0){
                message.textContent = '🔃 You Lost. Game is now Reset.';
                score = 10;
                score_val.textContent = score;
            }
        }else{
            message.textContent = '🎉YAY! YOU WON!';
            
            randomNum = Math.floor(Math.random() * (20 - 1) + 1);
            if (score > highScore){
                highScore = score;
                high_score_val.textContent = highScore;
            }
            score += 5; // for each correct guess you get 20 points.
            score_val.textContent = score;
        }

   }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 10;
    highScore = 0;
    document.querySelector('.guess-input').value = '';
    message.textContent = '🔎 Start Guessing...';
    score_val.textContent = score;
    high_score_val.textContent = highScore;
});