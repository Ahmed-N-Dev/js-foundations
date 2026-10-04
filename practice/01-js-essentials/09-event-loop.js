// CONCEPT: JavaScript runs one statement at a time; async work waits in a queue.
// WHY IT MATTERS: JavaScript runs line by line, before processing async operations.

// ─── WORKING CASE: sync order ───
console.log('1');
console.log('2');
console.log('3');
// Expected: 1 2 3

// ─── BROKEN CASE (actually correct — but surprising) ───
console.log('A');
setTimeout(() => console.log('B'), 0);
Promise.resolve().then(() => console.log('C'));
console.log('D');
// Expected output: A D C B
// Why does A print first? Because it is synchronous.

// Why does D print before B and C? Because sync code always finishes before async code runs.

// Why does C print before B even though both are async? Because Promises (microtasks) run before setTimeout (macrotasks).

// Microtask before macrotask. That is the rule.