console.log("Loaded.")

// Step 1 - Selecting the element
const myShape = document.getElementById("triangle");

// Step 2 - adding a click event
// myShape.addEventListener("click", function() {
myShape.addEventListener("click", () => {
    // myShape.style.borderColor = "blue transparent";
    myShape.classList.toggle("change-me");
})