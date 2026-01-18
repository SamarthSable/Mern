const message = document.querySelector("#msg");
const rollButton = document.querySelector("#roll");
const tryButton = document.querySelector("#try");
const userInput = document.querySelector("#userInput");

function checkRandom() {
  let randomNum = Math.floor(Math.random() * (6 - 1) + 1);
  const userValue = userInput.value;
  if (userValue == randomNum) {
    message.textContent = "You Win";
  } else {
    message.textContent = `try Again ! The number was ${randomNum}`;
  }
}

rollButton.addEventListener("click", checkRandom);
tryButton.addEventListener("click", checkRandom);
