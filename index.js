const choices = document.querySelector(".choices");
const choicesListButtons = choices.querySelectorAll("button");
const choicesListActual = ["rock", "paper", "scissors"];
const gameStarterButton = document.querySelector("#gameStarterButton");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const resultOfGame = document.querySelector(".results");
const targetScore = document.querySelector(".targetScore");
let flag = true;

const getComputerChoice = () => {
  let index = Math.floor(Math.random() * choicesListActual.length);

  return choicesListActual[index];
};

// replace playGame()
choicesListButtons.forEach((button) => {
  button.disabled = true; // disabled at first reload
  button.addEventListener("click", (e) => {
    const playerChoice = e.currentTarget.textContent;
    const computerChoice = getComputerChoice();
    playRound(playerChoice.toLowerCase(), computerChoice);
    console.log();
  });
});

gameStarterButton.addEventListener("click", (e) => {
  if (flag) {
    // enable buttons
    choicesListButtons.forEach((button) => {
      button.disabled = !flag;
    });

    resultOfGame.textContent = "Click a button from RPS buttons";
    e.currentTarget.textContent = "Stop game";
    let score = parseInt(prompt("Race to?"));

    while (isNaN(score)) {
      score = parseInt(prompt("Enter a valid number"));
    }

    targetScore.textContent = `Race to ${score}`;
    flag = false;
  } else {
    // disable buttons
    choicesListButtons.forEach((button) => {
      button.disabled = !flag;
    });

    e.currentTarget.textContent = "New game";
    targetScore.textContent = "";
    resultOfGame.textContent = "Start a new game?";
    playerScore.textContent = "0";
    computerScore.textContent = "0";
    flag = true;
  }
});

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
    resultOfGame.textContent = `It's a tie, both players chose ${humanChoice}`;
  } else {
    // Human wins the round
    if (evaluateRound(humanChoice, computerChoice)) {
      resultOfGame.textContent = `Player won, ${humanChoice} beats ${computerChoice}!`;
      playerScore.textContent = (
        parseInt(playerScore.textContent) + 1
      ).toString();
    } else {
      resultOfGame.textContent = `Computer won, ${computerChoice} beats ${humanChoice}!`;
      computerScore.textContent = (
        parseInt(computerScore.textContent) + 1
      ).toString();
    }
  }
  // return;
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
1. Integrate DOM to our old game logic
2. User can input how many score to play
3. Once target score was achieved, user cannot click choices button and automatic spawn of new game button

*/
