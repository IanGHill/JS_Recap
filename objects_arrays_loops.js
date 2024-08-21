var sports = ['football', 'tennis', 'rugby'];
var numberOfElements = sports.length;
console.log('number of elements:', numberOfElements);
console.log('first sport:', sports[0]);


//add items to end
sports.push('curling');
sports.push('cycling');
console.log('sports:', sports);

// remove item from end
var poppedItem = sports.pop();
console.log('sports:', sports);
console.log('popped:', poppedItem);

//add item to start
sports.unshift('Basketball')
console.log('sports:', sports);

//remove item fron start
var shiftedItem = sports.shift();
console.log('sports:', sports);
console.log('shifted:', shiftedItem);

//remove from middle using index
var removedSport = sports.splice(3, 1);
console.log('removed sports:', removedSport);
// -> removed sports: [ 'curling' ]
console.log('sports:', sports);

//loop over array
for (var currentSport of sports) {
    var uppercasedSport = currentSport.toUpperCase();
    console.log(uppercasedSport);
}

for (var i = 0; i < sports.length; i++) {
    var currentSport = sports[i];
    var uppercasedSport = currentSport.toUpperCase();
    console.log(uppercasedSport);
  
    // -> FOOTBALL
    // -> TENNIS
    // -> RUGBY
  }

  //Object literals and brackets notation

  var house = {};
  house['rooms'] = 4
  house.colour = 'Red'
  house.price = 12345;
  console.log(house)
  house['number of windows'] = 10 // allows special characters in the key
  console.log(house)


//using array of keys to evaluate an expression
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}
//100
//200
//red

//Task 1

var clothes = [];
clothes.push('Jumper')
clothes.push('Jeans')
clothes.push('Scarf')
clothes.push('Gloves')
clothes.push('Shirt')
clothes.pop()
clothes.push('Shorts')
console.log(clothes)

var favCar = {};
favCar.colour = 'Black';
favCar.convertible = true;
console.log(favCar);

//example of adding properties and methods to an object
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()

// { mileage: 98765, color: 'red' }
// {
//   mileage: 98765,
//   color: 'red',
//   turnTheKey: [Function (anonymous)],
//   lightsOn: [Function (anonymous)]
// }
// The engine is running
// The lights are on.