let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");
let resetBtn = document.querySelector(".reset-btn");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.round(Math.random() * 2);

  return options[randIdx];
};
const draw = (userChoice, compChoice) => {
  msg.innerText = `Match Draw your ${userChoice} cancels  computer's ${compChoice}`;
  msg.style.backgroundColor = "orange";
};
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    msg.innerText = `You win! your ${userChoice} beats computer's ${compChoice}`;
    msg.style.backgroundColor = "green";
    userScorePara.innerText = `${userScore}`;
  } else {
    msg.innerText = `You lost! computer's ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    compScore++;
    compScorePara.innerText = `${compScore}`;
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    draw(userChoice, compChoice);
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock" ? true : false;
    } else if (userChoice === "scissors") {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

resetBtn.addEventListener("click", () => {
  userScorePara.innerText = "0";
  compScorePara.innerText = "0";
  msg.innerText = "Play Your Move";
  msg.style.backgroundColor = " rgb(16, 16, 51)";
});
