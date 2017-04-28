var a = true, b = 10;

if (a) {
  let c = 3;
  if (b > c) { // if this block is moved out of the scope where "let c" is decarled there will be a referenceError
    console.log(b)
  }
}
