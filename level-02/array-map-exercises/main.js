const num = [2, 5, 100]
const names = ['john', 'JACOB', 'jinGleHeimer', 'schmidt']

//   1) Make an array of numbers that are doubles of the first array
const doubles = num.map(num => num * 2)
console.log(doubles)
    
//   2) Take an array of numbers and make them strings
const strings = num.map(num => num.toString())
console.log(strings)

//   3) Capitalize the first letter of each name and make the rest of the characters lowercase
const upperCase = names.map(names => names[0].toUpperCase() + names.slice(1).toLowerCase())
console.log(upperCase)
 

//   4) Make an array of strings of the names
class Person {
    constructor (name, age, gender){
        this.name = name
        this.age = age
        this.gender = gender
    }
}

const person1 = new Person ("Angelina Jolie", 80, 'F')
const person2 = new Person ('Eric Jones', 2, 'M')
const person3 = new Person ('Paris Hilton', 5, 'F')
const person4 = new Person ('Kanye West', 16, 'M')
const person5 = new Person ('Bob Ziroll', 100, 'M')
const people = [person1, person2, person3, person4, person5]

const namesOnly = people.map(people =>{
    console.log(people.name)
})

//   5) Make an array of strings of the names saying whether or not they can go to The Matrix
const matrix = people.map(people => {
    if (people.age < 18){
        console.log(`\n${people.name} is too young to see the Matrix.`)
    } else if (people.age >= 18){
        console.log(`\n${people.name} is old enough to see the Matrix.`)
    }
})
//   6) Make an array of the names in h1s, and the ages in h2s
const namesAge = people.map(people => `<h1> ${people.name} <h1> ` +` <h2> ${people.age} <h2>`)
console.log(namesAge)

