var foo;

/*
JavaScript creates a scope try/catch blocks
*/
try {
  foo.length;
} catch(err) {
  console.log(err); //TypeError
}

// console.log(err); //ReferenceError
