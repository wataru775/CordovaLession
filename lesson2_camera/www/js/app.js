document.addEventListener("deviceready",init,false);
function init(){
    function onSuccess(imageData){
        console.log("Success");

        var image = document.getElementById("myImage");
        image.src = imageData;
    }
    function onFailure(message){
        navigator.notification.alert(message,null,"Camera Failure");
    }

    document.querySelector("#takePicture").addEventListener("touchend",
        function(){
            navigator.camera.getPicture(onSuccess,onFailure,{
                quality: 50,
                sourceType: Camera.PictureSourceType.CAMERA,
                destinationType: Camera.DestinationType.FILE_URI
            })
        });

    document.querySelector("#usePicture").addEventListener("touchend",
        function(){
            navigator.camera.getPicture(onSuccess,onFailure,{
                quality: 50,
                sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                destinationType: Camera.DestinationType.FILE_URI
            })
        });

}