const arr = ["Rock", "Paper", "Scissors"];

function computerPlay()
{
    return arr[Math.floor(Math.random()*arr.length)]
}

let playerChoice;
let computerChoice;
let you = 0,computer = 0;

function Round(playerSelection,computerSelection)
{
    if (computerSelection == playerSelection) {
        console.log("Tie game!");
      } else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
      ){
          console.log("You Lose! "+ computerSelection + " beats " + playerSelection);
          computer += 1;
      }
      else{
          console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
          you += 1;
      } 
}

function game()
{
    for(i = 0;i< 5;i++){
        console.log(`Round ${i+1}: `);
        playerChoice = prompt("choose your weapon;Rock,Paper or Scissors:").toLowerCase();
        computerChoice = computerPlay().toLowerCase();
        console.log("Computer: "+computerChoice);
        Round(playerChoice,computerChoice);
        console.log(`Your Score: ${you}  Computer's Score: ${computer}`);
    }
    if(you > computer)
        console.log("Congrats! You won.");
    else if(computer > you)
        console.log("Shit!");
    else
        console.log("Tie!");
}

game();


