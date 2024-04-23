var guests = ["Ali", "Ahsan", "Maaz"];
guests.map(function (list) { return console.log("Hello ".concat(list, ", You are invited for a dinner.")); });
// Not attending 
var notAttending = guests[1];
console.log("".concat(notAttending, " can't attend Dinner."));
// New Guest 
var newGuest = "Misbah";
// guests[1] = newGuest;
// Invitation 
guests[guests.indexOf(notAttending)] = newGuest;
guests.map(function (list) { return console.log("Hello ".concat(list, ", You are invited for a dinner.")); });
