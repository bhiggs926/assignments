var string = "Hello"

// write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters
function upperCaseAndLowerCase() {
console.log(string.toUpperCase(), string.toLowerCase())
}
upperCaseAndLowerCase()


// // Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.
// //     Hint: You'll need to use Math.floor().
function findMiddleIndex(){
    console.log(Math.floor(string.length / 2))
}
findMiddleIndex()


// write a function that uses slice() and the other functions you've written to return the first half of the given string.
function returnFirstHalf(){
    console.log(string.slice(0, Math.floor(string.length / 2)))
}
returnFirstHalf()


// Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.
