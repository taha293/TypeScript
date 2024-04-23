let car:string = "toyota";
let carModel:number = 2018;
let sunRoof:boolean = false;

// Test1 
console.log("Is car == 'toyota'? I predict True.");
console.log(car == 'toyota');

// Test2
console.log("Is car != 'toyota'? I predict False.");
console.log(car != 'toyota');

// Test3
console.log("Is car == 'suzuki'? I predict False.");
console.log(car == 'suzuki');

// Test4
console.log("Is car != 'suzuki'? I predict True.");
console.log(car != 'suzuki');

// Test5
console.log("Is car == 'toyota' and model is '2018'? I predict True.");
console.log(car == 'toyota' && carModel == 2018);

// Test6
console.log("Is car == 'toyota' and model is '2014'? I predict False.");
console.log(car == 'toyota' && carModel == 4);

// Test7
console.log("Is car == 'tesla' and model is '2018'? I predict False.");
console.log(car == 'tesla' && carModel == 2018);

// Test8
console.log("Is car == 'toyota' or has sunroof true? I predict True.");
console.log(car == 'toyota' || sunRoof );

// Test9
console.log("Is car == 'tesla' or has sunroof true? I predict False.");
console.log(car == 'tesla' || sunRoof );

// Test9
console.log("Is car == 'toyota' and has sunroof true? I predict False.");
console.log(car == 'tesla' && sunRoof );
