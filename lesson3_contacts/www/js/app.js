document.addEventListener("deviceready",init,false);

function init(){
    document.querySelector("#pickContact").addEventListener("touchend",doContactPicker,false);
}
function doContactPicker(){
    navigator.contacts.pickContact(function(contact){
       var s = "";
        s += "<h2>" + getName(contact) + "</h2>";
        if( contact.emails && contact.emails.length){
            s += "Email: " + contact.emails[0].value + "<br />";
        }
        if( contact.phoneNumbers && contact.phoneNumbers.length ){
            s += "PhoneNumber: " + contact.phoneNumbers[0].value + "<br />";
        }
        if( contact.photos && contact.photos.length ){
            s += "<p><img src='" + contact.photos[0].value + "'/></p>";
        }

        document.querySelector("#selectedContact").innerHTML = s;
    },function (error) {
        navigator.notification.alert(error,null,"Failure");
    });
}