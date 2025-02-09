import { EMOJIS, MAX_HISTORY } from "./constants.js";
import { determineResult, getComputerChoice } from "./gameLogic.js";
import { loadState, saveState } from "./storage.js";

// Sound effects
const sounds = {
  win: new Audio("sounds/win.mp3"),
  lose: new Audio("sounds/lose.mp3"),
  tie: new Audio("sounds/tie.mp3"),
};

// Theme toggle
document.querySelector(".theme-btn").addEventListener("click", toggleTheme);

function toggleTheme() {
  document.body.classList.toggle("light-theme");
  const themeBtn = document.querySelector(".theme-btn");
  if (document.body.classList.contains("light-theme")) {
    themeBtn.textContent = "🌙 Dark Mode";
  } else {
    themeBtn.textContent = "☀️ Light Mode";
  }
}

// Game state
const state = {
  wins: 0,
  losses: 0,
  ties: 0,
  history: [],
};

// Initialize the game
function init() {
  loadState(state); // Load saved state from localStorage
  render(); // Render the initial UI
  addEventListeners(); // Add event listeners to buttons
}

// Add event listeners to buttons
function addEventListeners() {
  document.querySelectorAll(".choices button").forEach((button) => {
    button.addEventListener("click", handleChoice);
  });
  document.querySelector(".reset-btn").addEventListener("click", resetGame);
}

// Handle user choice
function handleChoice(event) {
  const userChoice = event.target.dataset.choice; // Get user's choice
  const computerChoice = getComputerChoice(); // Get computer's choice
  const result = determineResult(userChoice, computerChoice); // Determine result

  updateState(result, userChoice, computerChoice); // Update game state
  render(); // Render the updated UI
  saveState(state); // Save state to localStorage
}

// Update game state
function updateState(result, userChoice, computerChoice) {
  if (result === "win") state.wins++;
  else if (result === "lose") state.losses++;
  else state.ties++;

  // Add the current match to history
  state.history.unshift(
    `${EMOJIS[userChoice]} vs ${EMOJIS[computerChoice]} → ${result}`
  );

  // Limit history to MAX_HISTORY items
  if (state.history.length > MAX_HISTORY) state.history.pop();
}

// Render the UI
function render() {
  // Update scores
  document.getElementById("wins").textContent = state.wins;
  document.getElementById("losses").textContent = state.losses;
  document.getElementById("ties").textContent = state.ties;

  // Update history
  document.getElementById("history").innerHTML = state.history.join("<br>");

  // Update result text
  const resultElement = document.getElementById("result");
  if (state.history.length > 0) {
    const lastResult = state.history[0].split("→")[1].trim();
    resultElement.textContent = lastResult;

    // Color code the result and play sound
    if (lastResult.includes("Win")) {
      resultElement.style.color = "green";
      resultElement.classList.add("win-animation");
      sounds.win.play();
    } else if (lastResult.includes("Lose")) {
      resultElement.style.color = "red";
      resultElement.classList.remove("win-animation", "tie-animation");
      sounds.lose.play();
    } else {
      resultElement.style.color = "yellow";
      resultElement.classList.add("tie-animation");
      sounds.tie.play();
    }

    // Remove animation classes after the animation ends
    resultElement.addEventListener("animationend", () => {
      resultElement.classList.remove("win-animation", "tie-animation");
    });
  } else {
    resultElement.textContent = "";
  }
}

// Reset the game
function resetGame() {
  state.wins = 0;
  state.losses = 0;
  state.ties = 0;
  state.history = [];
  render(); // Render the updated UI
  saveState(state); // Save state to localStorage
}

// Start the game
init();
