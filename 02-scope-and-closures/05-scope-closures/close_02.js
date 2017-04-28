var fn;

function foo() {
  var a = 2;

  function baz() {
    console.log(a);
  }

  fn = baz;
}

function bar() {
  /* var fn is global and has been assigned the baz function.
     Since it is a closure it has access to the variable a
  */
  console.log("in bar")
  fn();
}

foo();
bar()
