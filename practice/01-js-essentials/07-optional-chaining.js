// CONCEPT: <one line — what this does> ?. optional chaining operator in JavaScript allows us to safely access
//  nested object properties without having to check for the existence of each property in the chain.
// WHY IT MATTERS: <one line — what breaks without it> without this we would have to manually check for the
// existence of each property in the chain, leading to more verbose and less maintainable code.

// ─── WORKING CASE ───
const cars = {
  name: 'Toyota',
  model: {
    name: 'Corolla',
    year: 2020,
  },
  registered: true,
}
console.log(cars?.model?.name && cars?.registered); // Output: "Corolla"

// ─── BROKEN CASE ───
console.log(cars?.model?.color && cars?.registered); // Output: undefined

 // Broken case: car color property does not exist, so the optional chaining operator returns undefined
