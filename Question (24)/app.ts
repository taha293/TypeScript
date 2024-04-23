// With strings 
let car1:string = "tesla";
let car2:string = "corolla";
console.log('Is car1 == car2? I predict False.');
console.log(car1 == car2);
console.log('Is car1 != car2? I predict True.');
console.log(car1 != car2);

// Using lowercase 
let newCar:string = "meHraN";
console.log('Is newCar == mehran? I predict False.');
console.log(newCar == "mehran");
console.log('Is newCar.toLowerCase() == mehran? I predict True.');
console.log(newCar.toLowerCase() == "mehran");

// Numeric 
let num1:number = 7
let num2:number = 4
console.log('Is num1 === num2? I predict False.');
console.log(num1 === num2);
console.log('Is num1 !== num2? I predict True.');
console.log(num1 !== num2);

console.log('Is num1 > num2? I predict True.');
console.log(num1 > num2);
console.log('Is num1 < num2? I predict False.');
console.log(num1 < num2);

console.log('Is num1 >= 7 I predict True.');
console.log(num1 >= 7);
console.log('Is num1 <= num2? I predict False.');
console.log(num1 <= num2);

// &&(and) and ||(Or)
console.log('Is num1 === num2 || num1 > num2? I predict True.');
console.log(num1 === num2 || num1 > num2);
console.log('Is num1 === num2 && num1 > num2? I predict False.');
console.log(num1 === num2 && num1 > num2);

// Array test
let friendNames: string[] = ['Ali', 'Haseeb', 'Aman'];
console.log("Is Ali in friendNames Array? I predict True.");
console.log(friendNames.indexOf("Ali") !== -1);
console.log("Is Afnan in friendNames Array? I predict False.");
console.log(friendNames.indexOf("Afnan") !== -1);