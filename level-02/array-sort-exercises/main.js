
const number = [1, 3, 5, 2, 90, 20]
const strings = ["dog", "wolf", "by", "family", "eaten"]
const crazies = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

// 1) Sort an array from smallest number to largest
const leastToGreatest = number.sort((a, b) => a - b)
console.log(leastToGreatest)

// 2) Sort an array from largest number to smallest
const greatestToLeast = number.sort((a,b) => b - a)
console.log(greatestToLeast)

// 3) Sort an array from shortest string to longest
const shortestToLongest = strings.sort((a, b) => a.length - b.length)
console.log(shortestToLongest)

// 4) Sort an array alphabetically
const alphabetically = strings.sort ((a, b) => a === b ? 0: a > b ? 1: -1)
console.log(alphabetically)


// 5) Sort the objects in the array by age
const age = crazies.sort((a, b) => a.age - b.age)
console.log(age)

