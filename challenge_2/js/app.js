console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);

app.controller("WelcomeController", WelcomeController);

function WelcomeController(){
	this.full_name = "Troy Evans";
	this.age = 30;
	this.city = "Littleton";
	this.state = "Colorado";
	this.letters = 9;
	this.shout = function(name){
		var cap = name.toUpperCase();
		return cap + "!";
	};
}

app.controller("ClassController", ClassController);

function ClassController($scope){
	$scope.class = [
	{class_name: "WDI-3",
	enrolled_students: 12,
	start_date: "March 13, 2107",
	end_date: "June 2, 2017",
	daysRemaining(x){
		x = 37;
		return x;
	}
	}
	];
}
