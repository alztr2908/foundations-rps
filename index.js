let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * choices.length);

  return choices[index];
};

const getHumanChoice = () => {
  const input = prompt("Choose between rock, paper, and scissors");
  return input;
};

const playGame = (humanChoice, computerChoice) => {
  if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      return true;
    }
    return false;
  } else if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      return true;
    }
    return false;
  } else if (humanChoice == "scissors") {
    if (computerChoice === "paper") {
      return true;
    }
    return false;
  }
};

const playRound = (humanChoice, computerChoice) => {
  const humanChoiceLowered = humanChoice.toLowerCase();
  const computerChoiceLowered = computerChoice.toLowerCase();

  if (humanChoiceLowered === computerChoiceLowered) {
    alert(`It's a tie, both players chose ${humanChoiceLowered}`);
  } else {
    // Human wins the round
    if (playGame(humanChoiceLowered, computerChoiceLowered)) {
      humanScore += 1;
      alert(`Player won! ${humanChoiceLowered} beats ${computerChoiceLowered}`);
      return;
    }

    computerScore += 1;
    alert(`Computer won! ${computerChoiceLowered} beats ${humanChoiceLowered}`);
    return;
  }
};

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
console.log(humanChoice);
console.log(computerChoice);
playRound(humanChoice, computerChoice);

/*
rock beats scissors
scissors beats paper
paper beats rock
*/
