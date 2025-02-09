// import constant  with the two variables
// import gameLogic with with the two functions
// import storage with with the two functions
import { loadState } from "./storage";
// Game Stats
const state = {
  wins: 0,
  losees: 0,
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

// update game state

// add the current match to history

// Limit hisory to max_history item

// render the UI

// update scores

// update history

// update result text

// color code the result

// reset the game

//  start the game
