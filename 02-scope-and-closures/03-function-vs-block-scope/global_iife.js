'use strict'
var a = 2;

(function global_iife(glob){
  // var a = 1;
  console.log(a)
  console.log(glob.a);
})(global);
