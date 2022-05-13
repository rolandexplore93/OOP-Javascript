// Circle constructor function
function Circle(radius){
    this.radius = radius;

}

const circleOne = new Circle(1)

// Circle.prototype is the object that will be used as the parent for object created by the Circle constructor
console.log(Circle.prototype)
console.log(Object.prototype)