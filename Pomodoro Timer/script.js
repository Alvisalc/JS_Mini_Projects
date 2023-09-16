// Get references by id
let focusButton = document.getElementById("focus");
let buttons = document.querySelectorAll(".btn");
let shortBreakButton = document.getElementById("shortbreak");
let longBreakButton = document.getElementById("longbreak");
let startBtn = document.getElementById("btn-start");
let reset = document.getElementById("btn-reset");
let pause = document.getElementById("btn-pause");
let time = document.getElementById("time");

let set; // Timer interval variable
let active = "focus"; // Current timer mode ("focus", "short", or "long")
let count = 59; // Initial count for seconds
let paused = true; // Flag to track if the timer is paused
let minCount = 24; // Initial count for minutes

// Set initial time display
time.textContent = `${minCount + 1}:00`;

// Function to append a leading zero to a value if it's less than 10
const appendZero = (value) => {
  value = value < 10 ? `0${value}` : value;
  return value;
};

// Reset button
reset.addEventListener(
  "click",
  (resetTime = () => {
    // Pause the timer
    pauseTimer();
    // Reset the timer values based on the active mode
    switch (active) {
      case "long":
        minCount = 14;
        break;
      case "short":
        minCount = 4;
        break;
      default:
        minCount = 24;
        break;
    }
    count = 59;
    // Update the time display
    time.textContent = `${minCount + 1}:00`;
  })
);

// Function to remove focus style from all buttons
const removeFocus = () => {
    buttons.forEach((btn) => {
        btn.classList.remove("btn-focus");
    });
};

// Focus button
focusButton.addEventListener("click", () => {
    // Set active mode to "focus"
    active = "focus";
    // Remove focus style from all buttons
    removeFocus();
    // Add focus style to the "Focus" button
    focusButton.classList.add("btn-focus");
    pauseTimer();
    // Set initial timer values for "focus" mode
    minCount = 24;
    count = 59;
    // Update the time display
    time.textContent = `${minCount + 1}:00`;
});

// Short break button
shortBreakButton.addEventListener("click", () => {
    // Active mode to short
    active = "short";
    // Remove style from all buttons
    removeFocus();
    // Add focus style to the "Short Break" button
    shortBreakButton.classList.add("btn-focus");
    pauseTimer();
    // Set initial timer values for "short" mode
    minCount = 4;
    count = 59;
    // Update the time display
    time.textContent = `${appendZero(minCount + 1)}:00`;
});

// Long break button
longBreakButton.addEventListener("click", () => {
    // Active mode to long break
    active = "long";
    // Remove style from all buttons
    removeFocus();
    // Add focus style to the "Long Break" button
    longBreakButton.classList.add("btn-focus");
    pauseTimer();
    // Set initial timer values for "long" mode
    minCount = 14;
    count = 59;
    // Update the time display
    time.textContent = `${minCount + 1}:00`;
});

// Pause button
pause.addEventListener(
    "click",
    (pauseTimer = () => {
        paused = true;
        // Clear the timer interval
        clearInterval(set);
        // Show the "Start" button, hide "Pause" and "Reset" buttons
        startBtn.classList.remove("hide");
        pause.classList.remove("show");
        reset.classList.remove("show");
    })
);

// Start button
startBtn.addEventListener("click", () => {
    // Show the "Pause" and "Reset" buttons, hide "Start" button
    reset.classList.add("show");
    pause.classList.add("show");
    startBtn.classList.add("hide");
    startBtn.classList.remove("show");
    if (paused) {
        // Set the paused flag to false
        paused = false;
        // Update the time display with initial values
        time.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
        // Start the timer interval
        set = setInterval(() => {
        count--;
        time.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
        if (count == 0) {
            if (minCount != 0) {
            minCount--;
            count = 60;
            } else {
            clearInterval(set);
            }
        }
        }, 1000);
    }
});