angular.module('angusApp')
    .controller('HerdController', ["$scope", function($scope){
        var herdLocation = "../data/herd.json";
        console.log("Herd Here");

        $scope.herd = $.getJSON(herdLocation, function(data){
            console.log(data);
            return data;
        })
    }]);