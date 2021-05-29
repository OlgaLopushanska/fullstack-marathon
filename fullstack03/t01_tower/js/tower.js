class Building {
    constructor(floors, material, address) {
        this.floors = floors;
        this.material = material;
        this.address = address;
    }

    toString() {
        return [
            `Floors: ${this.floors}`,
            `Material: ${this.material}`,
            `Address: ${this.address}`,
        ].join('\n');
    }
}
class Tower extends Building {
    hasElevator;
    arcCapacity;
    height;
    constructor(floors, material, address, hasElevator, arcCapacity, height) {
        super(floors, material, address);
        this.hasElevator = hasElevator;
      //  this.hasElevator = hasElevator;
        this.arcCapacity = arcCapacity;
        this.height = height;
    }
    getFloorHeight(){
        return this.height / this.floors;
    };
    toString() {
        return super.toString() + "\nElevator: " + (this.hasElevator ? "+" : "-") + "\nArc reactor capacity: " + this.arcCapacity +
            "\nHeight: " + this.height + "\nFloor height: " + this.getFloorHeight();
    }

};

/*
Task name: Tower
*/
 const starkTower = new Tower(93, 'Different', 'Manhattan, NY');
 starkTower.hasElevator= true;
 starkTower.arcCapacity= 70;
 starkTower.height= 1130;
 console.log(starkTower.toString());
/*
Floors: 93
Material: Different
Address: Manhattan, NY
Elevator: +
Arc reactor capacity: 70
Height: 1130
Floor height: 12.150537634408602
 */
