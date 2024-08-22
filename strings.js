var greet = "Hello, ";
var place = "World";

console.log(greet.length); // 7
console.log(greet.charAt(0)); // 'H'

//concat method joins strings
console.log("Wo".concat('rl').concat("d")) // 'World'

//indexOf returns the location of the first position that matches a character: 
console.log("ho-ho-ho".indexOf('h')); // 0
console.log("ho-ho-ho".indexOf('o')); // 1
console.log("ho-ho-ho".indexOf('-')); // 2

//lastIndexOf finds the last match
console.log("ho-ho-ho".lastIndexOf('h')); // 6
console.log("ho-ho-ho".lastIndexOf('o')); // 7
console.log("ho-ho-ho".lastIndexOf('-')); // 5

// split 
console.log("ho-ho-ho".split("-")); // ['ho', 'ho', 'ho']

//change case
console.log(greet.toUpperCase()); // "Hello, "
console.log(greet.toLowerCase()); // "hello, "

//String interpolation:
let greet1 = "Hello";
let place1 = "World";
console.log(`${greet1} ${place1} !`) //display both variables using template literals

//Multiline strings avilable from ES6 with template literals
let cool = 'cool'
let multiline = `
    This is
    a 
    multiline 
    string. 
    That 
    is 
    so
    ${cool}!
`;
console.log(multiline)