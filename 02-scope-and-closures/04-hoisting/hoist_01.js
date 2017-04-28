/*Example 1
In the example below the code is executed as follows
1. compile: indentifier a is placed in global scope
2. execution: lhs reference for var a, assigned 2
3. execution: rhs reference for a
*/
console.log("example 1");
a = 2; //2

var a; // 1
console.log(a); //3

/*Example 2
In the example below the code is executed as follows
1. compile: indentifier b is placed in global scope
2. execution: finds var b and returns RHS reference of undefined
3. execution: lhs reference looks for indentifier 'b' and assigns it 1
*/
console.log("example 2");
console.log(b); // 2


var b = 1; // 1-> var b; 3 b = 1
