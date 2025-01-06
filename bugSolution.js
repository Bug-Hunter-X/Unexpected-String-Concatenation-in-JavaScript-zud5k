function add(a, b) {
  // Explicit type checking
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // or throw an error
  }
  return a + b;
}

console.log(add(1, '2')); // Output: NaN

//Alternative using Number() for coercion
function add2(a, b) {
  return Number(a) + Number(b);
}
console.log(add2(1, '2')); //Output: 3