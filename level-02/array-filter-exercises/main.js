const numbers = [3,6,8,2]
const strings = ["dog", "wolf", "by", "family", "eaten", "camping"]
const people = [
    { name: "Angelina Jolie", member: true, age: 80 },
    { name: "Eric Jones", member: false, age: 2},
    { name: "Paris Hilton", member: true, age: 5},
    { name: "Kayne West", member: false, age: 16},
    { name: "Bob Ziroll", member: true, age: 100}
]

// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
const greaterThanFive = numbers.filter(numbers => numbers >= 5)
console.log(greaterThanFive)

// 2) Given an array of numbers, return a new array that only includes the even numbers.
const evenNumbers = numbers.filter(numbers => numbers % 2 === 0)
console.log(evenNumbers)

// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
const fiveCharactersOrLess = strings.filter(strings => strings.length <= 5)
console.log(fiveCharactersOrLess)

// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
const clubMembers = people.filter(people => people.member === true)
console.log(clubMembers)

// 5) Make a filtered list of all the people who are old enough to see The Matrix (older than 18)
const oldPeople = people.filter(people => people.age >= 18)
console.log(oldPeople)