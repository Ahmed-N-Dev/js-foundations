// CONCEPT: Closures
// - In JavaScript, a closure is the combination of a function and
// the lexical environment within which that function was declared.
// - In the closure concept a function has access to variables from its outer scope,
// even after the outer function has finished executing.

//To run this code, first update the sripts to
//  "dev:1": "node --watch in 01-closures.js" in package.json file
// then write this in terminal, pnpm run dev:1

function outerFunction(){
  let outerVariable = 'I am from the outer function';

  function innerFunction(){
    console.log(outerVariable);
  }

  return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // Output: I am from the outer function