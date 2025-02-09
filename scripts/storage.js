import { determineResult, getComputerChoice } from "./scripts/gameLogic.js";

// Test getComputerChoice
console.log("Computer's choice:", getComputerChoice());

// Test determineResult
console.log("Result (R vs S):", determineResult("R", "S")); // Should log "win"
console.log("Result (P vs R):", determineResult("P", "R")); // Should log "win"
console.log("Result (S vs P):", determineResult("S", "P")); // Should log "win"
console.log("Result (R vs R):", determineResult("R", "R")); // Should log "tie"
console.log("Result (R vs P):", determineResult("R", "P")); // Should log "lose"
