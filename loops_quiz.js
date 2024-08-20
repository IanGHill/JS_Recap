/*
Note: The expected console log of the entire code should be as follows.
Gold medal
Silver medal
Bronze medal
4
5
6
7
8
9
10
*/
for (var i = 1; i < 11; i++){
    if (i == 1){
        console.log('Gold Medal')
    } else if (i == 2){
    console.log('Silver Medal')
    } else if (i == 3){
        console.log('Bronze Medal')
    } else {
        console.log(i)
    }

}
//Switch statement
for (var i = 1; i < 11; i++){
    switch (i){
        case 1:
            console.log('Gold Medal')
            break;
        case 2:
            console.log('Silver Medal')
            break;
        case 3:
            console.log('Bronze Medal')
            break;
        default:
            console.log(i)
    }

}