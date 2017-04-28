/*
1. compile lhs references for vars a,c,d and function b
*/

/*
2. rhs lookup for function b
*/
var a = b();

/*
rhs lookup for d which at this point is undefined and results
in TypeError
*/
var c = d();
a;
c;

/*
3 rhs look up for c, at this point it is undefined.
*/
function b() {
  console.log(c)
  return c;
}

var d = function () {
  return b();
}
