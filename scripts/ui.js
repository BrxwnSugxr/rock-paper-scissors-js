/**state: An object to store the game's current state (wins, losses, ties, history).
 * init(): Initializes the game by loading the state, rendering the UI, and adding event listeners.
 * addEventListeners(): Adds click event listeners to the buttons.
 * handleChoice(): Handles the user's choice, determines the result, and updates the state.
 * updateState(): Updates the game state (wins, losses, ties, history).
 * render(): Updates the UI to reflect the current state.
 * resetGame(): Resets the game state and UI.
 */

// import constant  with the two variables
// import gameLogic with with the two functions
// import storage with with the two functions
import { EMOJI, MAX_HISTORY } from "./constants";
import { getComputerChoice } from "./gameLogic";
import { loadState } from "./storage";
// Game Stats
const state = {
  wins: 0,
  losses: 0,
  ties: 0,
  history: [],
};
// Initialize the game
function init() {
  loadState(state);
  render();
  addEventListeners();
}

// Add event Listeners to buttons
function addEventListeners() {
  document.querySelectorAll(".choices button").forEach((button) => {
    button.addEventListener("click", handleChoice);
  });
  document.querySelector(".reset-btn").addEventListener("click", resetGame);
}
//  handle user choice
function handleChoice(event) {
  const userChoice = event.target.dataset.choice;
  const computerChoice = getComputerChoice();
  const result = determineResult(userChoice, computerChoice);

  updateState(result, userChoice, computerChoice);
  render();
  saveState(state);
}
// update game state
function updateState(result, userChoice, computerChoice) {
  if (result === "win") state.win++;
  else if (result === "lose") state.losses++;
  else state.ties++;

  // add the current match to history
  state.history.unshift(
    `${EMOJI[userChoice]} vs ${EMOJI[computerChoice]} -> ${result}`
  );
}
// Limit history to max_history item
if (state.history.length > MAX_HISTORY) state.history.pop();

// render the UI
function render() {
  // update scores
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

      // Color code the result
      if (lastResult.includes("Win")) {
        resultElement.style.color = "green";
        resultElement.classList.add("win-animation");
      } else if (lastResult.includes("Lose")) {
        resultElement.style.color = "red";
        resultElement.classList.remove("win-animation", "tie-animation");
      } else {
        resultElement.style.color = "yellow";
        resultElement.classList.add("tie-animation");
      }

      // Remove animation classes after the animation ends
      resultElement.addEventListener("animationend", () => {
        resultElement.classList.remove("win-animation", "tie-animation");
      });
    } else {
      resultElement.textContent = "";
    }
  }
}

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

// reset the game
function resetGame() {
  state.wins = 0;
  state.losses = 0;
  state.ties = 0;
  state.history = [];
  render();
  saveState(state);
}
//  start the game
init();
