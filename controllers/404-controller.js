angular.module('angusApp')
    .controller('404Controller', ['$scope', function($scope){
        console.log("error, you are on an unknown page!");
    }]);