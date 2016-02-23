angular.module('timeApp')
.directive('showTime', function() {
  return {
    restrict: 'E',
    template: '<div> The current time is {{time | date: format}}</div><div> The GMT time is {{gmtTime | date: format}}</div>',
    scope: {
      format: '=',
      update: '&'
    },
    link: function(scope, element, attrs) {


      var currentTime = new Date();

      element.css({
        fontWeight: 'bold',
        color: 'blue'
      })

      element.on('mousedown', function() {
        scope.time=new Date();
        scope.gmtTime = new Date(scope.time.toGMTString());
        scope.update();

        scope.$apply();
      })


      scope.time = currentTime;
      scope.gmtTime = new Date(currentTime.toGMTString());

    },
    controller: function($scope,myService, $timeout) {
      myService.validateEmail($scope.email).then(function() {
        
      })
    }

  }
})
