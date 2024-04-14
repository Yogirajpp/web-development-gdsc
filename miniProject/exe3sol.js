// Get references to HTML elements
var decrementBtn = document.getElementById('decrementBtn');
var incrementBtn = document.getElementById('incrementBtn');
var counterDisplay = document.getElementById('counter');

// Define a variable to store the counter value
var counter = 0;

// Add event listener to the increment button
incrementBtn.addEventListener('click', function() {
    // Increment the counter value
    counter++;

    // Update the paragraph text to display the new counter value
    counterDisplay.textContent = counter;
});

// Add event listener to the decrement button
decrementBtn.addEventListener('click', function() {
    // Decrement the counter value
    counter--;

    // Update the paragraph text to display the new counter value
    counterDisplay.textContent = counter;
});
