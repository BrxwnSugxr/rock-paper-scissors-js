// Load state from localStorage
export function loadState(state) {
  const savedState = JSON.parse(localStorage.getItem("rpsState"));
  if (savedState) {
    state.wins = savedState.wins || 0;
    state.losses = savedState.losses || 0;
    state.ties = savedState.ties || 0;
    state.history = savedState.history || [];
  }
}

// Save state to localStorage
export function saveState(state) {
  localStorage.setItem("rpsState", JSON.stringify(state));
}
