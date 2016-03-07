angular.module('app.controllers', [])
  
.controller('pageCtrl', function($scope, $ionicPopup) {
	$scope.result = '';

	$scope.btnClicked = function(btn){
		if(btn == 'C')
			$scope.result = '';
		else if(btn == '='){
			if($scope.result == ''){
				return;
			}
			try{
				$scope.result = eval($scope.result);
			}
			catch(err){
				$ionicPopup.alert({
					title: 'Entrada inválida',
					template: 'Tente novamente...'
				});

				$scope.result = '';
			}
		}
		else
			$scope.result += btn;
	};

})
 