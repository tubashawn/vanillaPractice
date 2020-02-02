const question = document.getElementById("questionInput");
const header = document.getElementById("header");
const button = document.getElementById("button");
const userNumber = document.getElementById("userNumber");
const USERNUMBERS = document.getElementById("userNumbers");


button.addEventListener("click", numberLogger);

function logger() {
    console.log("Random number = " + randomizer());
}


function numberLogger() {
    let numberValue = document.getElementById("questionInput").value;
    console.log("You entered " + numberValue);
    userNumber.innerHTML = `You entered ${numberValue}`;
    
    USERNUMBERS.innerHTML = randomNumbers(numberValue);
}

function randomizer() {
    return Math.floor(Math.random() * 100);
}

function randomNumbers(number) {
    let numbers = [];
    for (let i = 0; i < number; i++) {
        let temp = randomizer();
        numbers.push(temp);
    }
    return numbers;
}
