const timerId = setInterval(() => {
  console.log("This message is displayed from interval");
});

const timeout = setTimeout(() => {
  console.log("This message is displayed after 10 seconds");
  clearInterval(timerId);
}, 10000);

document.getElementById("stopButton").addEventListener("click", () => {
  clearInterval(timerId);
  clearTimeout(timeout);
  console.log("Timers stopped by user.");
});
