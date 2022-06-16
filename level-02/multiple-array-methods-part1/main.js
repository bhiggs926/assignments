const olderThan18 = []
const people = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]


// 1. Returns a list of everyone older than 18, which is
const ageSorted = people.map(function(people) {
    if (people.age > 18 ){
        olderThan18.push(people) 
    } else {
        return false
    }
})


// 2. sorted alphabetically by last name, and where
const atoz = olderThan18.sort(function(a,b){
    if(a.lastName < b.lastName){
        return -1;
    }
})


// 3. each name and age is embedded in a string that looks like an HTML `<li>` element.
return olderThan18.map(arr => {
    console.log(`<li> ${arr.firstName} ${arr.lastName} ${arr.age} </li>`)
})
