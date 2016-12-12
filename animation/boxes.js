'use strict';
/**********************************************************
************ Created by Tony A. Medrano 2016 **************
**********************************************************/
var Boxes = (function () {
    function Boxes(opts) {
      this.boxCollection = [];
      this.q = opts ? opts.quantity : 100;
    };
    Boxes.prototype.colors = function() {
      return '#'+(function lol(m,s,c){return s[m.floor(m.random() * s.length)]
        + (c && lol(m,s,c-1));})(Math,'0123456789ABCDEF',4);
    };
    Boxes.prototype.create = function() {
      for (var i = 0; i < this.q; i++ ) {
          this.boxCollection.push(
          new Box({
            width: 45,
            height: 45,
            color: this.colors()
          }).build()
        );
      }
      return this.boxCollection;
    };
    return Boxes;
  })();

  var box = new Boxes({
      quantity: 1000
  }).create();

  var scenario = document.getElementById('boxes');
  for (var i = 0; i < box.length; i++ ) {
    scenario.append(box[i]);
  }
