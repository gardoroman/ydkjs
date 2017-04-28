// 'use strict'

function func(obj){
  with(obj) {
    a =  2;
  }
}

var o1 = {
  a:3
};

var o2 = {
  b : 4
};

console.log(o1.a)
func(o1);
console.log(o1.a)
// func(o2);
// console.log(o2.a)
console.log(a)
