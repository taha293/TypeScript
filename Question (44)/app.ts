function makeSand(items:string[]) {
    console.log("\nYour Order is getting ready.\nYour Order list :");
    items.forEach((order) => {
        console.log(`- ${order}`);
    })
    console.log("Enjoy your Sandwich !\n");
}
makeSand(["Egg","Seafood","Grilled"])
makeSand(["Cheese","Ham",])
makeSand(["Nutella","Roast Beef","Harn","Grilled Cheese"]);