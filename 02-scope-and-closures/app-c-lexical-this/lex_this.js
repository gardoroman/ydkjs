/*
the cool function counts calls setTimeout with an
arrow function in order to inherit the this binding of
the cool function
*/
var obj = {
  count: 0,
  cool: function coolFunc() {
    if (this.count < 1 ) {
      setTimeout( () => {
        this.count++;
        console.log( "awesome???" );
      }, 100);
    }
  }
};

obj.cool();

/*
another approach is to bind this on the call to setTimeout
*/
altObj = {
  count: 0,
  cooler: function coolerFunc() {
    if (this.count < 1) {
      setTimeout( function timer() {
        this.count++;
        console.log("really cool");
      }.bind(this), 100);
    }
  }
};

altObj.cooler();
