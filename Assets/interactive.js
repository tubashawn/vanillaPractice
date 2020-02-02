const QUESTION = document.getElementById("questionInput");
const HEADER = document.getElementById("header");
const BUTTON = document.getElementById("button");
const USERNUMBER = document.getElementById("userNumber");
const USERNUMBERS = document.getElementById("userNumbers");
const SORT = document.getElementById("sortButton");
const ORDEREDNUMBERS = document.getElementById("orderedNumbers");
const SECTION5INFO = document.getElementById("section5info");

let userArray = [];


BUTTON.addEventListener("click", numberLogger(userArray));
SECTION5INFO.addEventListener("click", sorter(userArray));

function logger() {
    console.log("Random number = " + randomizer());
}


function numberLogger(array) {
    let numberValue = document.getElementById("questionInput").value;
    
    USERNUMBER.innerHTML = `You entered ${numberValue}`;
    console.log(userArray);
    USERNUMBERS.innerHTML = userArray;
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

function sorter(array) {
    console.log(`Inside the sorter function using ${array}`);
    for (let i = 0 ; i < array.length; i++) {
        if (array[i] > array[i+1]) {
            let temp = array[i];
            array[i] = array[i+1];
            array[i+1] = temp;
        }
    }
}
