'use strict';

var mongoose = require('mongoose'),
  Thing = mongoose.model('Thing');

/**
 * Populate database with sample application data
 */

//Clear old things, then add things in
Thing.find({}).remove(function() {
  Thing.create( {
    name : 'AngularJS',
    info : 'AngularJS is a toolset for building the framework most suited to your application development.',
    logo : 'angular.png',
    awesomeness: 10
  }, {
    name : 'Yo',
    info : 'Yo scaffolds out a new application, writing your Grunt configuration and pulling in relevant Grunt tasks and Bower dependencies that you might need for your build.',
    logo : 'yo.gif',
    awesomeness: 10
  }, {
    name : 'Grunt',
    info : 'Grunt is used to build, preview and test your project, thanks to help from tasks curated by the Yeoman team and grunt-contrib',
    logo : 'grunt.gif',
    awesomeness: 10
  }, {
    name : 'Bower',
    info : 'An excellent document database. Combined with Mongoose to simplify adding validation and business logic.',
    logo : 'bower.gif',
    awesomeness: 10
  }, function() {
      console.log('finished populating things');
    }
  );
});
