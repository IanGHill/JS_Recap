// Arrays have useful built in array methods, for example

// 1. the forEach() method
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);
// 0. kiwi
// 1. mango
// 2. apple
// 3. pear

// 2. The filter() method:
const nums = [0,10,20,30,40,50];
let filtered_nums = nums.filter( function(num) {
    return num > 20;
})
console.log(filtered_nums)
// [ 30, 40, 50 ]

// 3. The map() method:
let mapped_nums = [0,10,20,30,40,50].map( function(num) {
    return num / 10
})
console.log(mapped_nums)
// [0,1,2,3,4,5]

// Maps
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);
// Map(3) {
//     1 => 'The Champion',
//     2 => 'The Runner-up',
//     3 => 'The third place'
//   }
//To get a specific value from the map, use the get method:
console.log(bestBoxers.get(1)); // 'The Champion'


//Sets are collections of unique values
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);
// {'apple', 'pear', 'plum'}

// Some more advanced data structures that have not been covered include:
// Queues
// Linked lists (singly-linked and doubly-linked)
// Trees
// Graphs