/**
 * CHOICES: An array of valid choices (R, P, S).
 * EMOJIS: A mapping of choices to their emoji representations.
 * MAX_HISTORY: The maximum number of matches to display in the history.
 * WIN_CONDITIONS: Defines what beats what (e.g., Rock beats Scissors).
 */

// Game choices
export const CHOICES = ["R", "P", "S"];

// Emoji for each Choice
export const EMOJI = {
  R: "✊ Rock",
  P: "✋ Paper",
  S: "✌ Scissors",
};

// max number of matches to show in history
export const MAX_HISTORY = 5;

// win condition (what beats what)
export const WIN_CONDITIONS = {
  R: "S", //Rock beats Scissors
  P: "R", //Paper beats Rock
  S: "P", // Scissors beat Paper
};
