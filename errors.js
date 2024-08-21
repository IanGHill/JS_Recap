try{
    throw new ReferenceError();
} catch(err){
    console.log('There was an error');
    // console.log(err);
}
console.log("My program does not stop, as the error was caught and handled");

//Task 1
console.log("Task 1")

function addTwoNums(a,b){
    try{if (typeof(a) != 'number'){
            throw new ReferenceError()
        } else if (typeof(b) != 'number'){
            throw new ReferenceError()
        } else {
            console.log(a + b)
        }
    } catch(err){
        console.log("Error!", err)
    }
}
addTwoNums(5, '5')
console.log("It still works!")

//Task 2
console.log("Task 2")

function letterFinder(word, match) {
    condition1 = typeof(word) == 'string' && word.length >=2
    condition2 = typeof(match) == 'string' && match.length == 1
    if(condition1 == true && condition2 == true){
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //if the current character at position i in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        console.log("Please pass correct arguments to function")
    }
}
letterFinder(2,3)
letterFinder('cat','c')