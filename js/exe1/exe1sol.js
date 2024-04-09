function calculateAverage(numbers) {
    // Step 1: Calculate the sum of all numbers in the array
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    // Step 2: Calculate the average
    var average = sum / numbers.length;

    // Step 3: Return the calculated average
    return average;
}

// Test the function with different arrays of numbers
var result1 = calculateAverage([1, 2, 3, 4, 5]);
var result2 = calculateAverage([10, 20, 30]);
var result3 = calculateAverage([5, 5, 5, 5]);

console.log(result1 , result2 , result3);

// Display the results
document.write("<p>Average of [1, 2, 3, 4, 5]: " + result1 + "</p>");
document.write("<p>Average of [10, 20, 30]: " + result2 + "</p>");
document.write("<p>Average of [5, 5, 5, 5]: " + result3 + "</p>");