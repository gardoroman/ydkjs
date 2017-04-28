var MyModules = (function Manager() {
  var modules = {};

  /*
  define takes 3 parameters:
  name - is the name of the function
  deps - any dependencies for that function
  impl - the function body associated with 'name'
  */
  function define(name, deps, impl) {
    // only executed if function has dependencies
    for (var i=0; i <deps.length; i++) {
      console.log("before", deps[i]);
      deps[i] = modules[deps[i]];
      console.log("after", deps[i]);
    }
    /*
     calls the function with the dependencies as parameters
     and returns the object with function properties.
    */
    modules[name] = impl.apply( impl, deps);
  }

  function get(name) {
    return modules[name];
  }

  return {
    define: define,
    get: get
  };
})();


MyModules.define("hi", [], function() {
  function hello(who) {
    return "Let me introduce: " + who;
  }

  return {hello: hello} ;

});

MyModules.define("bye", [], function() {
  function byebye(who) {
    return "See you later, " + who;
  }

  return {byebye: byebye} ;

});

MyModules.define("upper", ["hi","bye"], function(hi, bye) {
  var hungry = "hippo";

  function awesome(){
    console.log(hi.hello(hungry).toUpperCase());
  }
  function cool(){
    console.log(bye.byebye(hungry));
  }
  return {
    awesome: awesome,
    cool: cool};
});


// var sayHi = MyModules.get("hi");
var sayUp = MyModules.get("upper");
// console.log(sayHi.hello("you"));
sayUp.awesome();
sayUp.cool();
