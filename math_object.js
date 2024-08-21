console.log(Math.PI) // 3.141592653589793
console.log(Math.E) // 2.718281828459045
console.log(Math.LN2) // 0.6931471805599453

console.log(Math.ceil(3.3)) // 4 rounds up to closest integer
console.log(Math.floor(3.9)) // 3 rounds down to closest integer
console.log(Math.round(3.5)) // 4 rounds .5 up to closest integer, otherwise down
console.log(Math.trunc(3.9)) // 3 trims decimal

console.log(Math.pow(2,3)) //  8
console.log(Math.sqrt(16)) //  4
console.log(Math.cbrt(8)) //  2 
console.log(Math.abs(-10)) //  10
console.log(Math.min(6,7,8,9)) //  6
console.log(Math.max(6,7,8,9)) //  9

// Generate a decimal between 0 and .99
Math.random()
//Save to var
var decimal = Math.random()
console.log(decimal)
console.log(decimal * 10)

//Combine with ceil to generate int between 0 & 10
var decimal = Math.random() * 10
var rounded = Math.ceil(decimal)
console.log(rounded)