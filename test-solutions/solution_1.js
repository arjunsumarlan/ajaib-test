// To run this code, please visit jsbin.com
// Then select "JavaScript" and "Console" bar
// Copy and paste to left side
// And click "Run" button in right side, then the result will show in console

// Our input for the assignment
var input = [1, 2, 3, 2, 1, 8, 100]

// Initiate the result
var res = []

// To get differences without reducing the same element
input.map((x1) => {
  input.map((x2) => {
    if(x1 != x2){
      let x = Math.abs(x1 - x2);
      res.push(x)
    }
  })
})

// Reducing the same element in result
res = res.filter(function(x, index){
	return res.indexOf(x) >= index;
});

// Finding the maximum value in result
let max = Math.max.apply(null, res)

// Show the maximum
console.log(max)