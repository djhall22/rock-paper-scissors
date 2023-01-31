const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

function checkWin(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "tie";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    return "player wins";
  } else if (playerchoice === "paper" && computerChoice === "rock") {
    return "player wins";
  } else if (playerchoice === "scissors" && computerChoice === "paper") {
    return "player wins";
  } else {
    return "computer wins";
  }
}

function playGame(playerChoice, computerChoice) {}

getComputerChoice();
