"use strict";
function Storecarinfo(manufacture, modelName, ...extra) {
    let carInfo = Object.assign({ Manufacture: manufacture, ModelName: modelName }, Object.assign({}, ...extra));
    return carInfo;
}
let car_info = Storecarinfo("Honda", "City", { Color: "White" }, { feature: ["Cruise Control", "Auto Pilot"] });
console.log(car_info);
