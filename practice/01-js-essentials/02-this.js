// CONCEPT: <one line — what this does> this keyword in JavaScript allows us to reuse object properties easily.
// WHY IT MATTERS: <one line — what breaks without it> without the this keyword, we would have to
// manually reference the object each time we want to access its properties, leading to more verbose and
// less maintainable code.

// ─── WORKING CASE ───

function thisKeywordExample() {
  const person = {
    firstName: "John",
    lastName: "Doe",
    fullName :  this.firstName + " " + this.lastName,
  };
 console.log(person.fullName); // Output: "John Doe"
  return person;

}

// ─── BROKEN CASE ───
function thisKeywordBrokenExample() {
  const brokenPerson = {
    firstName: "BrokenJohn",
    lastName: "Doe",
    fullName :  this.firstName + " " + this.lastName,
  };

  return this.brokenPerson;

}
fullBrokenPerson = this.brokenPerson; // Broken case: this.brokenPerson is undefined
//  because 'this' does not refer to the brokenPerson object in this context.