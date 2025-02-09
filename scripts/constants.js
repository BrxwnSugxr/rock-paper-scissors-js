// Game choices
export const CHOICES = ["R", "P", "S"]; // Rock, Paper, Scissors

// Emojis for each choice
export const EMOJIS = {
  R: "✊ Rock",
  P: "✋ Paper",
  S: "✌ Scissors",
};

// Maximum number of matches to show in history
export const MAX_HISTORY = 5;

// Win conditions (what beats what)
export const WIN_CONDITIONS = {
  R: "S", // Rock beats Scissors
  P: "R", // Paper beats Rock
  S: "P", // Scissors beat Paper
};
