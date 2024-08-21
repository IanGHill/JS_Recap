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