var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


// remove last item of vegetable array
vegetables.pop('lettuce')
console.log(vegetables)

// remove the first item from the fruit array
fruit.shift()
console.log(fruit)

// find the index of "orange"
var orange = fruit.indexOf('orange')
console.log(orange)

// add that number to the end of the fruit array
fruit.push(orange)
console.log(fruit)

// use the length property to find the length of the vegetable array
console.log(vegetables.length)

// add that number to the end of the vegetable array
vegetables.push(vegetables.length)
console.log(vegetables)

// put the two array together into one array. fruit first. call the new array "food"
var food = fruit.concat(vegetables)
console.log(food)

// remove 2 elements from your new array starting at index 4 with one method
var foodSlice = food.slice(4, 6)
console.log(foodSlice)

// reverse your array
var foodReverse = food.reverse()
console.log(foodReverse)

// turn the array into a string and return it
var foodString = foodReverse.join(" ")
console.log(foodString)