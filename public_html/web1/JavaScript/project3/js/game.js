console.log("LoadedðŸ‘¹");

const stage = document.querySelector("body");
const guy = document.getElementById("guy");

//sounds
const guySound = new Audio("sounds/groan.mp3")

guy.onclick = function()
{
    this.classList.toggle("move");
    guySound.play();
}

stage.addEventListener("click", function(event) {
    console.log(event.clientX + " : " + event.clientY)
    //guy.style.transform = "translatX("+ event.clientX +"px) translateY("+ event.clientY +"px)";
    guy.style.transform = `translateX(${event.clientX}px) translateY(${event.clientY}px)`;
})

//"" '' ``
// Keyboard input
document.onkeydown = checkKeys;

function checkKeys(event) {
    
    var style = window.getComputedStyle(guy);
    var matrix = new WebKitCSSMatrix(style.transform);
    var xVal = matrix.m41;
    var yVal = matrix.m42;    
    var coords;

    //left arrow
    if(event.keyCode == "37") {
        coords = `translateX(${xVal-200}px) translateY(${yVal}px)`;
        guy.style.transform = coords;
    }
    //right arrow
    if(event.keyCode == "39") {
        coords = `translateX(${xVal+200}px) translateY(${yVal}px)`;
        guy.style.transform = coords;
    }
    //up arrow
    if(event.keyCode == "38") {
        coords = `translateX(${xVal}px) translateY(${yVal-200}px)`;
        guy.style.transform = coords;
    }
    //down arrow
    if(event.keyCode == "40") {
        coords = `translateX(${xVal}px) translateY(${yVal+200}px)`;
        guy.style.transform = coords;
    }



}

function addMyObject() {
/* Custom Spear */
 let myObject = document.createElement("img");
 myObject.src = "../img/spear.svg";
 myObject.style.width = "300px"
 stage.append(myObject);

 let w = window.innerWidth;
 let randoX = Math.floor((Math.random() * w) + 1);
 let h = window.innerHeight;
 let randoY = Math.floor((Math.random() * h) + 1);

 myObject.style.transform = `translateX(${randoX}px) translateY(${randoY}px)`

setTimeout(() => { myObject.remove(); addMyObject(); }, 4000);
}

addMyObject ();
