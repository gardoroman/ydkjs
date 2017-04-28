var foo = function bar() {
  var foo = "baz";

  function baz(foo){
    foo = bar;
    foo;
  }
  baz();
}

foo();
bar(); //error, function bar is not placed in the outer scope.
