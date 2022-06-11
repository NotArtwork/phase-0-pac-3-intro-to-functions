// Follow along with the examples here
function  sayHello() {
   console.log("Hello!"); 
}

sayHello();

function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
}

sayHelloToGuadalupe();

function sayHelloToLiz() {
    console.log("Hello, Liz!");
}

sayHelloToLiz();

function sayHelloToSamip() {
    console.log("Hello, Samip!");
}

sayHelloToSamip();

function doSomething(thing) {
    console.log(thing);
}

doSomething("Anything");

function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
}

sayHelloTo("Guadalupe");
sayHelloTo("Jane");
sayHelloTo("R2-D2");
sayHelloTo(1);


function say(greeting, firstName) {
    console.log("I was called!")
    return `${greeting}, ${firstName}!`;
}

console.log(say("Hey", "Julio"));

function add(x, y) {
    return x + y;
}

console.log(add(1, 2))
