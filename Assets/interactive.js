const QUESTION = document.getElementById("questionInput");
const HEADER = document.getElementById("header");
const BUTTON = document.getElementById("button");
const USERNUMBER = document.getElementById("userNumber");
const USERNUMBERS = document.getElementById("userNumbers");
const ORDEREDNUMBERS = document.getElementById("orderedNumbers");
const BUBBLESORTBUTTON = document.getElementById("bubbleSortButton");
const SELECTIONSORTBUTTON = document.getElementById("selectionSortButton");
const SHELLSORTBUTTON = document.getElementById("shellSortButton");
const MERGESORTBUTTON = document.getElementById("mergeSortButton");
const QUICKSORTBUTTON = document.getElementById("quickSortButton");
const SECTION5INFO = document.getElementById("section5info");


let userArray = [];
let startTime, endTime;

const ACTIONS = {
    logger : function() {
        console.log("Random number = " + randomizer());
    },

    startTimer : function() {
        startTime = new Date();
    },

    endTimer : function() {
        endTime = new Date();
    },

    elapsedTime : function() {
        return endTime - startTime;
    },

    resetTimer : function() {
        startTime = undefined;
        endTime = undefined;
    },

    randomizer : function() {
        return Math.floor((Math.random() * 100) + 1);
    }
};

const SORTS = {
    swap : function(array, x, y) {
        [array[x], array[y]] = [array[y], array[x]];
    },

    bubbleSorter : function(array) {
        if(array.length <= 1) return array;
        ACTIONS.startTimer();
            for (let i = 0 ; i < array.length; i++) {
                for (let j = 0; j < array.length; j++) {
                    if (array[j] > array[j+1]) {
                        this.swap(array, i, j);
                }
            }
        }
        ACTIONS.endTimer();
        console.log(`${ACTIONS.elapsedTime()} milliseconds passed`);
        ACTIONS.resetTimer();
        return array;
    },

    selectionSorter : function(array) {
        if(array.length <= 1) return array;

        ACTIONS.startTimer();
        
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

        ACTIONS.endTimer();
        console.log(`${ACTIONS.elapsedTime()} milliseconds passed`);
        ACTIONS.resetTimer();
        return array;
    },

    shellSorter : function(array) {
        if(array.length <= 1) return array;

        ACTIONS.startTimer();
        
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

        ACTIONS.endTimer();
        console.log(`${ACTIONS.elapsedTime()} milliseconds passed`);
        ACTIONS.resetTimer();
        return array;
    },

    arrayLength : 0,

    mergeSorter : function(array) {
        if(array.length <= 1) return array;

        if(startTime === undefined) {
            ACTIONS.startTimer();
            this.arrayLength = array.length;
        }

        const middle = array.length / 2 ;
        const left = array.slice(0, middle);
        const right = array.slice(middle, array.length);
        return this.merge(this.mergeSorter(left), this.mergeSorter(right));
    },
    
    merge : function(left, right) {
        let result = [];

        while(left.length || right.length) {
            if(left.length && right.length) {
                if(left[0] < right[0]) {
                    result.push(left.shift());
                } else {
                    result.push(right.shift());
                }
            } else if(left.length) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }

        if(result.length == this.arrayLength) {
            ACTIONS.endTimer();
            console.log(`${ACTIONS.elapsedTime()} milliseconds passed`);
            ACTIONS.resetTimer();
            this.arrayLength = 0;
        }

        return result;
    },

    count : 0,
    quickSortArray : [],

    quickSorter : function(array, start, end) {
        this.count++;
        if(start < end) {
            let pivot = this.partition(array, start, end);
            this.quickSorter(array, start, pivot - 1);
            this.quickSorter(array, pivot + 1, end);
        } 
    },
    
    partition : function(array, start, end) { 
        let pivot = end;
        let i = start - 1;
        let j = start;

        while (j < pivot) {
            if (array[j] > array[pivot]) {
                j++;
            } else {
                i++;
                this.swap(array, j, i);
                j++;
            }
        }

        this.swap(array, i + 1, pivot);

        this.quickSortArray = array;
        return i++;
    }

};

BUTTON.onclick =  function() {
    numberLogger(userArray);
};

BUBBLESORTBUTTON.onclick =  function(){
    ORDEREDNUMBERS.innerHTML = SORTS.bubbleSorter(userArray);
};

SELECTIONSORTBUTTON.onclick =  function(){
    ORDEREDNUMBERS.innerHTML = SORTS.selectionSorter(userArray);
};

SHELLSORTBUTTON.onclick =  function(){
    ORDEREDNUMBERS.innerHTML = SORTS.shellSorter(userArray);
};

MERGESORTBUTTON.onclick = function(){
    ORDEREDNUMBERS.innerHTML = SORTS.mergeSorter(userArray);
};

QUICKSORTBUTTON.onclick = function(){
    ACTIONS.startTimer();
    ORDEREDNUMBERS.innerHTML = SORTS.quickSorter(userArray, 0, userArray.length - 1);
    ACTIONS.endTimer();
    console.log(`${ACTIONS.elapsedTime()} milliseconds passed`);
    ACTIONS.resetTimer();
    console.log(userArray);
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



