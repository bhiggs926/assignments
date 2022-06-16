
console.log('prints 0 through 9:')
// prints to the console 0 through 9
for (var i = 0; i <= 9; i ++){
    console.log(i)
};
console.log("")
console.log('prints 9 through 0:')
// prints to the console 9 through 0
for(var i = 9; i > -1; i--){
    console.log(i)
}

console.log("")
console.log("prints fruit")
// prints fruits to the console
const fruit = ["banana", "orange", "apple", "kiwi:"]
for (var i = 0; i < fruit.length; i ++){
    console.log(fruit[i])
}

console.log("")
console.log("push numbers 0 through 9 to array:")
// push numbers 0 through 9 to array
var pushNumbers= []
for (var i = 0; i <=9; i++){
    pushNumbers.push(i)
    console.log(pushNumbers[i])
}

console.log("")
console.log("pushes and prints even numbers 1 through 100:")
// pushes and prints even numbers 1 through 100
var hundred = []
for (var i = 0; i < 101; i ++){
    hundred.push(i)
 if (hundred[i] % 2 === 0){
     console.log(hundred[i])
 }
}

// every other fruit 
var fruitModified = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
for (var i = 0; i < fruitModified.length; i+= 2){
    console.log(fruitModified[i])
}