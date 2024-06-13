// Helper function to calculate square of a number
function calculateSquare(number) {
    return number * number;
  }
  
  // Main function to demonstrate the usage of the helper function
  function main() {
    // Input number
    var inputNumber = 5;
  
    // Calculate square of the input number using the helper function
    var square = calculateSquare(inputNumber);
  
    // Output the result
    console.log("The square of " + inputNumber + " is: " + square);
  }
  
  // Call the main function
  main();
  