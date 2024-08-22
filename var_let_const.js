//Var is not recommended since ES6, use let and const instead

// Var can be used before being declared without error
console.log(user); //undefined
var user;

//Var can also be redeclared

var user = 'Mary';
var user = 'John';
console.log(user); //John

//Let cannot be accessed before we declare it:
// console.log(user1); // Error!
// let user1;

// We CAN declare an unassigned Let
let user2;
console.log(user2); // undefined

//We can't re-declare a let:
// let user2 = 'Anna'; Error!

//But we can reassign it:
user2 = 'Louise';
console.log(user2)

//const MUST be initialised & can't be accessed before initialisation
// console.log(user3); Error!
// const user3;

const user4 = 'Andrew';

//We can't reassign a const:
// user4 = 'Malcolm' Error!
