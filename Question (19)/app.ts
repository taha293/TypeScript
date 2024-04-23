// Taking Exercise 17

let guests:string[] = ["Ali", "Ahsan", "Maaz"];
// guests.map((list)=> console.log(`Hello ${list}, You are invited for a dinner.`));

// Not attending 
let notAttending:string = guests[1];
// console.log(`${notAttending} can't attend Dinner.`);

// New Guest 
let newGuest:string = "Misbah";
// guests[1] = newGuest;

// Invitation 
guests[guests.indexOf(notAttending)] = newGuest;

// We are inviting more friends because we have bigger dinner table now
guests.unshift("Aman");
guests.splice(guests.length/2,0,"Namir");
guests.push("Yahya");

// New dinner table won't arrive in time  
console.log("Sorry, we can invite only two people for dinner.");
// console.log(guests);
while(guests.length>2){
    let removedGuest = guests.pop()
    // console.log(`Sorry ${removedGuest}, You are not invited.`);
};
// guests.map((list)=> console.log(`Hello ${list}, You are still invited for a dinner.`));

// Number of Peoples invites
console.log(`${guests.length} Peoples are invited for a dinner.`);