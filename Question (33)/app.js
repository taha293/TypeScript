"use strict";
let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < myNums.length; i++) {
    if (myNums[i] == 1) {
        console.log(`${myNums[i]}st`);
    }
    else if (myNums[i] == 2) {
        console.log(`${myNums[i]}nd`);
    }
    else if (myNums[i] == 3) {
        console.log(`${myNums[i]}rd`);
    }
    else if (myNums[i] <= 9) {
        console.log(`${myNums[i]}th`);
    }
    else {
        console.log("If this statement prints it means assignment has some problem");
    }
}
