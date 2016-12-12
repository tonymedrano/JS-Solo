'use strict';
/**********************************************************
************ Created by Tony A. Medrano 2016 **************
**********************************************************/
var Box = (function () {
    function Box(opts) {
      this.w = opts ? opts.width + 'px' : 20 + 'px';
      this.h = opts ? opts.height + 'px' : 20 + 'px';
      this.c = opts ? opts.color : '#000000';
    };
    Box.prototype.build = function() {
        var box = document.createElement('div');
            box.className = 'box';
            box.style.width = this.w;
            box.style.height = this.h;
            box.style.cssFloat = "left";
            box.style.backgroundColor = this.c;
            return box;
    };
    return Box;
  })();
