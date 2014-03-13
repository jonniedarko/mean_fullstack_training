'use strict';

var METABOLIC_CONSTANT = 5.677;

angular.module('trainingApp')
    .controller('BeginCtrl', function($scope) {
        $scope.title = 'Calorie and Macro Calculator';
        $scope.user = {

        };

        $scope.getName = function(){
            if($scope.user.name===undefined || $scope.user.name==="")
                return "";

            return $scope.user.name+"'s";
        }
        $scope.activityLevels = [{
                                    title: "Little or No Exercise"
                                    ,description: "You are Lazy and avoid exercise"
                                    ,value: 1.2
                                }
                                ,{
                                    title: "Light Exercise"
                                    ,description: "Exercise 1-3 times a week"
                                    ,value: 1.375
                                }
                                ,{
                                    title: "Moderate Exercise"
                                    ,description: "Exercise 3-5 times a week"
                                    ,value: 1.55
                                }
                                ,{
                                    title: "Heavey Exercise"
                                    ,description: "You Exercise 6-7 times a week"
                                    ,value: 1.725
                                }
                                ,{
                                    title: "Professional Athlete"
                                    ,description: "You Exercise approx 2 times a Day"
                                    ,value: 1.9
                                }
                                ];

        $scope.goals = {
                        current: {
                            title:"Mainteance"
                            ,calories: 0
                            ,protein: 0
                            ,fats: 0
                            ,carbs:0
                        }
                        ,loss: {
                            title:"Fat Loss"
                            ,calories: 0
                            ,protein: 0
                            ,fats: 0
                            ,carbs:0
                        }
                        ,gain:{
                            title:"Muscle Gain"
                            ,calories: 0
                            ,protein: 0
                            ,fats: 0
                            ,carbs:0
                        }
                    }
                    console.log($scope.goals);
                        $scope.updateNutrition=function(){
                            if(($scope.user.sex === "male" || $scope.user.sex === "female") && $scope.user.weight>0 && $scope.user.height>0 && $scope.user.age>0 && $scope.user.activityLevel>0){
                            $scope.goals.current.calories = parseFloat($scope.user.bmr * $scope.user.activityLevel)|| 0;
                            $scope.goals.loss.calories = $scope.goals.current.calories * 0.85 || 0;
                            $scope.goals.gain.calories = $scope.goals.current.calories * 1.15 || 0;

                            $scope.goals.current.protein = $scope.user.weight*2.204 || 0;
                            $scope.goals.loss.protein = $scope.user.weight*2.204 || 0;
                            $scope.goals.gain.protein = $scope.user.weight*2.204*1.5 || 0;

                            $scope.goals.current.carbs = ($scope.goals.current.calories*0.3)/4 || 0; 
                            $scope.goals.loss.carbs = ($scope.goals.loss.calories*0.15)/4 || 0;
                            $scope.goals.gain.carbs = ($scope.goals.gain.calories*0.3)/4 || 0;

                            //=(calories-(protein*4)-(carbs*4))/9
                            $scope.goals.current.fats = ($scope.goals.current.calories -($scope.goals.current.protein*4)-($scope.goals.current.carbs*4))/9 || 0;
                            $scope.goals.loss.fats = ($scope.goals.loss.calories -($scope.goals.loss.protein*4)-($scope.goals.loss.carbs*4))/9 || 0;
                            $scope.goals.gain.fats = ($scope.goals.gain.calories -($scope.goals.gain.protein*4)-($scope.goals.gain.carbs*4))/9 || 0;
                        }

                    };
        $scope.getMetaRate = function(){
            //=88.362+(13.397*weight)+(5.799*height)-(5.677*age)
          var meta; 
          if($scope.user.sex === "male"){
                    meta = (88.362 + (13.397 * parseFloat(  $scope.user.weight) )
                            +(5.799 * parseFloat(  $scope.user.height) )
                            -(5.677 * parseFloat(  $scope.user.age) ) || 0 ); //3071.487 
                    }else if($scope.user.sex === "female"){
                        meta = (447.593 + (9.247 * parseFloat(  $scope.user.weight) )
                            +(3.098 * parseFloat(  $scope.user.height) )
                            -(4.33 * parseFloat(  $scope.user.age) ) || 0 );
                    }
                    else meta = null;
                        //=447.593+(9.247*C4)+(3.098*C5)-(4.33*C6)
         $scope.user.bmr= meta;

            return (!isNaN(meta) && (meta!=null)) ? parseFloat(meta).toFixed(2) : "Please Fill Out the above Form";
        };
    });