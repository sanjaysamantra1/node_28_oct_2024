for (var i = 1; i <= 3; i++) { // ideally i value shouldn't be visible outside for()
    console.log('Inside loop ', i);  // 1  2   3
}
console.log('outside loop ', i); // 4  (this is a limitation) ( not an expected behaviour)

for (let x = 1; x <= 3; x++) {
    console.log('Inside loop ', x); // 1  2   3
}
console.log('outside loop ', x);   // ReferenceError: x is not defined  (expected behaviour)
