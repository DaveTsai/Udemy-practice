let maxNum = parseInt(prompt("Please enter Maximum number"));

while (!maxNum) {
    maxNum = parseInt(prompt("Please enter a valid number"));
};

const targetNum = Math.floor(Math.random() * maxNum) + 1;

let guessNum = parseInt(prompt("Please guess a number"));
let tries = 1

while (guessNum !== targetNum) {
    tries++;
    if (guessNum > targetNum) {
        guessNum = parseInt(prompt("Lower"));
    }
    else {
        guessNum = parseInt(prompt("higher"))
    }
}
alert(`You win, you have tried for ${tries} times.`)
