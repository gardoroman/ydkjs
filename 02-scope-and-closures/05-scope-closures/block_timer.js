// initializing blocks scope variable in body of for loop
for (var i = 1; i <=5; i++){
  let j = i; {
    setTimeout(function timer() {
      console.log("printing let in block", j);
    });
  }
}

//initializing a block scoped variable in the for initialization block
for (let k = 1; k <=5; k++){
    setTimeout(function timer() {
      console.log("printing let in for", k);
    });
}
