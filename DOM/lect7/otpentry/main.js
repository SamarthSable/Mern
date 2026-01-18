const code = document.querySelectorAll(".key");
code[0].focus();

code.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    if (e.target.value && index < code.length - 1) {
      code[index + 1].focus();
    }
  });
  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (input.value === "" && index > 0) {
        code[index - 1].focus();
        code[index - 1].value = "";
      }
    }
  });
});
