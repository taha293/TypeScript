function Storecarinfo(manufacture:string,modelName:string,...extra:{[key:string]:any}[]){
    let carInfo = {
        Manufacture:manufacture,
        ModelName:modelName,
        ...Object.assign({},...extra)
    }
    return carInfo
}
let car_info = Storecarinfo("Honda","City",{Color:"White"},{feature:["Cruise Control","Auto Pilot"]});
console.log(car_info);
