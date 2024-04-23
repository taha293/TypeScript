let current_users:string[] = ["Taha", "Ali", "Dawood", "Misbah", "Jawad"];
let new_users:string[] = ["hafi", "Adnan", "taha", "haroon", "Ali"];
for (let newUser of new_users){
    let lowerCase:string = newUser.toLowerCase()
    // current_users.map(currentUser => currentUser.toLowerCase()).includes(lowerCase)
    if(current_users.some(currentUser => currentUser.toLowerCase().includes(lowerCase))){
        console.log(`Username "${newUser}" is already used. Please try a new one.`);
    }
    else{
        console.log(`Username "${newUser}" is available.`);
        
    }
}