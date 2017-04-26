console.log('challenge #3 -- app.js loaded!');

var app = angular.module("appThree", []);
app.controller("infoController", infoController);

function infoController($scope){
  // this.name = "Jon Doe"; // default name
  // this.height = 5.6; // default height in feet
  // $scope.info =[]
}

app.controller('loanController', loanController);

function loanController($scope){
	this.amount = 0;
    this.apr = 0;
    this.month = function(n){
      	var yearly_interest = (this.amount * (this.apr/100));
      	var monthly_interst = (yearly_interest / 12);
   		var accrued_interest = (n * monthly_interst || 0);
   		var total_balance = (this.amount + accrued_interest);
    		return {
    			accrued_interest,
    			total_balance
    };
	};
}
	
