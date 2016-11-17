document.addEventListener("deviceready",init,false);
function init(){
    document.querySelector("#alertTest").addEventListener("touchend",
        function(){
            navigator.notification.alert("This is a test ...",null,"Alert Test","OK");
    },false);
    document.querySelector("#confirmTest").addEventListener("touchend",
        function(){
            function youConfirmed(index){
                navigator.notification.alert("you cheked button : " + index + " ! " , null);
            }
            navigator.notification.confirm("Cordova is awesome.",youConfirmed,"Confirm This",["Yes","No","Maybe"]);
        },false);
    document.querySelector("#promptTest").addEventListener("touchend",
        function(){
            function promptAnswer(answer){
                navigator.notification.alert("you said : " + answer.input1 + " ! " , null);
            }
            navigator.notification.prompt("What is your favorite food?",promptAnswer,"Question",["OK"],"Cookies");
        },false);

    document.querySelector("#beepTest").addEventListener("touchend",
        function(){
            navigator.notification.beep(2);
        },false);

}