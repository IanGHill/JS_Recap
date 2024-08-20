console.log('Hello world');

//Can add formatting if outputting in the browser console e.g.:
// console.log("%cHello, World", "color: blue; font-size 40px");

console.log("Hello", "World");

var person = 'John';

console.log("Hello", person);

var greeting = "Hello"

console.log(greeting, person);

console.log('hello'.toUpperCase())

console.log(typeof greeting)

greeting = 5
console.log(typeof greeting)

//string interpolation
greeting = 'Goodbye'
console.log(`${greeting}, ${person}`)

//string addition
console.log(greeting + ' ' + person)

var myVar;
console.log(typeof myVar) // undefined