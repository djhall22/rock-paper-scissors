const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

function checkWin(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    alert("Tie Game!");
  }
}

function playGame(playerChoice, computerChoice) {}

getComputerChoice();
