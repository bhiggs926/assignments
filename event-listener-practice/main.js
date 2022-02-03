
var body = document.getElementById("body");
var box = document.getElementById("box");

box.addEventListener("pointerover", blue); 
box.addEventListener("mousedown", red);
box.addEventListener("mouseup", yellow);
box.addEventListener("dblclick", green);
body.addEventListener("wheel", orange);

body.addEventListener('keydown', e => {
    console.log(e)
    if (e.keyCode === 66){
        box.style.backgroundColor = 'blue';
    } else if (e.keyCode === 82){
        box.style.backgroundColor = "red";
    } else if (e.keyCode === 89) {
        box.style.backgroundColor = "yellow"
    }else if (e.keyCode === 71) {
        box.style.backgroundColor = "green";
    }else if (e.keyCode === 79){
        box.style.backgroundColor = "orange";
    }
});

 function blue() {
     box.style.backgroundColor = "blue";
 }

 function red() {
     box.style.backgroundColor = "red";
 }

 function yellow() {
     box.style.backgroundColor = "yellow";
 }

 function green() {
     box.style.backgroundColor = "green";
 }

 function orange() {
     box.style.backgroundColor = "orange";
 }
