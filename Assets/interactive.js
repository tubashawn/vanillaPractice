const QUESTION = document.getElementById("questionInput");
const HEADER = document.getElementById("header");
const BUTTON = document.getElementById("button");
const USERNUMBER = document.getElementById("userNumber");
const USERNUMBERS = document.getElementById("userNumbers");
const SORT = document.getElementById("sortButton");
const ORDEREDNUMBERS = document.getElementById("orderedNumbers");
const SECTION5INFO = document.getElementById("section5info");

let userArray = [];

SECTION5INFO.addEventListener("click", function(){
    logger(userArray);
});

SORT.addEventListener("click", function(){
    sorter(userArray);
});

BUTTON.addEventListener("click", function() {
    numberLogger(userArray);
});



function logger() {
    console.log("Random number = " + randomizer());
}


function randomizer() {
    return Math.floor(Math.random() * 100);
}

function numberLogger() {
    let numberValue = document.getElementById("questionInput").value;
    randomNumbers(numberValue);
    
    USERNUMBER.innerHTML = `You entered ${numberValue}`;
    USERNUMBERS.innerHTML = userArray;
    
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
    for (let i = 0 ; i < array.length; i++) {
        console.log(`${array[i]} and ${array[i+1]}`);
        for (let j = 0; j < array.length; j++) {

            if (array[j] > array[j+1]) {
                let temp = array[j];
                console.log(temp);
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
        
    }
    console.log(array);
}
