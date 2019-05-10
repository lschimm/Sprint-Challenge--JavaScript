// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker (att1) {
    // this.length = att1.length;
    // this.width = att1.width;
    // this.height = att1.height;
//   }

//   CuboidMaker.prototype.volume = function() {
//     return `${this.length} * ${this.width} * ${this.height}`
//   }

//   CuboidMaker.prototype.surfaceArea = function() {
//     return ` 2 * ${this.length} * ${this.width} + ${this.length} * ${this.height} + ${this.width} * ${this.height}`
//   }

class CuboidMaker {
    constructor(att1){
        this.length = att1.length
        this.width = att1.width
        this.height = att1.height
    }
    volume() {
        // return `${this.length} * ${this.width} * ${this.height}`
        return (this.length * this.width * this.height);
    }
    surfaceArea() {
        // return ` 2 * ${this.length} * ${this.width} + ${this.length} * ${this.height} + ${this.width} * ${this.height}`
        return (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}


const cuboid = new CuboidMaker ({
    length: 4,
    height: 5,
    width: 5 
  })

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.
// Find out the formulas for volume and surface area for cubes and create those methods
// using the dimension properties from CuboidMaker.
// Test your work by logging out your volume and surface area.


class CubeMaker extends CuboidMaker {
    constructor(att2){
        super(att2)
        this.height = att2.height
        this.width = att2.width
        this.height = att2.height
    }
}

//==== CubeMaker object

const cubo = new CubeMaker({
    length: 25,
    height: 25,
    width: 25 
})



console.log(cubo.volume())
console.log(cuboid.surfaceArea())