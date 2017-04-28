var a = 2;
(function iife(x){
  x(2);
})(function func(b){
  var a = 3;
  console.log(a + b);
});
