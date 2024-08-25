let humanScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  let index = Math.floor(Math.random() * choices.length);

  return choices[index];
};

const getHumanChoice = () => {
  let input = prompt("Choose between rock, paper, and scissors");

  // NaN at first attempt
  console.log(input);
  if (!input) {
    alert("No input from user, we let computer choose");
    return getComputerChoice();
  }

  input = input.toLowerCase();
  while (!choices.includes(input)) {
    input = prompt("Invalid choice! Choose between rock, paper, and scissors");

    console.log(input);
    if (!input) {
      alert("No input from user, we let computer choose");
      return getComputerChoice();
    }

    input = input.toLowerCase();
  }

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
    alert(
      `It's a tie, both players chose ${humanChoiceLowered}\nPlayer: ${humanScore}\t Computer: ${computerScore}`
    );
    return;
  } else {
    // Human wins the round
    if (playGame(humanChoiceLowered, computerChoiceLowered)) {
      humanScore += 1;
      alert(`Player won! ${humanChoiceLowered} beats ${computerChoiceLowered}`);
      alert(`Player: ${humanScore}\t Computer: ${computerScore}`);
      return;
    }

    computerScore += 1;
    alert(`Computer won! ${computerChoiceLowered} beats ${humanChoiceLowered}`);
    alert(`Player: ${humanScore}\t Computer: ${computerScore}`);
    return;
  }
};

for (let i = 0; i < 5; i++) {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
}

/*
rock beats scissors
scissors beats paper
paper beats rock

Bugs
1. NaN value when input is not included in choices[]
2. lowercase should be on the input sideo
3. Alert score must take only one line and not repeatedly used
4. Ask user how many rounds they want it to be 

*/
