


//Step 1 - use the rest operator to help this function return an array of animals, no matter how many animals are passed to it:

function collectAnimals(...animals) {
  console.log(animals)
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");



// Step 2 - Write a function that returns a food object with the array names as properties. 
// You'll use an ES6 shorthand syntax that becomes useful when a variable name is

// const fruit = ['apple', 'pear']
// const sweets = ['cake', 'pie']
// const vegetables = ['carrot']

// const combineFruit = (fruit, sweets, vegetables) => ({fruit, sweets, vegetables})

// console.log(combineFruit())


function combineFruit(fruit, sweets, vegetables){
    return {fruit:['apple', 'pear'],
            sweets:['cake', 'pie'],
            vegetables:['carrot']
    }
}
combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"])
             
console.log(combineFruit())



// Step 3 - Use destructuring to use the property names as variables. Destructure the object in the parameter:

const parseSentence = ({location, duration}) => console.log(`We're going to have a good time in ${location} for ${duration}`)

 parseSentence({
    location: "Burly Idaho",
    duration: "2 weeks"
});




// Step 4 - Use array destructuring to make this code ES6:

function returnFirst(items){
  const [ firstItem ] = items /*change this line to be es6*/
  return items
}


// Step 5 - Write destructuring code to assign variables that will help us return the expected string. 
// Also, change the string to be using Template literals:
const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const [magnets, snowboarding, philanthropy, janitorwork, eating] = favoriteActivities
    return `My top three favorite activities are, ${philanthropy}, ${snowboarding}, and ${eating}`
}

console.log(returnFavorites())


// Step 6 - Use the Rest and Spread Operator to help take any number of arrays, and return one array. 
// You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.
 const combineAnimals = (...animals) => [...realAnimals, ...magicalAnimals, ...mysteriousAnimals]

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals())




// Step 7 - Try to make the following function more ES6y:



// Step 8 - Make the following function more ES6y. Use at least both the rest and spread operators:
const unshift = (array) => [ array] 
const arrays = [a,b,c,d,e] 

console.log(unshift())


// Step 9 - Write some destructuring code to help this function out. Use the ES6 shorthand that helps make the syntax look less redundant to simplify it:
// function populatePeople(names){
//   return names.map(function(name){
//       name = name.split(" ");
//       // your code
//       return {
//           firstName: firstName,
//           lastName: lastName
//       }
//   })
// }

// populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])

// => [
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]