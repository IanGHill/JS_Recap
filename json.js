//convert JSON string to regular JS object:
const jsonStr = '{"greeting":"hello"}'
const aPlainObj = JSON.parse(jsonStr)
aPlainObj.greeting = 'hi'
console.log(aPlainObj)
//{ greeting: 'hi' }

//Can go the other way too:

const data = {
    firstName: "John",
    lastName: "Doe",
    greeting: "Yo!"
}
console.log(JSON.stringify(data))
//{"firstName":"John","lastName":"Doe","greeting":"Yo!"}