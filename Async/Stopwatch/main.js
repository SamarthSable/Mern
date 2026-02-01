let timer;

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
let seconds = 0;
let minutes = 0;
let hours = 0;
const secondsElement = document.getElementById("seconds");
const minutesElement = document.getElementById("minutes");
const hoursElement = document.getElementById("hours");

// Overlapping problem - see the stopwatch example with setinterval and with settimeout. click and start button
//   multiple times. notice the unpredictable behaviour in case of setInterval

//   function startTimer() {
//     timer = setInterval(() => {
//       seconds++;
//       if (seconds > 59) {
//         minutes++;
//         seconds = 0;
//       }
//       if (minutes > 59) {
//         minutes = 0;
//         hours++;
//       }
//       updateDigits();
//     }, 1000);
//   }

function startTimer() {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    seconds++;
    if (seconds > 59) {
      minutes++;
      seconds = 0;
    }
    if (minutes > 59) {
      minutes = 0;
      hours++;
    }
    updateDigits();
    startTimer();
  }, 1000);
}

function updateDigits() {
  secondsElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
  minutesElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
  hoursElement.textContent = hours < 10 ? `0${hours}` : hours;
}

function stopTimer() {
  // clearInterval(timer);
  clearTimeout(timer);
}
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
