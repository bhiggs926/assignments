

// JAVASCRIPT MADE THIS
var parent = document.getElementById("header");
var javaMadeThis = document.createElement("h1");
javaMadeThis.id = "javaMade";
javaMadeThis.textContent = "JavaScript Made This!!";
javaMadeThis.style.textAlign = "center"
parent.appendChild(javaMadeThis);

// "NAME" WROTE THE JAVASCRIPT
var javaMade = document.getElementById("javaMade");
var author = document.createElement('h3');
author.id = "author";
author.innerHTML = "<span id = 'nameColor' class='name'>Brad</span> wrote the JavaScript";
author.style.textAlign = 'center';
parent.appendChild(author);
// "NAME" BRAD
var brad = document.getElementById('nameColor');
brad.style.color ='red';

// CONVERSATION CLEAR BY BUTTON CLICK
var body = document.querySelector('#main');
var clearButton = document.querySelector('#clear-button');
var messageFlex = document.querySelector(".messages");
var messageLog = document.querySelector('.messages > div');
messageFlex.id = "messageFlex";
messageLog.id = "messageLog";
clearButton.addEventListener('click', clearConvo)
function clearConvo (){
    if(clearButton !== "click"){
        messageFlex.remove(messageLog);
    } else {
        console.log('it does not work')
    }
}















// HEADER "JAVA MADE THIS'"

// var parent = document.getElementById("header");
// var javaMadeThis = document.createElement('h1');
// javaMadeThis.id = "javaMade"
// javaMadeThis.textContent = "JavaScript made this!!";
// parent.appendChild(javaMadeThis)

// DIFFERENT COLORED NAME (SUBTITLE)

// var h4 = document.getElementById("javaMade");
// var javaMadeThis = document.createElement('h4');
// javaMadeThis.textContent = "Brad wrote the JavaScript";
// parent.appendChild(javaMadeThis);
