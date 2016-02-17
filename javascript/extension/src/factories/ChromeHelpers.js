"use strict";

angular.module("Mapper")
  .factory("ChromeHelpers", ["$http", function ($http) {

    function ChromeHelpers() {
    }

    ChromeHelpers.saveLocalData = function() {
      // Save it using the Chrome extension storage API.
      chrome.storage.sync.set({'value': theValue}, function() {
        // Notify that we saved.
        message('Settings saved');
      });
    };

    ChromeHelpers.sendToBrowser = function (method, data) {
      // Send a message to the active tab
      chrome.tabs.getSelected(null, function (activeTab) {
        console.log('TOGLGLGIN')
        chrome.tabs.sendMessage(activeTab.id, {method: method, data: data});
      });
    };

    return ChromeHelpers;

  }]);