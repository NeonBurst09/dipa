const numberToGuess = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
  const userGuess = parseInt(document.getElementById("guess").value);
  if (userGuess === numberToGuess) {
    document.getElementById("feedback").innerText = "Correct! 🎉";
  } else {
    document.getElementById("feedback").innerText = "Try again!";
  }
}
