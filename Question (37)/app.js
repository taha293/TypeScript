"use strict";
function makeShirt(size = "Large", message = "I love TypeScript") {
    console.log(`Making a ${size} shirt and "${message}" printed on it.`);
}
makeShirt();
makeShirt("Medium");
makeShirt("Small", "Hello");
