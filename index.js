const choices = document.querySelector(".choices");
const choicesListButtons = choices.querySelectorAll("button");
const choicesListActual = ["rock", "paper", "scissors"];
const gameStarterButton = document.querySelector("#gameStarterButton");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const resultOfGame = document.querySelector(".results");

choicesListButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const playerChoice = e.target.textContent;

    if (playerChoice.toLowerCase() == getComputerChoice()) {
      resultOfGame.textContent = "It's a tie";
    } else if (evaluateRound(playerChoice.toLowerCase(), getComputerChoice())) {
      resultOfGame.textContent = "You win";
      playerScore.textContent = (
        parseInt(playerScore.textContent) + 1
      ).toString();
    } else {
      resultOfGame.textContent = "You lose";
      computerScore.textContent = (
        parseInt(computerScore.textContent) + 1
      ).toString();
    }

    setTimeout(() => {
      resultOfGame.textContent = "Game is not over, choose one";
    }, 3000);
  });
});

const getComputerChoice = () => {
  let index = Math.floor(Math.random() * choicesListActual.length);

  return choicesListActual[index];
};

const getHumanChoice = () => {
  let input = prompt("Choose between rock, paper, and scissors");

  // NaN at first attempt
  if (input == NaN || input == null) {
    return null;
  }

  // No input from user
  if (input == "") {
    alert("No input from user, we let computer choose");
    return getComputerChoice();
  }

  input = input.toLowerCase();
  while (!choices.includes(input)) {
    input = prompt("Invalid choice! Choose between rock, paper, and scissors");

    // NaN at first attempt
    if (input == NaN || input == null) {
      return null;
    }

    // No input from user
    if (input == "") {
      alert("No input from user, we let computer choose");
      return getComputerChoice();
    }

    input = input.toLowerCase();
  }

  return input;
};

const evaluateRound = (humanChoice, computerChoice) => {
  if (humanChoice === "paper" && computerChoice === "rock") {
    return true;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    return true;
  } else if (humanChoice == "scissors" && computerChoice === "paper") {
    return true;
  }
  return false;
};

const playRound = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    alert(`It's a tie, both players chose ${humanChoice}`);
  } else {
    // Human wins the round
    if (evaluateRound(humanChoice, computerChoice)) {
      humanScore += 1;
      alert(`Player won! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore += 1;
      alert(`Computer won! ${computerChoice} beats ${humanChoice}`);
    }
  }

  alert(`Player: ${humanScore}\t Computer: ${computerScore}`);
  return;
};

const playGame = (score) => {
  while (humanScore < score && computerScore < score) {
    const humanChoice = getHumanChoice();

    if (!humanChoice) {
      alert("User cancelled the game, stopping...");
      return;
    }
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  if (computerScore == score) {
    alert("Computer won the game!");
    return;
  }

  alert("Player won the game!");
  return;
};

// playGame(5);

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
