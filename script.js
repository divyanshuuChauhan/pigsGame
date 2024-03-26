'use strict';

const diceValue = document.querySelector('.diceValue');

const newGameButton = document.querySelector('.newgame');
const rollDiceButton = document.querySelector('.rolldice');
const holdButton = document.querySelector('.hold');

const currentScore0 = document.querySelector('#current0');
const currentScore1 = document.querySelector('#current1');
const player1Name = document.querySelector('#player0');
const player2Name = document.querySelector('#player1');
let finalScore0 = document.querySelector('#score0');
let finalscore1 = document.querySelector('#score1');

let currentScore = 0;

//players score variables :
let player1score = 0;
let player2score = 0;

let score = [0 , 0];

//active player
let activePlayer = 0;


rollDiceButton.addEventListener('click' , randomNoGen);

function randomNoGen()
{

  //Generate random number
  let random = Math.trunc(Math.random()*6)+1;
  console.log(random);

  //check if the number is 1 or not
  // if num !1 :
  if(random !== 1){
    diceValue.innerHTML = random;
    currentScore += random;
    document.getElementById(`current${activePlayer}`).textContent = currentScore;
  }
  // if num is 1 : 
  else
  {
    diceValue.innerHTML = random;
    switchPlayer();
  }
}

//hold
holdButton.addEventListener('click' , holdfunctionality);

function holdfunctionality(){
  //add current score to active player score
  score[activePlayer] += currentScore;
  //
  document.getElementById(`score${activePlayer}`).textContent = score[activePlayer];
  if(score[activePlayer] >= 20)
  {
    // console.log(score[activePlayer]);
    document.getElementById(`player${activePlayer}`).textContent = 'WINNER';
  }else{

    switchPlayer();
  }
  // currentScore = 0;
  // currentScore0.textContent = currentScore;


}


function switchPlayer()
{
  document.getElementById(`current${activePlayer}`).textContent = '00';
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.querySelector('.leftside').classList.toggle('active--player');
  document.querySelector('.rightside').classList.toggle('active--player');
}

newGameButton.addEventListener('click' , newgame);

function newgame()
{
diceValue.textContent = '0';
currentScore0.textContent = '00';
currentScore1.textContent = '00';
player1Name.textContent = 'PLAYER 1';
player2Name.textContent = 'PLAYER 2'
finalScore0.textContent = '00';
finalscore1.textContent = '00'; 

}