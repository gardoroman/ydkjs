/*
COMPILATION
global declarations
  variables
    foo
    non-strict
      bam #found in function bar -> function baz

  functions
    bar

function bar declarations
  variables
    foo

  functions
    baz

function baz declarations
  foo # in function definition
*/

// EXECUTION: LHS reference in global for foo = bar
var foo = "bar";

function bar() {
  // EXECUTION: LHS reference in scope of bar for foo
  var foo = "baz";

  //EXECUTION LHS reference for foo in scope of baz which is undefined
  function baz(foo) {
    //EXECUTION foo is assigned "bam"
    foo = "bam";
    /*
    E: lHS reference to bam. Not found in baz -> not found in bar >
    not found in global -> non-strict creation of bam
    */
    bam = "yay";
  }
  /*
  E: RHS reference in scope of bar to baz function object.
  Parenthesis are found and the function is executed.
  */
  baz()
}

/*
EXECUTION: RHS for function bar. Scope Engine returns a reference
to the variable that can be used to retrieve the function object.
Parenthesis are found and the function is executed.
*/
bar();
//E: RHS for foo found in global scope which returns "bar"
foo;
//E: RHS for bam found in global scope which returns "yay"
bam;
//E: RHS for funcion baz found not found in global scope
baz();
