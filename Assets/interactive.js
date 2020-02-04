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

const ACTIONS = {
    logger : function() {
        console.log("Random number = " + randomizer());
    },
    start : function() {
        startTime = new Date();
    },
    end : function() {
        endTime = new Date();
    }, 
    elapsed : function() {
        return endTime - startTime;
    },
    randomizer : function() {
        return Math.floor(Math.random() * 100);
    }
}

BUTTON.onclick =  function() {
    numberLogger(userArray);
}

SORTBUTTON.onclick =  function(){
    ORDEREDNUMBERS.innerHTML = bubbleSorter(userArray);
};

function randomNumbers(number) {
    let numbers = [];
    for (let i = 0; i < number; i++) {
        let temp = ACTIONS.randomizer();
        numbers.push(temp);
    }
    userArray = numbers;
}

function bubbleSorter(array) {
    ACTIONS.start();
    for (let i = 0 ; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    ACTIONS.end();
    console.log(`${ACTIONS.elapsed()} milliseconds passed`);
    return array;
}

function numberLogger() {
    let numberValue = document.getElementById("questionInput").value;
    randomNumbers(numberValue);
    
    USERNUMBER.innerHTML = `You entered ${numberValue}`;
    USERNUMBERS.innerHTML = userArray;
    
}



