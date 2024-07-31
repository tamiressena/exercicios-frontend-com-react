// Write a function that takes a string (a) as argument. Extract the first half a. Return the result

function myFunction(a) {
  let x = Math.floor(a.lenght / 2);
  a.slice(0, x);
}

console.log(myFunction("abcd"));
