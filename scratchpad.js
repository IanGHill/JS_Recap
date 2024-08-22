const meal = ["soup", "steak", "ice cream"]
let [starter] = meal;
console.log(starter);

function count(...basket) {
    console.log(basket.length)
}

count(10, 9, 8, 7, 6);