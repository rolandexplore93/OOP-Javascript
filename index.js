// Using Factory to create an {}
function circle(radius){
    return {
        radius,
        height: 20,
        draw: function(){
            console.log('Drawing a cricle')
        }
    }
}
const makeACircle = circle(2).draw
// console.log(makeACircle.constructor)

// Using constructors to create an {}
function BuildCircle(radius){
    // console.log(this)
    this.radius = radius,
    this.height = 20,
    this.draw = function(){
        console.log('Drawing a cricle')
    }
}
const BuildCircleOne = new BuildCircle(2)
// console.log(BuildCircle.constructor)

// Using a function constructor to create the exact {} created by constructor or factory
const FuctionCircle = new Function('radius', `
    this.radius = radius,
    this.height = 20,
    this.draw = function(){
        console.log('Drawing a cricle')
    }
`)

// const fCircleOne = new FuctionCircle(5)
// BuildCircle.call({}, 1)   //call() method
BuildCircle.apply({}, [1])   //apply() method

// Primitive vs Reference type
// primitive are number, string, boolean, null and undefined
let no = 10;
function increase(no){
    no++
}
increase(no)
// console.log(no)

// reference are {}, [] and function
let obj = {value: 10};
function increase(obj) // obj will point to the obj defined above
{
    obj.value++
}
increase(obj) //obj is passed when its reference
// console.log(obj)

// ABSRTRACTION & CLOSURE & LOCAL SCOPE
// Abstraction means hiding unnecessary or complex codes from the public
function DrawCircle(radius){
    this.radius = radius;
    let height = 50;
    let optimumLocation = function(factor){console.log("drawing curvature")};
    this.draw = function(){
        console.log("drawing a circle");
        //closure
        optimumLocation(50)
    }
    // console.log(this.draw())
}
const dupDrawCircle = new DrawCircle(5)
// console.log(dupDrawCircle.draw())


// Create a stop watch
function Stopwatch(){
    let startTime, stopTime, running, duration = 0;
 
    this.start = function() {
        if (running)
        throw new Error('Stopwatch has already started');
        
        running = true;
       startTime = new Date();
    };
    // console.log(start())
 
    this.stop = function() {
       if (!running)
       throw new Error('Stopwatch is not started')
       running = false;
       stopTime = new Date()
 
       const seconds = (stopTime.getTime() - startTime.getTime()) / 1000;
       duration += seconds
    };
 
    this.reset = function() {
       startTime = 0;
       stopTime = 0;
       running = false;
       duration = 0;
    };
 
    Object.defineProperty(this, 'duration', {
       get: function(){
          return duration
       }
    })
}
const stopwatch = new Stopwatch();
// stopwatch.start()

// PROPERTY ATTRIBUTE
let person = {name: "Roland"} //school: "HOMAJ"}
// console.log(person)
// 1a. When you iterate over the object, you won't see any properties or methods
for (let key in person){
    // console.log(key)
}
// console.log(Object.keys(person))
// Iteration reason: In javascript, properties have attributes that are attached to them.
// Sometimes, these attributes prevent a property from being iterated or enumerated
// let objectBase = Object.getPrototypeOf(person)
// // Let's get the descriptor of objectBase variable
// let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString')
// console.log(descriptor)


Object.defineProperty(person, 'name', {
    // getter, setter previously used
    writable: true,
    enumerable: false,
    configurable: false
})

person.name = 'John'
console.log(person)
console.log(Object.keys(person))
delete person.name
console.log(person)