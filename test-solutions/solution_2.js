// To run this code, please visit jsbin.com
// Then select "JavaScript" and "Console" bar
// Copy and paste to left side
// And click "Run" button in right side, then the result will show in console

// Our input A and B for the assignment
var inputA = [1, 7, 15, 13]
var inputB = [1, 4, 5, 9, 20]

// Initiate the result
var res = []

// To combine all element of two arrays into inputA
inputB.map((x) => {
  inputA.push(x)
})


// Initiate task status
var done = false;
  
// To sorting combined array from min to max
while (!done) {
  done = true;
  for (var i = 1; i < inputA.length; i += 1) {
    
    // Checking if previous value is greater than current value
    if (inputA[i - 1] > inputA[i]) {
      
      // Set false for task status, to continue looping
      done = false;
      
      // Set temporary value of previous element
      var tmp = inputA[i - 1];
      
      // Change position of index
      inputA[i - 1] = inputA[i];
      inputA[i] = tmp;
    }
  }
}

// Show the result
result = inputA
console.log(inputA)
