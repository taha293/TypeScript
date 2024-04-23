var guests = ["Ali", "Ahsan", "Maaz"];
// guests.map((list)=> console.log(`Hello ${list}, You are invited for a dinner.`));
// Not attending 
var notAttending = guests[1];
// console.log(`${notAttending} can't attend Dinner.`);
// New Guest 
var newGuest = "Misbah";
// guests[1] = newGuest;
// Invitation 
guests[guests.indexOf(notAttending)] = newGuest;
// We are inviting more friends
console.log("Welcome, we found a bigger dinner table.");
guests.unshift("Aman");
guests.splice(guests.length / 2, 0, "Namir");
guests.push("Yahya");
guests.map(function (list) { return console.log("Hello ".concat(list, ", You are invited for a dinner.")); });
