function houseBlueprint(address, description, owner, size){
    this._building_speed = 0.5;
    this.address = address;
    this.date = new Date();
    this.description = description;
    this.owner = owner;
    this.size = size;
}

houseBlueprint.prototype.getDaysToBuild = function() {
    return this.size / this._building_speed;
};
//
function HouseBuilder(address, description, owner, size, roomCount){
    houseBlueprint.call(this,address, description, owner, size); //вызов конструкторa суперкласса
    this.roomCount = roomCount;
}
// Object.assign(houseBlueprint.prototype,fan);
HouseBuilder.prototype = Object.create(houseBlueprint.prototype);

export{HouseBuilder};

// const house = new HouseBuilder('88 Crescent Avenue',
//     'Spacious town house with wood flooring, 2-car garage, and a back patio.',
//     'J. Smith',
//     110,
//     5);




// house.wordReplace("address", "fff");
// console.log(house.description);
// house.wordDelete("fff");
// console.log(house.description);
// house.wordInsertAfter("ghh", "baby");
// console.log(house.description);
// house.wordEncrypt();
// console.log(house.description);
//console.log(house.prototype);
// // '88 Crescent Avenue'
// console.log(house.description);
// // 'Spacious town house with wood flooring, 2-car garage, and a back patio.'
// console.log(house.size);
// // 110
// console.log(house.date.toDateString());
// // [the current date], for example:'Tue Aug 11 2020'
// console.log(house.owner);
// // J. Smith
// console.log(house._building_speed);
// // 0.5
// console.log(house.getDaysToBuild());
// // 220
// console.log(house.roomCount);
// // 5