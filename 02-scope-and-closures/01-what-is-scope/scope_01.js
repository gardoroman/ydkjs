/*
Note: The compilation stage occurs prior to the execution phase.

Stage: COMPILATION
The compiler passes through to look for variable and
function declarations. This is done via the 'var' and
'function' keywords.
It creates a declaration list for each spoke, ie, a
global declaration list or declaration list for a particular
function.
STAGE: EXECUTION
This stage focuses on assignments. It usually looks for the '=' operator
and uses LHS and RHS references.
The Scope Engine is used to determine the scope in which values reside.
LHS is the target of the assignment. A successful search results in the
creation of a reference to that variable to which values can be assigned.

RHS is the immediate value what is being assigned. It is the source. It
is basically for references that are used and not assigned to.

LHS references do not always require an assignment via
the '=' operator, they can be implicitly assigned as in the case of a
variable in a function declaration.
*/

/*
COMPILATION
The compiler see a variable declaration for foo and
determines that the current scope is global
EXECUTION
foo is an LHS reference. foo is in the global scope. Since
"bar" is just a string value and does not need a lookup
it is assigned to foo.
*/
var foo = "bar";

/*
COMPILATION
JS compilation of functions differs from other languages.
The compiler registers a function but does not compile it immediately.
It will use jit compilation when the compiler sees that the function
is being called.
*/
/*
COMPILATION
The compiler finds a function declaration for bar and puts it
in the global scope.
*/
function bar() {
  /*
  COMPILATION
  Compiler finds a declaration in the scope of the function bar
  EXECUTION
  The scope of foo is looked up. Since it belongs to bar, it is
  immediately found in the scope of bar and assigned the value of
  "baz"
  */
  var foo = "baz";
}

/*
COMPILATION
Compiler adds the function baz to the global declaration list.
It also a assigns the parameter foo to the scope of the function baz.
EXECUTION
A local variable foo is an lhs reference that gets assigned
whatever argument is passed to the function at execution time.
*/
function baz(foo){
  /*
  COMPILATION
  The compiler ignores foo and bam because there is no 'var' keyword
  to declare them.
  */
  /*
  EXECUTION
  there is an lhs reference to foo that first looks in the local scope
  and finds it in the function definition.
  /*
  foo = "bam";
  /*
  EXECUTION
  The local scope is queried for an LHS reference to bam. It can't find
  it so it moves up the scope, in this case, global.
  In non-strict mode, global creates bam in the global scope because it
  is an LHS.
  In strict-mode it will be undeclared
  */
  bam = "yay";
}
