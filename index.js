const targetNumber = Math.floor(Math.random() * 101)
let winner = null

// for (let i = 0; i < targetNumber.length; i++) {
//     const resultElement = targetNumber[i];
    
// }
let result = [12, 67, 80, 40, 23, 9, 100, 2, 0, 30];


function guessNumber() {
    const playerName = document.getElementById("playerName").value
    const playerGuess = parseInt(document.getElementById("playerGuess").value)
    const resultElement = document.getElementById("result")

    

    if (!playerName || isNaN(playerGuess)) {
        resultElement.textContent = "Enter a valid name and number"
        return
    }

    if (winner) {
        resultElement.textContent = `${winner}`
        return
    }

    if (playerGuess === targetNumber) {
        winner = playerName;
        resultElement.textContent = `Congratulations! ${playerName}`
    } else {
        resultElement.textContent = `${playerName} Wrong guess ${playerGuess} and target number is ${targetNumber}`
    }
}