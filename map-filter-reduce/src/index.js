import emojipedia from "./emojipedia";
/*

//Map --> Create a new array by doing something with each item in an array.
// var numbers = [3, 56, 2, 48, 5];
function double(x) {
  return x * 2;
}
const ans = numbers.map(double);

// var ans = [];
// numbers.forEach(function (x) {
//   ans.push(x*2);
// });

// const ans = numbers.map(function(x){
//   return x*2;
// });
// console.log(ans);

*/

/*
// Filter --> Create a new array by keeping the items that returns true
var numbers = [3, 56, 2, 48, 5];
// const ans = numbers.filter(function (num) {
//   return num > 10;
// });

// var ans = [];
// numbers.forEach(function (num) {
//   if(num < 10){
//     ans.push(num)
//   }
// })

// console.log(ans);

*/

/*
// Reduce --> Accumulate a value by doing something to each item in an array

// var numbers = [3,56,2,48,5];
// var ans = numbers.reduce(function (accumulator, currNumber) {
//   console.log("Accumulator = " + accumulator);
//   console.log("Current number = "+currNumber);
//   return accumulator + currNumber;
// })
// var ans = 0;
// numbers.forEach(function (curr) {
  //   ans+=curr;
  // })
  
// console.log(ans);
*/

/*
// Find --> Find the first item that matches from an array.
var numbers = [3,56,2,48,5];
const ans = numbers.find(function(num){
  return num > 10;
})
console.log(ans);
*/

/*
// FindIndex --> find the index of first item that matches.
var numbers = [3, 56, 2, 48, 5];
const ans = numbers.findIndex(function (num) {
  return num > 10;
});
console.log(ans);
*/

var ans = emojipedia.map(function (emojis) {
  return emojis.meaning.substring(0, 100);
});

console.log(ans);
