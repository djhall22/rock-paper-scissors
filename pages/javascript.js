const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

function checkWin(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "tie";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    return "player";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    return "player";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    return "player";
  } else {
    return "computer";
  }
}

function playRound(playerChoice, computerChoice) {
  const result = checkWin(playerChoice, computerChoice);
  if (result == "tie") {
    return "Tie Game!";
  } else if (result == "player") {
    return `Player one wins! ${playerChoice} beats ${computerChoice}.`;
  } else if (result == "computer") {
    return `Computer wins! ${computerChoice} beats ${playerChoice}`;
  }
}

function getPlayerChoice() {
  let validatedInput = false;
  while (validatedInput === false) {
    const choice = prompt("Rock, Paper, Scissors");

    if (choice == null) {
      continue;
    }
    const choiceInLower = choice.toLowerCase();
    if (options.includes(choiceInLower)) {
      validatedInput == true;
      return choiceInLower;
    }
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    console.log(playRound(playerChoice, computerChoice));
  }
}

game();
