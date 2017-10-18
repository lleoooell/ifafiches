// alert('hello');	

var app = angular.module("monmodule", []);


app.controller('ctrl1',function($scope, $http){
	$scope.test = 'hello angular';
	$http.get('/webservice').then(function(res){
		if(res){
			console.log(res);
			$scope.response = res.data;
			console.log('success');
		}
	}, function(err){
		console.log(err);
	});
});

