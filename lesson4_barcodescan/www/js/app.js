document.addEventListener("deviceready",init,false);
function init(){

    document.querySelector("#scanBarcode").addEventListener("touchend",
        function(){
            cordova.plugins.barcodeScanner.scan(
                function (result) {
                    alert("We got a barcode\n" +
                        "Result: " + result.text + "\n" +
                        "Format: " + result.format + "\n" +
                        "Cancelled: " + result.cancelled);
                },
                function (error) {
                    alert("Scanning failed: " + error);
                },
                {
                    "preferFrontCamera" : true, // iOS and Android
                    "showFlipCameraButton" : true, // iOS and Android
                    "prompt" : "Place a barcode inside the scan area", // supported on Android only
                    "formats" : "QR_CODE,EAN_8,EAN_13", // default: all but PDF_417 and RSS_EXPANDED
                    "orientation" : "landscape" // Android only (portrait|landscape), default unset so it rotates with the device
                }
            );
        });

}