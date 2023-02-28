const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiseDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll(".action");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiseDisplay.src = `./store/${userChoice}.png`;
    computerChoice = generateComputerChoice();
    computerChoiceDisplay.src = `./store/${computerChoice}.png`;
    resultDisplay.src = `./store/${getResult()}.png`;
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length);
  return possibleChoices[randomNumber].id;
}

// a1, a2, a3, b1, b2, b3
// a1, b2 || a1, b3
// a2, b1 || a2, b3
// a3, b1 || a3, b2

function getResult() {
  if (computerChoice === userChoice) {
    result = "draw";
  } else if (computerChoice === "rock" && userChoice === "paper") {
    result = "win";
  } else if (computerChoice === "paper" && userChoice === "rock") {
    result = "lose";
  } else if (computerChoice === "scissors" && userChoice === "rock") {
    result = "win";
  } else if (computerChoice === "rock" && userChoice === "scissors") {
    result = "lose";
  } else if (computerChoice === "paper" && userChoice === "scissors") {
    result = "win";
  } else if (computerChoice === "scissors" && userChoice === "paper") {
    result = "lose";
  }
  return result;
}
