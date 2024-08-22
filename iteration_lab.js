// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy(arr) {
    for (let item of arr) {
        console.log(item);
    }
}
logDairy(dairy);

// Task 2
const animal = {

    canJump: true

};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan(bird) {
    for (let prop of Object.keys(bird)){
        console.log(prop + ": " + bird[prop]);
    }
}
birdCan(bird);

// Task 3
function animalCan(animal) {
    for (let prop in animal) {
        console.log(prop + ": " + animal[prop]);
    }
}
animalCan(bird);