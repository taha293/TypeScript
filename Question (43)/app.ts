let magicians:string[]=["Harry Potter","David CopperField", "Harry Hodini", "Dynamo"];
function copyArray(array:string[]){
    return [...array]
}

function make_great(magicianArray:string[]){
    for (let i=0; i < magicianArray.length; i++){
        magicianArray[i] = `The great ${magicianArray[i]}`
    }

}
function show_magicians(magician:string[]){
    for (let i of magician){
        console.log(i);
    }
}
let copyMagicians = copyArray(magicians)
make_great(copyMagicians);
console.log("This is my Original Array");
show_magicians(magicians);
console.log("This is my Modified Array");
show_magicians(copyMagicians);