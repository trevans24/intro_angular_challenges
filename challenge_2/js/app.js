console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);
app.controller("WelcomeController", WelcomeController);
app.controller("CohortController", CohortController);

function WelcomeController(){
  this.full_name = "John Doe";
  this.age = 35;
  this.city = "San Francisco";
  this.state = "CA"
  this.shout = function(str){
    return str.toUpperCase() + "!";
  }
}

function CohortController(){
  this.class_name = "WDI";
  this.enrolled_students = ["Sally", "John", "Jane", "Sean"];
  this.start_date = "4/01/2020";
  this.end_date = "7/01/2020";
  this.daysRemaining = function(){
    var ms_left = Date.parse(this.end_date) - Date.now();
    var days_left = Math.floor( ms_left/1000/24/60/60 );
    return days_left;
  }
}
