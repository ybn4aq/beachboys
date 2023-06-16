let score; // global variable
let timeRemaining; // global variable
export default

function startGame() {
  timer = setInterval(updateTimer, 10000);
  document.addEventListener("keydown", handleKeyDown);
  score = 0;
}

function handleKeyDown(event) {
  if (event.code === "Space") {
    if (timeRemaining > 0) {
      score++;
    }
  }
}

function updateTimer() {
  timeRemaining--;
}

function resetGame() {
    timeRemaining = 10000;
}