
function startGame() {
    
    attemptsLeft = 5;
    randomNumber = Math.floor(Math.random() * 10) + 1;
    playGame();
}

function playGame() {

    guess = parseInt(prompt("Угадайте случайное число от 1 до 10:"));

    if (isNaN(guess)) {
        alert("Пожалуйста, введите число");
        playGame();
        return;
    }
    
    else if(isNaN(parseInt(guess)) || guess < 1 || guess > 10) {
        alert("Пожалуйста, введите число от 1 до 10")
        playGame();
        return;
    }

    attemptsLeft--;

    if (guess === randomNumber) {
        alert("Поздравляю, вы угадали это число");
        playAgain();
    }

    else if (guess < randomNumber) {
        alert("Загаданное число больше, чем вы ввели");
        checkAttempts();
    }
    
    else {
        alert("Загаданное число меньше, чем вы ввели");
        checkAttempts();
    }
}

function checkAttempts() {

    if (attemptsLeft === 0) {
        alert(`Извините, у вас закончились попытки. Правильное число: ${randomNumber}.`);
        playAgain()
    }
    
    else {
        playGame();
    }
}

function playAgain() {

    playAgain = confirm("Хотите ли вы сыграть ещё?");

    if (playAgain) {
        startGame();
    }
    
    else {
        alert("Спасибо за игру! Возвращайтесь ещё!");
    }
}
