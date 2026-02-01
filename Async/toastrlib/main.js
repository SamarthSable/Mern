const success = document.getElementById("success");
const info = document.getElementById("info");
const error = document.getElementById("error");
const warning = document.getElementById("warning");
const toast = document.getElementById("toastr");
let timeoutId;

function SHowMessage(message) {
  const msg = document.getElementById("msg");

  msg.textContent = message;
  toast.classList.add("show");

  clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

success.addEventListener("click", () => {
  toast.style.backgroundColor = "green";
  SHowMessage("This is message for Success");
});

info.addEventListener("click", () => {
  toast.style.backgroundColor = "blue";
  SHowMessage("This is message for Info");
});

error.addEventListener("click", () => {
  toast.style.backgroundColor = "red";
  SHowMessage("This is message for Error");
});

warning.addEventListener("click", () => {
  toast.style.backgroundColor = "orange";
  SHowMessage("This is message for Warning");
});
