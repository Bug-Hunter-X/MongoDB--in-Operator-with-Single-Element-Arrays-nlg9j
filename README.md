# MongoDB $in Operator Pitfalls

This repository demonstrates a common error when using the `$in` operator in MongoDB queries with arrays containing only one element.  The incorrect usage can lead to unexpected query results, while the corrected version shows the best practice to use the `$in` operator or a direct equality comparison.

## Problem

The `$in` operator is designed to match documents where a field's value is present within a given array.  However, using `$in` with a single-element array can be counter-intuitive.

## Solution

For single-element arrays, directly using the equality operator (`field: value`) is more efficient and easier to understand.  Alternatively, if you still prefer `$in`, ensure to use it correctly.