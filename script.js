// get inputs

let num = document.getElementById("num");

// get buttons

let back = document.getElementById("back");
let reset = document.getElementById("reset");
let next = document.getElementById("next");

// add input count

let count = 0;
back.addEventListener("click" , function() {
    count--;
    localStorage.setItem("count" , count);
    num.innerHTML = localStorage.getItem("count");
})

next.addEventListener("click" , function() {
    count++;
    localStorage.setItem("count" , count);
    num.innerHTML = localStorage.getItem("count");
    
})

reset.addEventListener("click" , function() {
    count = 0;
    num.innerHTML = count;
})

count = localStorage.getItem("count");

num.innerHTML = count;