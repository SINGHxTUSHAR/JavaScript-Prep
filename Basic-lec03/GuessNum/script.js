const gameNum = Math.floor(Math.random() * 100) + 1;
let guessed = false;
let attempts = 0;

document.getElementById('guessForm').addEventListener('submit', (e) => {
    e.preventDefault();
    checkGuess();
});

function checkGuess() {
    const userGuess = Number(document.getElementById('guess').value);
    const result = document.getElementById('result');

    if (guessed) return;

    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        console.error("Invalid input. Please enter a number between 1 and 100.");
        result.textContent = "Invalid input. Please enter a number between 1 and 100.";
        return;
    }

    attempts++;
    console.log(`Attempt ${attempts}: User guessed ${userGuess}, Game number is ${gameNum}`);
    if (userGuess === gameNum) {
        result.textContent = "Congratulations! You guessed the number!";
        guessed = true;
        document.getElementById('guess').disabled = true;
        document.getElementById('submitBtn').disabled = true;
    } else if (userGuess < gameNum) {
        result.textContent = "Too low! Try again.";
    } else {
        result.textContent = "Too high! Try again.";
    }
}