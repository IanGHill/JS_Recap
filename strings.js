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