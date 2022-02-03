

var readlineSync =require ('readline-sync') ,

// GREETING THE PLAYER
userName =readlineSync .question ('what is your name? ');
    console.log ('Welcome to Escape Room ' + userName + '!');


let isAlive = true;
let hasKey = false;

while (isAlive == true) {
    options = readlineSync.keyIn (' Press 1 to Put hand in hole, Press 2 to find the key, or, Press 3 to open door', { limit: '$<1-3>' });
    if (options == 1) {
        console.log ('you put hand in the hole and died... Try Again');
        isAlive = false;
    }
    else if (options == 2 && hasKey == false) {
        console.log ('you have found the key! go open the door.');
        hasKey = true;
    }
    else if (options == 2 && hasKey == true) {
        console.log ('you already found the key, try opening the door!');
    }
    else if (options == 3 && hasKey == false) {
        console.log('you cannot open the door without finding the key first!');
    }
    else if (options == 3 && hasKey == true) {
        console.log('you have escaped succeffully, job well done!');
        isAlive = false
    }
}




    
