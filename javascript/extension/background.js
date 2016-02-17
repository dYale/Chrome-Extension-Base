//window.sendMessage = function (method, content){
//  // Send a message to the active tab
//  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//    var activeTab = tabs[0];
//    chrome.tabs.sendMessage(activeTab.id, {method: method, data: content.data});
//  });
//};
//
//document.addEventListener('DOMContentLoaded', function () {
//  $('#toggle-interactive-mode').on('click', function(){
//    sendMessage("changeInteractiveMode", { "data": inInteractiveMode });
//    inInteractiveMode = !inInteractiveMode;
//  });
//});
//
//chrome.extension.onRequest.addListener(function(request, sender) {
//  //run methods here by calling request.method
//  //return values to the content
//  alert(JSON.stringify(request.data));
//  window.messageCallbacks[request.method]( request.data );
//});
//
//window.returnMessage = function (method, data) {
//  chrome.tabs.getSelected(null, function(tab) {
//    chrome.tabs.sendMessage(tab.id, {method: method, data: data});
//  });
//};