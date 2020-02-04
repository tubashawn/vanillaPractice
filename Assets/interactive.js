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

const SORTS = {
    swap : function(array, x, y) {
        var temp = array[x];
        array[x] = array[y];
        array[y] = temp;
    },
    bubbleSorter : function(array) {
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
    },
    selectionSorter : function(array) {
        let length = array.length;
        for (let i = 0; i < length - 1; i++) {
            var min = i;
            for (let j = i + 1; j < length; j++) {
                if (array[j] < array[min]) {
                    min = j;
                } else {}
            }
            if (min !== i) {
                this.swap(array, i, min);
            } else {}
        }
        return array;
    }
}

BUTTON.onclick =  function() {
    numberLogger(userArray);
}

SORTBUTTON.onclick =  function(){
    ORDEREDNUMBERS.innerHTML = SORTS.selectionSorter(userArray);
};

function randomNumbers(number) {
    let numbers = [];
    for (let i = 0; i < number; i++) {
        let temp = ACTIONS.randomizer();
        numbers.push(temp);
    }
    userArray = numbers;
}

// function bubbleSorter(array) {
//     ACTIONS.start();
//     for (let i = 0 ; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if (array[j] > array[j+1]) {
//                 let temp = array[j];
//                 array[j] = array[j+1];
//                 array[j+1] = temp;
//             }
//         }
//     }
//     ACTIONS.end();
//     console.log(`${ACTIONS.elapsed()} milliseconds passed`);
//     return array;
// }

// function selectionSorter(array) {
//     let length = array.length;

//     for (let i = 0; i < length - 1; i++) {
//         var min = i;
//         for (let j = i + 1; j < length; j++) {
//             if (array[j] < array[min]) {
//                 min = j;
//             } else {}
//         }
//         if (min !== i) {
//             swap(array, i, min);
//         } else {}
//     }
//     return array;
// }

// function swap(array, x, y) {
//     var temp = array[x];
//     array[x] = array[y];
//     array[y] = temp;
// }

function numberLogger() {
    let numberValue = document.getElementById("questionInput").value;
    randomNumbers(numberValue);
    
    USERNUMBER.innerHTML = `You entered ${numberValue}`;
    USERNUMBERS.innerHTML = userArray;
    
}



