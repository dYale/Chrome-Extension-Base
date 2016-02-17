var inInteractiveMode = true;
var messageCallbacks = {};

messageCallbacks.changeInteractiveMode = function(){
    inInteractiveMode = !inInteractiveMode;
    console.log(inInteractiveMode);
}

$(window).ready(function () {

    $(document).click(function (e) {
        console.log(inInteractiveMode);
        sendMessage("Sending!", {
            data: "STUFF"
        })
    });
});
