'use strict'
var a = 2;
(function iife(){
  var a = 3;
  console.log(a);
})();
console.log(a);


(function iife2(val){
  var b = 3;

  console.log(val + b);
})(a);
