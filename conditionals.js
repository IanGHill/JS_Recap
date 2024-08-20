//If Else

var result = 80;

if (result > 70) {
    console.log('Distinction')
} else if (result > 60) {
    console.log('Merit')
} else if (result > 40) {
    console.log('Pass')
} else {
    console.log('Fail')
}

//switch statement

switch(true){
    case result > 70:
        console.log('Distinction');
        break;
    case result > 60:
        console.log('Merit');
        break;
    case result > 40:
        console.log('Pass');
        break;
    default:
        console.log('Fail');
        break;
}

//switch
var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
    break;
  default:
    day = "Unknown Day";
}
console.log('Today is', day)