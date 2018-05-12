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
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			.when('/license', {
				templateUrl : 'pages/license.html',
				controller  : 'licensecontroller as $lc'
			})

			.when('/aadhar', {
				templateUrl : 'pages/aadhar.html',
				controller  : 'aadharcontroller as $ac'
			})

			.when('/pan', {
				templateUrl : 'pages/pan.html',
				controller  : 'pancontroller as $pc'
			});
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
		var x = localStorage.getItem("username");
    if(x === null)
    {
      alert("you need to sign-in first!");
       window.location = "login.html";
    }
    else
    {
      $scope.message = 'welcome to GOV-DOCS, ' + x;
    }
    $scope.search = function(){
      if($scope.search_text.includes('pan') || $scope.search_text.includes('PAN') ){
        location.href= "#pan";
      }
      else if($scope.search_text.includes('aadhar')){
        window.location = "#aadhar";

      }
      else if($scope.search_text.includes('license')){
        window.location = "#license";

      }
      else{
        alert("Oops! no such document found");
      }

    };

   		
	});

	scotchApp.controller('licensecontroller', function($scope, $http, $window) {
    var vm = this;
    var uname =  localStorage.getItem("username"); 

    $http({
        method: "GET",
        url: "https://api.mlab.com/api/1/databases/mydb/collections/license?q={'username':'"+uname+"'}&apiKey=DBJpTzbaMTm_VIH3Xe2kKckonrrlKT0A",
        dataType: 'json',
        crossDomain: true,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function successCallback(response) {
   $scope.myData1 = response.data;
   
  
  if(Object.keys(response.data).length === 0){
    $scope.div1 = true;
    $scope.div2 = false;

   }
   else{
    $scope.div1 = false;
    $scope.div2 = true;
    var x=JSON.stringify(response.data[0]);
  var obj = JSON.parse(x);
  id=obj._id.$oid;
   }

  
  }, function errorCallback(response) {
    alert("Sorry couldn't connect!");
  
  });
  $scope.submit=function(){
    var obj12 = {
    "license_no": vm.license_no,
    "username": uname,
    "name": vm.name,
    "vehicle_category": vm.vehicle_category

    };
    $http({
        method: "POST",
        url: 'https://api.mlab.com/api/1/databases/mydb/collections/license?apiKey=DBJpTzbaMTm_VIH3Xe2kKckonrrlKT0A',
        dataType: 'json',
        crossDomain: true,
        data: obj12,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function successCallback(response) {
    
      
      $window.location.reload();
  }, function errorCallback(response) {
    alert("Sorry couldn't connect!");
  
  });
 

  };
  $scope.edit1=function(){
    $("#myModal").modal('show');
  };
  $scope.edit2= function(){
     var obj = {
      "_id": {
        "$oid": id
    },
    "license_no": $scope.mlicense_no,
    "username": uname,
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
	});




	scotchApp.controller('aadharcontroller', function($scope, $http, $window) {
    var ac = this;
    var uname =  localStorage.getItem("username"); 
   


    $http({
        method: "GET",
        url: "https://api.mlab.com/api/1/databases/mydb/collections/aadhar?q={'username':'"+uname+"'}&apiKey=DBJpTzbaMTm_VIH3Xe2kKckonrrlKT0A",
        dataType: 'json',
        crossDomain: true,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function successCallback(response) {
   //alert(JSON.stringify(response.data));
   $scope.myData1 = response.data;
   //alert(JSON.stringify($scope.myData1));
   
  if(Object.keys(response.data).length === 0){
    $scope.div1 = true;
    $scope.div2 = false;
    
   }
   else{
    var x=JSON.stringify(response.data[0]);
    var obj = JSON.parse(x);
    id=obj._id.$oid;
    
    $scope.div1 = false;
    $scope.div2 = true;
   }

  
  }, function errorCallback(response) {
    alert("Sorry couldn't connect!");
  
  });
  $scope.submit=function(){
    var obj = {
    "aadhar_no": ac.aadhar_no,
    "username": uname,
    "name": ac.name,
    "dob": ac.dob

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
  $scope.edit1=function(){
    $("#myModal").modal('show');
  };
  $scope.edit2= function(){
     var obj = {
      "_id": {
        "$oid": id
    },
    "aadhar_no": $scope.maadhar_no,
    "username": uname,
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

    
	});





	scotchApp.controller('pancontroller', function($scope,$http,$window) {
    var pc = this;
		 var uname =  localStorage.getItem("username"); 
   

    $http({
        method: "GET",
        url: "https://api.mlab.com/api/1/databases/mydb/collections/pan?q={'username':'"+uname+"'}&apiKey=DBJpTzbaMTm_VIH3Xe2kKckonrrlKT0A",
        dataType: 'json',
        crossDomain: true,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function successCallback(response) {
   //alert(JSON.stringify(response.data));
   $scope.myData1 = response.data;
   
  if(Object.keys(response.data).length === 0){
    $scope.div1 = true;
    $scope.div2 = false;
   }
   else{
    var x=JSON.stringify(response.data[0]);
   var obj = JSON.parse(x);
  id=obj._id.$oid;
    $scope.div1 = false;
    $scope.div2 = true;
   }
  
  }, function errorCallback(response) {
    alert("Sorry couldn't connect!");
  
  });
  $scope.submit=function(){
    var obj = {
    "pan_no": pc.pan_no,
    "username": uname,
    "name": pc.name,
    "annual_income": pc.annual_income

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
  $scope.edit1=function(){
    $("#myModal").modal('show');
  };
  $scope.edit2= function(){
     var obj = {
      "_id": {
        "$oid": id
    },
    "pan_no": $scope.mpan_no,
    "username": uname,
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
	});




