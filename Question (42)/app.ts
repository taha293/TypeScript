let magicians:string[]=["Harry Potter","David CopperField", "Harry Hodini", "Dynamo"];
function make_great(magicianArray:string[]){
    for (let i=0; i < magicianArray.length; i++){
        magicians[i] = `The great ${magicianArray[i]}`
    }
}
function show_magicians(magician:string[]){
    for (let i of magician){
        console.log(i);
        
    }
}
make_great(magicians);
show_magicians(magicians);