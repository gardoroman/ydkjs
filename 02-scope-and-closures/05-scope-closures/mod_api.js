var api = (function ApiModule(id) {
  function change() {
    // modify the public API
    publicAPI.identify = identify2;
  }

  function identify1() {
    console.log(id);
  }

  function identify2() {
    console.log( id.toUpperCase() );
  }

  var publicAPI = {
    change: change,
    identify: identify1
  };

  return publicAPI;
})("api module");

api.identify();
api.change();
api.identify();
