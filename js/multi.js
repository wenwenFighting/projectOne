(function($) {
    var left = "0%";
    appcan.button("#nav-left", "btn-act",
    function() {
        left = (left == "70%")?"0%":"70%";
        $("#Page_1").css("box-shadow","rgba(120, 120, 120, 0.298039) -10px 0px 8px").animate({
            "translateX":left
        },500)
        $("#Header").animate({
            "translateX":left
        },500)
        
        
    });
    appcan.button("#nav-right", "btn-act",
    function() {
        left = (left == "-70%")?"0%":"-70%";
        $("#Page_1").css("box-shadow","rgba(120, 120, 120, 0.298039) 10px 0px 8px").animate({
            "translateX":left
        },500)
        $("#Header").animate({
            "translateX":left
        },500)
        
    });

    appcan.ready(function() {
        $.scrollbox($("body")).on("releaseToReload",
        function() { //After Release or call reload function,we reset the bounce
            $("#ScrollContent").trigger("reload", this);
        }).on("onReloading",
        function(a) { //if onreloading status, drag will trigger this event
        }).on("dragToReload",
        function() { //drag over 30% of bounce height,will trigger this event
        }).on("draging",
        function(status) { //on draging, this event will be triggered.
        }).on("release",
        function() { //on draging, this event will be triggered.
        }).on("scrollbottom",
        function() { //on scroll bottom,this event will be triggered.you should get data from server
            $("#ScrollContent").trigger("more", this);
        }).reload();
    })

})($);