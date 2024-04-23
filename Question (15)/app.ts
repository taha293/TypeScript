let guests:string[] = ["Ali", "Ahsan", "Maaz"];
guests.map((list)=> console.log(`Hello ${list}, You are invited for a dinner.`));

// Not attending 
let notAttending:string = guests[1];
console.log(`${notAttending} can't attend Dinner.`);

// New Guest 
let newGuest:string = "Misbah";
// guests[1] = newGuest;

// Invitation 
guests[guests.indexOf(notAttending)] = newGuest;
guests.map((list)=> console.log(`Hello ${list}, You are invited for a dinner.`));