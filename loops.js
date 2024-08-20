//For loop
for (var i = 0; i < 5; i++) {
    console.log(i)
}

//While loop
var i = 0;

while (i < 5) {
    console.log(i);
    i+=1
}

var i = 10;

while (i > 0){
    console.log(i)
    i-=1
}
console.log('Happy New Year!')

var i = 2018

while (i < 2025){
    console.log(i)
    i++
}

//Nested Loops
for (var year = 2023; year < 2025; year++){
    console.log(year);
    for (var month = 6; month < 9; month++){
        console.log("-----", month)
    }
}
//better
for (var i = 2023; i < 2025; i++){
    console.log(i);
    for (var j = 6; j < 9; j++){
        console.log("-----", j)
    }
}

//Times tables:
for (var i = 1; i < 11; i++){
    for (var j =1; j < 11; j++){
        console.log(j, 'times', i, 'equals', i*j)
    }
}

//Using variable length to control the looping
var letters = 'ABCDE';
for (var i = 0; i < letters.length; i++){
    console.log(letters[i])
}