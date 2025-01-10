```javascript
// Correct usage: Direct equality comparison (more efficient)
db.collection.find({ field: value });

// Correct usage: $in operator with a single element array (more readable if using $in for consistency)
db.collection.find({ field: { $in: [ value ] } }); 
```