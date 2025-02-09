// import constant and two variables
import { CHOICES, WIN_CONDITIONS } from "./constants.js";
// export computer function
export function getComputerChoice() {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}
// export determine choice function
export function determineResult(userChoice, getComputerChoice) {
  if (userChoice === getComputerChoice) {
    return "tie";
  } else if (WIN_CONDITIONS[userChoice] === getComputerChoice) {
    return "win";
  } else {
    return "lose";
  }
}
