// will print the value of i after the for loop completes
for (var i=0; i<=5; i++){
  setTimeout(function timer() {
      console.log("Printing i", i);
    }, 500);
}

// closure preserves value of i for each specific iteration
for (var i=0; i<=5; i++){
  (function (){
    var j = i;
    setTimeout(function timer() {
      console.log("Printing j", j);
    }, 500);
  })();
}

// passing variable into scope of iife. closure receives value
// of i for each specific iteration
for (var i=0; i<=5; i++){
  (function (k){
    setTimeout(function timer() {
      console.log("Printing k", k);
    }, 500);
  })(i);
}
