var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(people, alphabet){
    var result =[]
    for (var i = 0; i < people.length; i++){
        // result.push(people[i])
        for (var a = 0; a < alphabet.length; a ++){
            result.push(people[i], alphabet[a])
        }
        return result
    }
}

var alphabetSplit = alphabet.split("")

var twoInOne = people.join( ": " + alphabetSplit + " ")
console.log(twoInOne)
