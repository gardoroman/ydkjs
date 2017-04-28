var obj = {
  id: "awesome",
  cool: function coolFunc() {
    console.log( this.id );
  }
};

var id = "not awesome";

obj.cool();
obj.cool();
setTimeout(obj.cool, 100); //undefined


/*
fix binding of this
*/

var obj2 = {
  count: 0,
  id: "awesome??",
  cooler: function coolerFunc(){
    var self = this;
    if (self.count < 1) {
      setTimeout( function timer() {
        self.count++;
        console.log( "this is", self.id );
      }, 100 );
    }
  }
};

obj2.cooler();
obj2.cooler();
setTimeout(obj2.cooler, 1000);
