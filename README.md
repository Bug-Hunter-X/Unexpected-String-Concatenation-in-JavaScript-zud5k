# Unexpected String Concatenation in JavaScript

This code demonstrates a common JavaScript pitfall: unexpected string concatenation due to loose typing.  The `add` function intends to perform numerical addition, but because of JavaScript's dynamic typing, it concatenates the number and string instead of performing addition.  This can lead to subtle and difficult-to-debug errors.

The solution involves explicit type checking or coercion to ensure that both inputs are numbers before performing the addition operation.