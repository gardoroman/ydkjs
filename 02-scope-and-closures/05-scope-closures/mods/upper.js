// import hello from "hi";
const hello = require('./hi.js');

var hungry = "hippo";

function awesome() {
  console.log( hello.hello(hungry).toUpperCase() );
}

// function awesome() {
//   console.log( hello.hello(hungry).toUpperCase() );
// }

console.log(typeof hello);

awesome();
// export awesome;
