
// business


// backend logic
// turns input into string, asks program to check for 1, but not -1, if 1 is found, statement is true, if not, false
function checkForOnes(input){
    var result = input.toString().indexOf(1);
    if (result === -1) {
        return false;
    } else {
        return true;
    }
}

// turns input into string, program checks for "0", if "0" is found, statement is true, if not false
function checkForZeroes(input){
    var result = input.toString().indexOf(0);
    if (result === -1) {
        return false;
    } else {
        return true;
    }
}

// checks if input is divisible by "3" and returns true if so, if not returns false
function divisibleByThree(input){
    var result = input % 3;
    if (result === 0) {
        return true;
    } else {
        return false;
    }
}


//   if (input % 3 === 0){
//     output = "I'm sorry Dave. I'm afraid I can't do that.";
//     console.log(output);
//   }
//   else if (input % 3 != 0 && input === 1 || input.charLength(i) === 1)
// } for (var i = 0, i != %)
