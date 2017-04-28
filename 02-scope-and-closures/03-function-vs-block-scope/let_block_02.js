'user strict'


function foo(bar) {
  /*
  the let force the variables at the top of the block
  and makes it clear that the variables are block-scoped
  This type was rejected by the TC39 committee for now.
  */
  let (baz = bar) {
    console.log(baz); // "bar"
  }
  console.log(baz); //error
}

foo("bar")
