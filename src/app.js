var app = angular.module('app',[]);

app.controller('TestCtrl', function($scope){
  $scope.title = "Directive Demo practice";
  $scope.number_array= ['1', '2', '3'];
  $scope.letter_array= ['a', 'b', 'c', 'd', 'e'];
});

app.directive('customMenu', function(){
  return {
    scope: {
      menuItems: '=items'
    },
    templateUrl: "../templates/menu.html",
    link: function(scope, element){
      scope.inside_directive = "valor";
      scope.selected = ""
      scope.select = function(item){
        scope.selected = item;
      }
      scope.isSelected = function(item){
        if (item == scope.selected){
          return "active"
        }else{
          return ""
        }
      }
        
    }  
  }
});

