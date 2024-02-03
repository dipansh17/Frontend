const listen = () => {
  console.log("DIpansh here");
};
listen();
const add = (a, b) => {
  return a + b;
};
console.log("The sum is: " + add(1, 2));
//hoisting
//function ko kahi pr bhi call kr skte h
//but arrow functions ke niche he hum usse call kr skte h
console.log(addNums(5, 10));
function addNums(a, b) {
  return a + b;
}
//15 ans
//but in case of arrow function

// console.log(addNumbers(5, 10));

//cannot access
const addNumbers = (a, b) => {
  return a + b;
};
console.log(addNumbers(5, 10));

//this keyword
// arrow ke liye global scope hota h this ka
// aur funciton ke liye local scope hota h
