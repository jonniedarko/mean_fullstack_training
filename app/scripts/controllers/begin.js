'use strict';

var METABOLIC_CONSTANT = 5.677;

angular.module('trainingApp')
    .controller('BeginCtrl', function($scope) {
        $scope.title = 'Calorie and Macro Calculator';
        $scope.user = {};
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
                                    ,value: 1.2
                                }
                                ,{
                                    title: "Professional Athlete"
                                    ,description: "You Exercise approx <b>2 times a Day<b/>"
                                    ,value: 1.2
                                }
                                ];

        $scope.goals = {
                        current: {
                            title:"Mainteance"
                            ,calories: 100
                            ,protein: 101
                            ,fats: 102
                            ,carbs:103
                        }
                        ,loss: {
                            title:"Fat Loss"
                            ,calories: 200
                            ,protein: 201
                            ,fats: 202
                            ,carbs:203
                        }
                        ,gain:{
                            title:"Muscle Gain"
                            ,calories: 300
                            ,protein: 301
                            ,fats: 302
                            ,carbs:303
                        }
                    }
                    $scope.setGoals=function(){

                    };
        $scope.getMetaRate = function(){
            var  meta = 88.362 + (13.397 * parseFloat(  $scope.user.weight) )
                            +(5.799 * parseFloat(  $scope.user.height) )
                            -(5.677 * parseFloat(  $scope.user.age) ) || null;

            return (!isNaN(meta) && (meta!=null)) ? parseFloat(meta).toFixed(2) : "Please Fill Out the above Form";
        };
    });