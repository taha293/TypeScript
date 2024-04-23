"use strict";
let current_users = ["Taha", "Ali", "Dawood", "Misbah", "Jawad"];
let new_users = ["hafi", "Adnan", "taha", "haroon", "Ali"];
for (let newUser of new_users) {
    let lowerCase = newUser.toLowerCase();
    // current_users.map(currentUser => currentUser.toLowerCase()).includes(lowerCase)
    if (current_users.some(currentUser => currentUser.toLowerCase().includes(lowerCase))) {
        console.log(`Username "${newUser}" is already used. Please try a new one.`);
    }
    else {
        console.log(`Username "${newUser}" is available.`);
    }
}
