console.log("Loaded.");


const myCircles = document.querySelectorAll(".circle");

myCircles.forEach(function(item, index) {
    item.addEventListener("click", function() {
        console.log("circle clicked: " + (parseInt(index) + 1));

        item.classList.toggle("move-me");

    })
})