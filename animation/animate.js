'use strict';
/**********************************************************
************ Created by Tony A. Medrano 2016 **************
**********************************************************/
var Animate = (function () {
    function Animate(opts) {
      this.elem = opts ? opts.elem : document.getElementById("animate");
      this.pos = opts ? opts.pos : 0;
      this.id = setInterval(moveLeft, opts ? opts.timer : 5);;
    };
    Animate.prototype.moveLeft = function() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++;
        elem.style.left = pos + 'px';
        elem.style.backgroundColor = '#000000';
      }
      return elem;
    };
    return Animate;
  })();
