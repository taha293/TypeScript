"use strict";
let users = ["Ali", "Misbah", "Nameer", "Admin"];
for (let user of users) {
    if (user === "Admin") {
        console.log("Hello Admin, Would you like to see a status report?");
    }
    else {
        console.log(`Hello ${user}, Thank you for logging in again.`);
    }
}
