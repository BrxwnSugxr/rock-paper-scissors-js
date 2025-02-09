import { CHOICES, WIN_CONDITIONS } from "./constants.js";

// Get the computer's choice (randomly select R, P, or S)
export function getComputerChoice() {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

// Determine the result of the game (win, lose, or tie)
export function determineResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "tie";
  } else if (WIN_CONDITIONS[userChoice] === computerChoice) {
    return "win";
  } else {
    return "lose";
  }
}
