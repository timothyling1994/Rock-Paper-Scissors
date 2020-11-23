function computerPlay(){

  let computerMove = ""
  let possibleMoves = ["rock","scissors","paper"];

  computerMove = possibleMoves[Math.floor(Math.random()*3)];

  return computerMove;
}

function declareWinner(playerSelection,computerSelection)
{
  let result=""

  if (playerSelection=="rock")
  {
    if (computerSelection=="paper")
    {
      result = "You Lose! Paper beats Rock";
    }
    else if (computerSelection=="rock")
    {
      result =  "You tie! You both chose rock"; 
    }
    else
    {
      result= "You Win! Rock beats Scissors";
    }
  }

  else if (playerSelection=="scissors")
  {
    if (computerSelection=="paper")
    {
      result= "You Win! Scissors beats Paper";
    }
    else if (computerSelection=="rock")
    {
      result= "You Lose! Rock beats Scissors"; 
    }
    else
    {
      result= "You Tie! You both chose Scissors";
    }
  }

  else
  {
    if (computerSelection=="paper")
    {
      result= "You Tie! You both chose Paper";
    }
    else if (computerSelection=="rock")
    {
      result= "You Win! Paper beats Rock"; 
    }
    else
    {
      result= "You Lose! Scissors beats Paper";
    }
  }

  let score = document.querySelector("#score");
  score.textContent="Player Selection: " + playerSelection + "\r\n";
  score.textContent += "Computer Selection: " + computerSelection + "\r\n";
  score.textContent += result +'\r\n';


  return result;
  

}

let scoreCount = {
  winCounter: 0,
  lossCounter: 0,
  tieCounter: 0,
  roundCounter:1
};

function playGame (playerMove){


  let playerSelection="";
  let computerSelection="";
  let outcome = "";


  playerSelection = this.id;
  computerSelection = computerPlay();

  outcome = declareWinner(playerSelection,computerSelection);
  console.log(outcome);


  if(outcome.includes("Win"))
  {
    scoreCount.winCounter += 1;
  }
  else if (outcome.includes("Lose"))
  {
    scoreCount.lossCounter += 1;
  }
  else
  {
    scoreCount.tieCounter += 1;
  }

  
  if(scoreCount.roundCounter==5)
  {

    let score = document.querySelector("#score");
    score.textContent+= "\r\n"+"Wins: " + scoreCount.winCounter +"\r\n";
    score.textContent+="Ties: " + scoreCount.tieCounter +"\r\n";
    score.textContent+="Losses: " + scoreCount.lossCounter +"\r\n";

    scoreCount.winCounter=0;
    scoreCount.lossCounter=0;
    scoreCount.tieCounter=0;
    scoreCount.roundCounter=1;
  } 
  else
  {
    scoreCount.roundCounter += 1;
  }

}



function theDomHasLoaded(e) {


  const moves = document.querySelectorAll(".moves");
  moves.forEach(move => {
    move.addEventListener("click",playGame)});

}

document.addEventListener("DOMContentLoaded",theDomHasLoaded,false);
