let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let rockE = document.getElementById("rockE");
let paperE = document.getElementById("paperE");
let scissorE = document.getElementById("scissorE");
const vn1 = document.getElementById("vn1");
const vn2 = document.getElementById("vn2");
const vn3 = document.getElementById("vn3");
const choices = document.querySelectorAll(".choice");
const keys = document.querySelectorAll(".key");
let isFunctionEnabled = true;

let text = document.querySelector(".alert");
let scoreBoard = document.querySelector(".scoreBoard");
let resetBtn = document.querySelector("button");

let playerScore = 0;
let compScore = 0;

choices.forEach((choice) => {
  choice.addEventListener("click", handleChoice);
});

function handleChoice(event) {
  if (isFunctionEnabled) {
    const playerChoice = event.target.id;
    const playerChoiceInt = getPlayerChoiceInt(playerChoice);
    const compChoiceInt = getCompChoice();
    console.log(playerChoiceInt);
    console.log(compChoiceInt);
    playGame(playerChoiceInt, compChoiceInt);
  }
}

function getPlayerChoiceInt(playerChoice) {
  if (playerChoice === "rock") {
    return 1;
  } else if (playerChoice === "paper") {
    return 2;
  } else {
    return 3;
  }
}

resetBtn.addEventListener("click", function () {
  playerScore = 0;
  compScore = 0;
  updateText("Game Restarted!");
  updateScore(0, 0);
  isFunctionEnabled = true;
});

function updateText(string) {
  text.textContent = string;
}

function updateScore(ps, cs) {
  scoreBoard.textContent = `Player Score: ${ps} Computer Score: ${cs}`;
}

function playGame(playerChoice, compChoice) {
  if (compChoice == playerChoice) {
    updateText("Its a Tie!");
    checkWinCondition();
    return "its a TIE!";
  } else if (
    (playerChoice == 1 && compChoice == 3) ||
    (playerChoice == 2 && compChoice == 1) ||
    (playerChoice == 3 && compChoice == 2)
  ) {
    updateText("You Win!");
    playerScore++;
    updateScore(playerScore, compScore);
    checkWinCondition();
    return "you WIN!";
  } else {
    updateText("You Lose!");
    compScore++;
    updateScore(playerScore, compScore);
    checkWinCondition();
    return "you LOSE!";
  }
}

function checkWinCondition() {
  if (playerScore == 5) {
    updateText("Game Ended, you have won this round!");
    resetBtn.textContent = "Play Again?";
    disableFunction();
  } else if (compScore == 5) {
    updateText("Game Ended, you have lost this round!");
    resetBtn.textContent = "Play Again?";
    disableFunction();
  } else {
    resetBtn.textContent = "Reset Game?";
  }
}

function disableFunction() {
  isFunctionEnabled = false;
}

rock.addEventListener("click", function () {
  vn1.currentTime = 0;
  vn1.play();
});

paper.addEventListener("click", function () {
  vn2.currentTime = 0;
  vn2.play();
});

scissor.addEventListener("click", function () {
  vn3.currentTime = 0;
  vn3.play();
});

function getCompChoice() {
  let value = Math.floor(Math.random() * 3) + 1;
  if (value == 1) {
    rockE.classList.add("playing");
    return value;
  } else if (value == 2) {
    paperE.classList.add("playing");
    return value;
  } else {
    scissorE.classList.add("playing");
    return value;
  }
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  console.log(this);
  this.classList.remove("playing");
}

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
