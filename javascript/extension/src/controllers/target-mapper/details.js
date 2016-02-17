"use strict";

chrome.runtime.onMessage.addListener(function(message,sender){
  alert(message)
});

angular.module("Mapper")
  .controller("MapperController", ["$scope","ChromeHelpers", function ($scope,ChromeHelpers) {


    $scope.toggleInteractiveMode = function () {
      ChromeHelpers.sendToBrowser("changeInteractiveMode", {
        inInteractiveMode: $scope.inInteractiveMode
      });
      $scope.inInteractiveMode = !$scope.inInteractiveMode
    };

  }]);