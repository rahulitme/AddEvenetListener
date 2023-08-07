// Get all elements with the class name "second"
var elements = document.getElementsByClassName("second");

// Define the function that will be called when an element is clicked
function abc() {
    // 'this' refers to the clicked element
    this.style.background = "pink";
}

// Add a click event listener to each element
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", abc);
}

// Add a click event listener to the element with ID "second"
document.getElementById("second").addEventListener("click", function() {
    this.style.background = "blue";
});
