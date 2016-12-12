'use strict';
/**********************************************************
************ Created by Tony A. Medrano 2016 **************
**********************************************************/

/******* Objects *******/
/**
  JavaScript has five primitive types:
  • Undefined
  • Null
  • Boolean
  • String
  • Number
**/

var functionObject = {
  greeting: "hello world",
  doThings: function() {
    console.log(this.greeting);
    this.doOtherThings();
  },
  doOtherThings: function() {
    console.log(this.greeting.split("").reverse().join(""));
  }
}
functionObject.doThings();//prints hello world then dlrow olleh
