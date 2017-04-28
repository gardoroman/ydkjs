function TestModule() {
  var something = "blue";
  var another = [1,2,3];

  function doSomething() {
    console.log(something);
  }

  function doAnother(){
    console.log( another.join(" ! "));
  }

  return {
    doSomething : doSomething,
    doAnother : doAnother
  };
}

var tm = TestModule();
// tm['doSomething']();
// console.log(tm['doSomething']);
tm.doSomething();
tm.doAnother();
