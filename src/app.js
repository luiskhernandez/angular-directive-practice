var app = angular.module('app',['Chronicle']);

app.controller('TestCtrl', function($scope, Chronicle){
  $scope.title = "Directive Demo practice";
  $scope.number_array= ['1', '2', '3'];
  $scope.letter_array= ['a', 'b', 'c', 'd', 'e'];
  random = function(){
    random_ = _.random(0, 100);
    return random_;
  }
  generateRandomSection = function(){
    section = {
      title: "Random Title "+ random(),
      questions:[
        generateRandomQuestion(), generateRandomQuestion(), generateRandomQuestion(), generateRandomQuestion()
      ]
    }
    return section;
  }

  generateRandomQuestion = function(){
    question= {
      question: "Question "+random(),
      options:[
        {value: "1", text: "text ramdon "+random()},
        {value: "1", text: "text ramdon "+random()},
        {value: "1", text: "text ramdon "+random()},
        {value: "1", text: "text ramdon "+random()},
        {value: "1", text: "text ramdon "+random()},
        {value: "1", text: "text ramdon "+random()},
        {value: "1", text: "text ramdon "+random()},
        {value: "1", text: "text ramdon "+random()},
        {value: "1", text: "text ramdon "+random()},
        {value: "1", text: "text ramdon "+random()}
      ]
    }
    return question;
  }
  addRandomSection = function(){
    section = generateRandomSection();
    $scope.contentObject.sections.push(section);
  }
  $scope.contentObject = {
    sections: [
    {
      title: "Nba Question",
      questions:[
      {
        question: "Who is White Chocolate ?",
        options:[
        {value: "1", text: "D-rose"},
        {value: "2", text: "J-Will "},
        {value: "3", text: "Allen Iversion"}
        ]
      },
      {
        question: "Who is Black Mamba ?",
        options:[
        {value: "1", text: "Kobe Bryant"},
        {value: "2", text: "J-Will "},
        {value: "3", text: "Jeremy lin"}
        ]
      },
        {
          question: "Who is the youngest MVP  ?",
          options:[
          {value: "1", text: "D-rose"},
          {value: "2", text: "J-Will "},
          {value: "3", text: "Allen Iversion"}
          ]
        },
          {
            question: "How is the lord of the Rings?",
            options:[
            {value: "1", text: "Phil Jackson"},
            {value: "2", text: "Steve Keer"},
            {value: "3", text: "Michael Jordan"}
            ]
          }
      ]
    },
    {
      title: "Comics",
      questions:[
      {
          question: "Who is Iroman ?",
          options:[
          {value: "1", text: "Tony Stark"},
          {value: "2", text: "Bruce Wayne"},
          {value: "3", text: "Barry Allen"}
          ]
      },
      {
          question: "Who is Batman ?",
          options:[
          {value: "1", text: "Tony Stark"},
          {value: "2", text: "Bruce Wayne"},
          {value: "3", text: "Barry Allen"}
          ]
      },
      {
          question: "Who is Flash ?",
          options:[
          {value: "1", text: "Tony Stark"},
          {value: "2", text: "Bruce Wayne"},
          {value: "3", text: "Barry Allen"}
          ]
      },
      ]
    }
    ]
  };
  _.times(30, function(n){
    addRandomSection();
  });

  $scope.history = Chronicle.record('contentObject', $scope);
});


app.directive("exam", function(){
  return {
    restrict: 'E',
    templateUrl: "../templates/exam_directive.html"
  }
});

app.directive("sectionScope", function(){
  return{
    scope:false,
    restrict: 'E',
    link: function(scope, elem, attrs, parent){
    }
  }
});
app.directive('controlBar', function(){
  return{
    restrict: 'E',
    templateUrl: "../templates/control-bar.html",
    scope: {
      array: "=array",
      item: "=item",
      first: "=first",
      last: "=last",
      index: "=index"
    },
    link: function(scope, elem, attrs, parent){
      scope.down = function(){
        _.move(scope.array,scope.index, scope.index + 1);
      }
      scope.up = function(){
        _.move(scope.array,scope.index, scope.index - 1);
      }
      scope.delete= function(){
        scope.array = scope.array.splice(scope.index, 1);
      }
    }
    
  }
});
app.directive('jsonTree', function(){
  return{
    restrict: 'E',
    scope:{
      json: "=json"
    },
    templateUrl: "../templates/json_tree.html"
  }
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

