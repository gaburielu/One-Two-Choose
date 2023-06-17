function getPlayerChoice() {
  let validOption = true;
  while (validOption) {
    let foo = prompt("Type between Rock, Paper or Scissor");
    let fooCleaned = foo.trim().toUpperCase();
    if (fooCleaned == "ROCK") {
      alert("You choose Rock");
      return 1;
      validOption = false;
    } else if (fooCleaned == "PAPER") {
      alert("You choose Papyr");
      return 2;
      validOption = false;
    } else if (fooCleaned == "SCISSOR") {
      alert("YOu choose Scissor");
      return 3;
      validOption = false;
    } else {
      alert("Type a valid option");
    }
  }
}

function getCompChoice() {
  let foo = Math.floor(Math.random() * 3) + 1;
  if (foo == 1) {
    alert("Computer choose Rock");
    return foo;
  } else if (foo == 2) {
    alert("computer chooses Papyr");
    return foo;
  } else {
    alert("computer choose scissor.");
    return foo;
  }
}

function gamePlay() {
  let playerChoice = getPlayerChoice();
  let compChoice = getCompChoice();
  if (compChoice == playerChoice) {
    return "its a TIE!";
  } else if (
    (playerChoice == 1 && compChoice == 3) ||
    (playerChoice == 2 && compChoice == 1) ||
    (playerChoice == 3 && compChoice == 2)
  ) {
    return "you WIN!";
  } else {
    return "you LOSE!";
  }
}

function play() {
  let playerScore = 0;
  let compScore = 0;
  while (playerScore < 3 && compScore < 3) {
    let score = gamePlay();
    console.log(score);
    if (score == "you WIN!") {
      playerScore++;
      console.log(`Player Score: ${playerScore}`);
      console.log(`Computer Score: ${compScore}`);
    } else if (score == "you LOSE!") {
      compScore++;
      console.log(`Player Score: ${playerScore}`);
      console.log(`Computer Score: ${compScore}`);
    } else {
      console.log(`Player Score: ${playerScore}`);
      console.log(`Computer Score: ${compScore}`);
    }
  }
  if (playerScore == 3) {
    alert("YOU WIN THIS ROUND");
  } else {
    alert("YOU LOSE THIS ROUND");
  }
}
play();
