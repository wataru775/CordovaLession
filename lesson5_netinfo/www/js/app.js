document.addEventListener("deviceready",init,false);
function init(){
    var lastStatus = "";
    document.addEventListener("offline",disableForm,false);
    document.addEventListener("online",enableForm,false);

    $('#searchButton').on("click",function(e){
        var search = $("#searchField").val();
        if( search === "")return;

        $(this).prop("disable",true);

        $("#results").html("<i>Doing a search for " + search +"</i>");
/*
        $.get("https://api.github.com/search/respositories",{"q":search},
            function(res,code){
                if(res.items && res.items.length) {
                    var s = "<h2>Results</h2>";

                    for (var i = 0, len = res.items.length ; i < len; i ++){
                        var entry = res.items[i];
                        s += "<p><strong>" + entry.name + "</strong><br/>";
                        s += "By : " + entry.owner.login + "<br/>";
                        s += "Updated : " + entry.updated_at + "<br/>";
                        s += entry.description;
                        s += "</p>";
                    }
                    $("#results").html(s);
                }
                $("#searchButton").prop("disabled",false);
            });
*/
        $("#searchButton").prop("disabled",false);

        });

    function disableForm(){
        $("#searchButton").prop("disabled",true);
        if(lastStatus != "disconnected"){
            lastStatus = "disconnected";
            navigator.notification.alert("Search is disabled while you're offline.",null,"offline!");
        }
    }

    function enableForm(){
        $("#searchButton").prop("disabled",false);
        if(lastStatus != "connected" && lastStatus != ""){
            lastStatus = "dconnected";
            navigator.notification.alert("Search is now enabled.",null,"online!");
        }

    }
}