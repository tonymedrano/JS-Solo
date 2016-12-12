'use strict';
/**********************************************************
************ Created by Tony A. Medrano 2016 **************
**********************************************************/

/****** Prototype *******/

var Castle = function(name){
  this.name = name;
};
Castle.prototype.build = function(){
  console.log(this.name);
};

var instance1 = new Castle("Winterfell");
Castle.prototype.build = function(){
  console.log(this.name.replace("Winterfell", "Moat Cailin"));
}
instance1.build();//prints "Moat Cailin" to the console

/*
Using object.create for our Castle class, we can build an instance using
Object.create, as shown in the following code:
*/
var instance3 = Object.create(Castle.prototype, {
  name: {
    value: "Winterfell",
    writable: false
  }
});
instance3.build();
instance3.name="Highgarden";
instance3.build();
