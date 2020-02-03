const QUESTION = document.getElementById("questionInput");
const HEADER = document.getElementById("header");
const BUTTON = document.getElementById("button");
const USERNUMBER = document.getElementById("userNumber");
const USERNUMBERS = document.getElementById("userNumbers");
const SORTBUTTON = document.getElementById("sortButton");
const ORDEREDNUMBERS = document.getElementById("orderedNumbers");
const SECTION5INFO = document.getElementById("section5info");

let userArray = [];
let startTime, endTime;




BUTTON.addEventListener("click", function() {
    numberLogger(userArray);
});

SORTBUTTON.addEventListener("click", function(){
    bubbleSorter(userArray);
});


function logger() {
    console.log("Random number = " + randomizer());
}

function start() {
    startTime = new Date();
}

function end() {
    endTime = new Date();
}

function elapsed() {
    return endTime - startTime;
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
    userArray = numbers;
    console.log(userArray);
}

function bubbleSorter(array) {
    start();
    for (let i = 0 ; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    end();
    console.log(`${elapsed()} milliseconds passed`);
}

function numberLogger() {
    let numberValue = document.getElementById("questionInput").value;
    randomNumbers(numberValue);
    
    USERNUMBER.innerHTML = `You entered ${numberValue}`;
    USERNUMBERS.innerHTML = userArray;
    
}



