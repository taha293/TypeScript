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
// We are inviting more friends because we have bigger dinner table now
guests.unshift("Aman");
guests.splice(guests.length / 2, 0, "Namir");
guests.push("Yahya");
// New dinner table won't arrive in time  
console.log("Sorry, we can invite only two people for dinner.");
// console.log(guests);
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry ".concat(removedGuest, ", You are not invited."));
}
;
guests.map(function (list) { return console.log("Hello ".concat(list, ", You are still invited for a dinner.")); });
