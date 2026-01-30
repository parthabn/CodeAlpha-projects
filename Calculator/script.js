const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

// Button Click Support
buttons.forEach(button => {
  button.addEventListener("click", () => {
    handleInput(button.textContent, button.classList);
  });
});

// Keyboard Support
document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (!isNaN(key) || key === ".") {
    handleInput(key);
  }
  else if (key === "+" || key === "-" || key === "*" || key === "/") {
    handleInput(key);
  }
  else if (key === "Enter") {
    e.preventDefault();
    calculate();
  }
  else if (key === "Backspace") {
    deleteLast();
  }
  else if (key === "Escape") {
    clearDisplay();
  }
});

// Core Logic
function handleInput(value, classes = []) {
  if (classes.contains && classes.contains("clear")) {
    clearDisplay();
  }
  else if (classes.contains && classes.contains("delete")) {
    deleteLast();
  }
  else if (classes.contains && classes.contains("equal")) {
    calculate();
  }
  else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const expression = display.value
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/−/g, "-");

    display.value = eval(expression);
  } catch {
    display.value = "Error";
  }
}
