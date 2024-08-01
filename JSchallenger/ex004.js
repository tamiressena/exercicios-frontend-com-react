// Write a function that takes an array (a) as argument. Remove the first 3 elements of 'a'. Return the result

function myFunction(a) {
  let shifted1 = a.shift();
  let shifted2 = a.shift();
  let shifted3 = a.shift();

  console.log(a);
}

myFunction([1, 2, 3, 4, 5, 6]);
