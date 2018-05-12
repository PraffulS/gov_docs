	// create the module and name it scotchApp

    function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("id");
    //alert(localStorage.getItem("uname"));
     window.location.href = "login.html";
}



	var scotchApp = angular.module('myapp', ['ngRoute','ui.grid']);


	scotchApp.config(function($routeProvider) {
		$routeProvider

			.when('/', {
				templateUrl : 'admin_pages/home.html',
				controller  : 'mainController'
			})

			.when('/license', {
				templateUrl : 'admin_pages/license.html',
				controller  : 'licensecontroller'
			})

			.when('/aadhar', {
				templateUrl : 'admin_pages/aadhar.html',
				controller  : 'aadharcontroller'
			})

			.when('/pan', {
				templateUrl : 'admin_pages/pan.html',
				controller  : 'pancontroller'
			});
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
		$scope.message = "Welcome to GOV_DOCS"+" ADMIN";

   		
	});

	scotchApp.controller('licensecontroller', function($scope, $http, $window) {
    $http({
        method: "GET",
        url: "https://api.mlab.com/api/1/databases/mydb/collections/license?apiKey=DBJpTzbaMTm_VIH3Xe2kKckonrrlKT0A",
        dataType: 'json',
        crossDomain: true,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function successCallback(response) {
   //alert(JSON.stringify(response.data));
   $scope.myData1 = response.data;
  }, function errorCallback(response) {
    alert("Sorry couldn't connect!");
  
  });
  $scope.submit=function(){
    var obj = {
    "license_no": $scope.license_no,
    "username": $scope.uname,
    "name": $scope.name,
    "vehicle_category": $scope.vehicle_category

    };
    $http({
        method: "POST",
        url: 'https://api.mlab.com/api/1/databases/mydb/collections/license?apiKey=DBJpTzbaMTm_VIH3Xe2kKckonrrlKT0A',
        dataType: 'json',
        crossDomain: true,
        data: obj,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function successCallback(response) {
      $window.location.reload();
  }, function errorCallback(response) {
    alert("Sorry couldn't connect!");
  
  });
 

  };
  $scope.update1=function(index){
    $("#myModal").modal('show');
    $scope.index = index;
  };
  $scope.update2= function(){
     var obj = {
      "_id": {
        "$oid": $scope.index
    },
    "license_no": $scope.mlicense_no,
    "username": $scope.muname,
    "name": $scope.mname,
    "vehicle_category": $scope.mvehicle_category

    };
    $http({
        method: "POST",
        url: 'https://api.mlab.com/api/1/databases/mydb/collections/license?apiKey=DBJpTzbaMTm_VIH3Xe2kKckonrrlKT0A',
        dataType: 'json',
        crossDomain: true,
        data: obj,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function successCallback(response) {
     $window.location.reload();
  }, function errorCallback(response) {
    alert("Sorry couldn't connect!");
  
  });
 

  };
  $scope.delete1 = function(index1){
  $http({
        method: "DELETE",
        url: 'https://api.mlab.com/api/1/databases/mydb/collections/license/'+index1+'?apiKey=DBJpTzbaMTm_VIH3Xe2kKckonrrlKT0A',
        dataType: 'json',
        crossDomain: true,
        headers: {
            'Content-Type': 'application/json'
        }
 }).then(function successCallback(response) {  
      $window.location.reload();

     
  }, function errorCallback(response) {
    alert("Sorry couldn't connect/delete!");
  
  });


 };
 
	});




	scotchApp.controller('aadharcontroller', function($scope, $http, $window) {
    $http({
        method: "GET",
        url: "https://api.mlab.com/api/1/databases/mydb/collections/aadhar?apiKey=DBJpTzbaMTm_VIH3Xe2kKckonrrlKT0A",
        dataType: 'json',
        crossDomain: true,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function successCallback(response) {
   //alert(JSON.stringify(response.data));
   $scope.myData1 = response.data;
  }, function errorCallback(response) {
    alert("Sorry couldn't connect!");
  
  });
  $scope.submit=function(){
    var obj = {
    "aadhar_no": $scope.aadhar_no,
    "username": $scope.uname,
    "name": $scope.name,
    "dob": $scope.dob

    };
    $http({
        method: "POST",
        url: 'https://api.mlab.com/api/1/databases/mydb/collections/aadhar?apiKey=DBJpTzbaMTm_VIH3Xe2kKckonrrlKT0A',
        dataType: 'json',
        crossDomain: true,
        data: obj,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function successCallback(response) {
      $window.location.reload();
  }, function errorCallback(response) {
    alert("Sorry couldn't connect!");
  
  });
 

  };
  $scope.update1=function(index){
    $("#myModal").modal('show');
    $scope.index = index;
  };
  $scope.update2= function(){
     var obj = {
      "_id": {
        "$oid": $scope.index
    },
    "aadhar_no": $scope.maadhar_no,
    "username": $scope.muname,
    "name": $scope.mname,
    "dob": $scope.mdob

    };
    $http({
        method: "POST",
        url: 'https://api.mlab.com/api/1/databases/mydb/collections/aadhar?apiKey=DBJpTzbaMTm_VIH3Xe2kKckonrrlKT0A',
        dataType: 'json',
        crossDomain: true,
        data: obj,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function successCallback(response) {
     $window.location.reload();
  }, function errorCallback(response) {
    alert("Sorry couldn't connect!");
  
  });
 

  };
  $scope.delete1 = function(index1){
  $http({
        method: "DELETE",
        url: 'https://api.mlab.com/api/1/databases/mydb/collections/aadhar/'+index1+'?apiKey=DBJpTzbaMTm_VIH3Xe2kKckonrrlKT0A',
        dataType: 'json',
        crossDomain: true,
        headers: {
            'Content-Type': 'application/json'
        }
 }).then(function successCallback(response) {  
      $window.location.reload();

     
  }, function errorCallback(response) {
    alert("Sorry couldn't connect/delete!");
  
  });


 };

    
	});





	scotchApp.controller('pancontroller', function($scope,$http,$window) {
    $http({
        method: "GET",
        url: "https://api.mlab.com/api/1/databases/mydb/collections/pan?apiKey=DBJpTzbaMTm_VIH3Xe2kKckonrrlKT0A",
        dataType: 'json',
        crossDomain: true,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function successCallback(response) {
   //alert(JSON.stringify(response.data));
   $scope.myData1 = response.data;



     /*if(Object.keys(response.data).length === 0){
    //alert("bb");
    $scope.one = false;
    $scope.two = false;

   }
   else{
    alert("aa");
    $scope.license_form = false;
    $scope.license_data = false;
   }*/

  
  }, function errorCallback(response) {
    alert("Sorry couldn't connect!");
  
  });
  $scope.submit=function(){
    var obj = {
    "pan_no": $scope.pan_no,
    "username": $scope.uname,
    "name": $scope.name,
    "annual_income": $scope.annual_income

    };
    $http({
        method: "POST",
        url: 'https://api.mlab.com/api/1/databases/mydb/collections/pan?apiKey=DBJpTzbaMTm_VIH3Xe2kKckonrrlKT0A',
        dataType: 'json',
        crossDomain: true,
        data: obj,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function successCallback(response) {
      $window.location.reload();
  }, function errorCallback(response) {
    alert("Sorry couldn't connect!");
  
  });
 

  };
  $scope.update1=function(index){
    $("#myModal").modal('show');
    $scope.index = index;
  };
  $scope.update2= function(){
     var obj = {
      "_id": {
        "$oid": $scope.index
    },
    "pan_no": $scope.mpan_no,
    "username": $scope.muname,
    "name": $scope.mname,
    "annual_income": $scope.mannual_income

    };
    $http({
        method: "POST",
        url: 'https://api.mlab.com/api/1/databases/mydb/collections/pan?apiKey=DBJpTzbaMTm_VIH3Xe2kKckonrrlKT0A',
        dataType: 'json',
        crossDomain: true,
        data: obj,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function successCallback(response) {
     $window.location.reload();
  }, function errorCallback(response) {
    alert("Sorry couldn't connect!");
  
  });
 

  };

  $scope.delete1 = function(index1){
  $http({
        method: "DELETE",
        url: 'https://api.mlab.com/api/1/databases/mydb/collections/pan/'+index1+'?apiKey=DBJpTzbaMTm_VIH3Xe2kKckonrrlKT0A',
        dataType: 'json',
        crossDomain: true,
        headers: {
            'Content-Type': 'application/json'
        }
 }).then(function successCallback(response) {  
      $window.location.reload();

     
  }, function errorCallback(response) {
    alert("Sorry couldn't connect/delete!");
  
  });


 };

    
	});


