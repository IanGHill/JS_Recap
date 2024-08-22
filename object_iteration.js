// Objects cannot be iterated over directly , but we can make use 
// of methods such as Object.values() and Object.entries as follows:

const car = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.values(car)); // [ 400, 'magenta' ] an array of the values
console.log(Object.entries(car)); // [ ['speed', 400], ['color', 'magenta'] ] an array of arrays

// Or use a FOR OF loop as a FOR IN loop is unreliable as 
// for-in loop will iterate over the object and its properties from the prototype
// The for-of loop will iterate only over the object's own properties , not its prototype
// For of only works when using the Object.keys() method to return an array to loop over.
// The for-of loop will not iterate over the object and its prototype properties.

for (prop of Object.keys(car)){
    console.log(prop + ": " + car[prop]);
}
// speed: 400
// color: magenta