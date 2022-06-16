

// try {
//  if ( 1 === 2 ){
//      throw new Error("Hey I am an error!")
//     }
//     console.log("did i console log?")
// } 

// catch(err) {
//     console.log(err)
// }

// finally {
//     console.log("I am running no matter what!")
// }




// 1a) Write a function that returns the sum of two numbers. Throw an error if 
// either argument is not of the data type number:
function sum(x, y) {
    //check data types first and throw error
    try {
        if(Number.isNaN(x) === false && Number.isNaN(y) === false){
            throw new Error ("X and Y are not numbers")
        }
        console.log("X and Y are numbers")
    }
    catch(err){
        console.log(err)
    }
    finally {
        return x + y
    }
}
console.log(sum())

// 1b) Call the sum function inside a try block using "1" and "2" as arguments. 
// Use console.log within a catch block to inform the user of the error.



// 2a) Given a user object, write a function called login that takes a username 
// and password as parameters. Throw an error if either of them don't 
// match. Otherwise, log to the console a message saying "login successful!"
 
var user = {username: "sam", password: "123abc"};
function login(username, password){
  //check credentials
  try{
      if(username === "sam" && password === "123abc"){
          throw "Password or username is incorrect"
      }
      console.log("Login Successful")
  }
  catch(err){
      console.log(err)
  }
}
console.log(login())

// 2b) Call the login function within a try block. In one instance use the correct credentials,
//  and in another use incorrect ones. Make sure you see the appropriate message!