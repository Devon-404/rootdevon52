// Variables

const myBox = document.getElementById("box");
let myNumber = 9;

//const is a constant, cannot be altered
//let is dynamic and can be assigned many different contents

//var is old school - can be redefined many times, even on same block | Not recommended anymore, still works though

//nameless function

function() {
    //do stuff
}

//named function

function myCoolAction() {
    // do stuff..
}
myCoolAction(); // this will execute that function

// different way of executing functions right away
(function myCoolAction() {
    // do stuff..
})();

// Conditionals
if(x == 5) {
    //do something
} else {
    //do nothing
}

// multiple conditions
if(x == 5) {
    //do something
} else if(x == 6) {
    //do something else
} else {
    //do nothing
}

/// Comparison operators 

/*
== is equal to
!= is NOT equal to

> greater than
< smaller

>= greater than or equal to
<= smaller than or equal to

optional/additional "same type" checking

=== is equal to AND of same data type
!== is NOT equal to OR of same data type

MULTIPLE Conditons in one single condional
&& AND
|| OR

*/
if(x == 5 && y == 7) {
    alert("Excellent");
}

if(x == 5 || x == 7) {
    alert("fantastic");
}

// Data types
// Boolean true or false
let lightIsOn = false;

lightIsOn = true;

if(lightIsOn) {
    playSound();
} else if(!lightIsOn) {
    redirectToScene1();
}
/// this is the same as if(lightIsOn == true) { etc. }

// Arrays

let myCars = ["Audi", "Crysler", "BMW"];
myCars[0] // that would be "Audi"

for(let i = 0; i < myCars.length; i++) {
    console.log(myCars[i]);
}

// i++ means i = i + 1
// i += 1

myCars[2] = "Volvo";