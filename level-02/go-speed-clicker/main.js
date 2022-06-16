
let count = 0;
const btn = document.getElementById("btn");
const dispCount = document.getElementById("dispCount");

btn.onclick =  () => {
    count++;
    dispCount.innerHTML = count;
    localStorage.count = dispCount.innerHTML
}

let value = localStorage.getItem("count")

count = value

//  For this assignment, reference the last two articles. 
//  Make a site that tracks how many times the user has clicked
//  on a specific button and displays that click count to the user. 
//  Then, using localStorage or sessionStorage, 
//  make it so the number of clicks will remain on the
//  screen even after the site is refreshed.
