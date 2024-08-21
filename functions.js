// Task 1
function printSomething(something){
    console.log(something);  
    return something + ' else'; 
}

somethingElse = printSomething("Something")
console.log(somethingElse)

// Task 2
var colours = ["Red", "Green", "Blue", "Yellow"]
console.log(colours[1])

function listArrayItems(arr){
    for (var i = 0; i< arr.length; i++){
        console.log(i, arr[i])
    }
}
listArrayItems(colours)

function changeCase(arr){
    for(var item of arr ){
         console.log(item.toUpperCase())
    }
    return arr;
}
changeCase(colours)

// Task 3
function letterFinder(word, match){
    for (var i = 0; i < word.length; i++){
        if (word[i] == match) {
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}
letterFinder('test', 't')

// There are 3 ways to define a function in JS:
// 1. Named Function declarations (can be hoisted or used, before htey are declared)
// function functionName () {}
// 2. Anonymous functions
// var functionName = function () {}
// 3. Arrow functions
// var functionName = () => {}
// Arrow functions can implicitly return an expression by 
// leaving out the function body {} and the return keyword. As long as the => points to a single expression.