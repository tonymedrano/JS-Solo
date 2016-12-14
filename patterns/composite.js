  'use strict';
  /**********************************************************
  ************ Created by Tony A. Medrano 2016 **************
  **********************************************************/
  var SimpleIngredient = (function(){
    function SimpleIngredient(name, calories, ironContent, vitaminContent) {
      this.name = name;
      this.calories = calories;
      this.ironContent = ironContent;
      this.vitaminContent = vitaminContent;
    };
    SimpleIngredient.prototype.GetName = function() {
      return this.name;
    };
    SimpleIngredient.prototype.GetCalories = function() {
      return this.calories;
    };
    SimpleIngredient.prototype.GetIronContent = function() {
      return this.ironContent;
    };
    SimpleIngredient.prototype.GetVitaminContent = function() {
      return this.vitaminContent;
    };
    return SimpleIngredient;
  })();

  var CompoundIngredient = (function(){
    function CompoundIngredient(name){
      this.name = name;
      this.ingredients = new Array();
    };
    CompoundIngredient.prototype.AddIngredient = function(ingredient) {
      this.ingredients.push(ingredient);
    };
    CompoundIngredient.prototype.GetName = function() {
      return this.name;
    };
    CompoundIngredient.prototype.GetCalories = function() {
      var total = 0;
      for (var i = 0; i < this.ingredients.length; i++) {
        total += this.ingredients[i].GetCalories();
      }
      return total;
    };
    CompoundIngredient.prototype.GetIronContent = function() {
      var total = 0;
      for (var i = 0; i < this.ingredients.length; i++) {
        total += this.ingredients[i].GetIronContent();
      }
      return total;
    };
    CompoundIngredient.prototype.GetVitaminContent = function() {
      var total = 0;
      for (var i = 0; i < this.ingredients.length; i++) {
        total += this.ingredients[i].GetVitaminContent();
      }
      return total;
    };
    return CompoundIngredient;
  })();

  var egg = new SimpleIngredient("Egg", 155, 6, 0);
  var milk = new SimpleIngredient("Milk", 42, 0, 0);
  var sugar = new SimpleIngredient("Sugar", 387, 0, 0);
  var rice = new SimpleIngredient("Rice", 370, 8, 0);

  var ricePudding = new CompoundIngredient("Rice Pudding");
  ricePudding.AddIngredient(egg);
  ricePudding.AddIngredient(milk);
  ricePudding.AddIngredient(sugar);
  ricePudding.AddIngredient(rice);

  var scenario = document.getElementById('boxes');
  scenario.innerHTML += "Name: <b>" + ricePudding.GetName() + "</b> details:<br>";
  scenario.innerHTML += "- " + ricePudding.GetCalories() + " calories<br>";
  scenario.innerHTML += "- " + ricePudding.GetIronContent() + " iron content<br>";
  scenario.innerHTML += "- " + ricePudding.GetVitaminContent() + " vitamin content";
