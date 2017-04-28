function foo() {
  var a = 2;

  function baz() {
    console.log(a); //2
  }

  bar(baz);
}

function bar(fn) {
  console.log("in bar function")
  fn();
}

foo();
