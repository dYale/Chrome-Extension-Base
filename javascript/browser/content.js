chrome.runtime.onMessage.addListener (
  function(request, sender, sendResponse) {
    console.log(request);

  }
);

function sendMessage(method, data) {
  data = data || {};
  console.log(method);
  chrome.runtime.sendMessage(
    {"method": method, "data": data}
  );
}

//this injects our HTML templates into the current page
$.get(chrome.extension.getURL('/views/detail.html'), function(data) {
  $(data).appendTo('body');
});
