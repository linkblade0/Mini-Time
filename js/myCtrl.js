angular.module('timeApp')
.controller('mainCtrl', function($scope){

$scope.name = 'Joey Lago';
$scope.ctrlFormat = 'medium';

$scope.updateFormat = function() {
  if($scope.ctrlFormat === 'medium') {
    $scope.ctrlFormat = 'short'
  } else {
    $scope.ctrlFormat = 'medium'
  }
}

})
