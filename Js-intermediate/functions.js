function name() {
  console.log("Hello Dipansh Here!");
}
// name();
// name();
// name();

//parameters
var a = 10;
var b = 10;
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function addNumbers() {
  var ans = 0;
  for (let i = 0; i < arguments.length; i++) {
    ans += arguments[i];
  }
  return ans;
}

//using spread operators
function addNums(...nummbers) {
  var sum = 0;
  for (let i = 0; i < nummbers.length; i++) {
    sum += nummbers[i];
  }
  return sum;
}
console.log("The sum is: " + add(a, b));
console.log("The multiply is: " + multiply(a, b));
var a = addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log("The sum of all is: " + a);
console.log(
  "The sum of all is:(Using ...) " + addNums(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
);
