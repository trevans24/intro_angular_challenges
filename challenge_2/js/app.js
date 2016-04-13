console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);
app.controller("WelcomeController", WelcomeController);

function WelcomeController(){
  this.full_name = "John Doe";
  this.age = 35;
  this.city = "San Francisco";
  this.state = "CA"
  this.shout = function(str){
    return str.toUpperCase() + "!";
  }
}
