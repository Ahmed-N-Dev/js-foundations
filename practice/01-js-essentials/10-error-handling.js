// CONCEPT: JavaScript mainly use if else and switch statements to control the flow of code execution.
// It also uses try catch blocks to handle errors.
// WHY IT MATTERS: It is important to understand how to control the flow of code execution and handle errors in JavaScript.

// ─── WORKING CASE: if else ───
const a = 1;
if (a === 1) {
  console.log('a is 1');
} else {
  console.log('a is not 1');
}
// Expected: a is 1

// ─── BROKEN CASE  ───
if (a === 2) {
  console.log('a is 2');
}
// Expected output: (no output)

// ─── WORKING CASE: switch ───
switch (a) {
  case 1:
    console.log('a is 1');
    break;
  case 2:
    console.log('a is 2');
    break;
  default:
    console.log('a is neither 1 nor 2');
}
// Expected: a is 1

// ─── BROKEN CASE  ───
switch (a) {
  case 2:
    console.log('a is 2');
    break;
  default:
    console.log('a is neither 1 nor 2');
}
// Expected output: a is neither 1 nor 2