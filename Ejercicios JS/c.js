"use strict"

var mundial = "mundial";
var wtf = "wtf";
function foo () {
  var mundial = "foo mundial";
  function bar () {
    var mundial = "bar mundial";
    function foobar () {
      var mundial = "foobar mundial";
      console.log(mundial);
      console.log(wtf);
      malMalMal = "mal";
    }
    foobar();
    console.log(mundial);
  }
  bar();
  console.log(mundial);
}
foo();
console.log(malMalMal);
