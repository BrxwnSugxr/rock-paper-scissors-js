/**
 * getComputerChoice(): Randomly selects Rock (R), Paper (P), or Scissors (S) for the computer.
 * determineResult(): Compares the user's choice with the computer's choice and returns:
 * "tie" if both choices are the same.
 * "win" if the user's choice beats the computer's choice.
 * "lose" if the computer's choice beats the user's choice.
 */

// import constant and two variables
import { CHOICES, WIN_CONDITIONS } from "./constants.js";

// Get the computer's choice (randomly select R, P, or S)
export function getComputerChoice() {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

// Determine the result of the game (win, lose, or tie)
export function determineResult(userChoice, getComputerChoice) {
  if (userChoice === getComputerChoice) {
    return "tie";
  } else if (WIN_CONDITIONS[userChoice] === getComputerChoice) {
    return "win";
  } else {
    return "lose";
  }
}
