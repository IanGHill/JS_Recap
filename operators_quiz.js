//Task 1
var score = 8;
console.log("Mid-level skills:", score > 0 && score < 10 ) // "Mid-level skills: true"

//Task 2
var timeRemaining = 0;
var energy = 10;
console.log("Game over:", timeRemaining == 0 || energy == 0) //"Game over: true"
timeRemaining = 4;
console.log("Game over:", timeRemaining == 0 || energy == 0) //"Game over: false"

//Task 3
var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
console.log(test1) // 0
var test2 = num2 % 2;
console.log(test2) // 1
var result1 = (test1 == 0)
var result2 = (test2 == 0)

console.log("Is", num1, "an even number?", result1) // true
console.log("Is", num2, "an even number?", result2) // false

//Task 4
console.log(5 + 10) // 15

//Task 5
var now = "Now in ";
var three = 3;
var d = "D!";
console.log(now + three + d); // "Now in 3D!"

//Task 6
var counter = 0
counter += 5
counter += 3
console.log(counter) //8