const QUESTION = document.getElementById("questionInput");
const HEADER = document.getElementById("header");
const BUTTON = document.getElementById("button");
const BUBBLESORTBUTTON = document.getElementById("bubbleSortButton");
const SELECTIONSORTBUTTON = document.getElementById("selectionSortButton");
const SHELLSORTBUTTON = document.getElementById("shellSortButton");
const USERNUMBER = document.getElementById("userNumber");
const USERNUMBERS = document.getElementById("userNumbers");
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
};

const SORTS = {
    swap : function(array, x, y) {
        [array[x], array[y]] = [array[y], array[x]];
    },

    bubbleSorter : function(array) {
        ACTIONS.start();
            for (let i = 0 ; i < array.length; i++) {
                for (let j = 0; j < array.length; j++) {
                    if (array[j] > array[j+1]) {
                        this.swap(array, i, j);
                }
            }
        }
        ACTIONS.end();
        console.log(`${ACTIONS.elapsed()} milliseconds passed`);
        return array;
    },

    selectionSorter : function(array) {
        ACTIONS.start();
        let length = array.length;
        for (let i = 0; i < length - 1; i++) {
            let min = i;
            for (let j = i + 1; j < length; j++) {
                if (array[j] < array[min]) {
                    min = j;
                }
            }
            if (min !== i) {
                this.swap(array, i, min);
            }
        }
        ACTIONS.end();
        console.log(`${ACTIONS.elapsed()} milliseconds passed`);
        return array;
    },

    shellSorter : function(array) {
        ACTIONS.start();
        let increment = array.length / 2;
        while (increment > 0) {
            for (let i = increment; i < array.length; i++) {
                let j = i;
                let temp = array[i];
                while (j >= increment && array[j - increment] > temp) {
                    array[j] = array[j - increment];
                    j = j - increment;
                }
                array[j] = temp;
            }
            if (increment == 2) {
                increment = 1;
            } else {
                increment = parseInt(increment*5 / 11);
            }
        }
        ACTIONS.end();
        console.log(`${ACTIONS.elapsed()} milliseconds passed`);
        return array;
    }
};

BUTTON.onclick =  function() {
    numberLogger(userArray);
}

BUBBLESORTBUTTON.onclick =  function(){
    ORDEREDNUMBERS.innerHTML = SORTS.bubbleSorter(userArray);
};

SELECTIONSORTBUTTON.onclick =  function(){
    ORDEREDNUMBERS.innerHTML = SORTS.selectionSorter(userArray);
};

SHELLSORTBUTTON.onclick =  function(){
    ORDEREDNUMBERS.innerHTML = SORTS.shellSorter(userArray);
};

function randomNumbers(number) {
    let numbers = [];
    for (let i = 0; i < number; i++) {
        let temp = ACTIONS.randomizer();
        numbers.push(temp);
    }
    userArray = numbers;
}

function numberLogger() {
    let numberValue = document.getElementById("questionInput").value;
    randomNumbers(numberValue);
    
    USERNUMBER.innerHTML = `You entered ${numberValue}`;
    USERNUMBERS.innerHTML = userArray;
    
}



