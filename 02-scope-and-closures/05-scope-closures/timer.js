function wait(message) {
  function timer() {
    console.log(message);
  }
  // setTimeout(function timer() {
  //   console.log(message);
  // }, 1000);
  setTimeout(timer, 1000);
}

wait("Closure in a setTimeout");
