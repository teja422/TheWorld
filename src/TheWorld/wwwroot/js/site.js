//  site.js

(function () {
    //var ele = $("#username");
    //ele.text("Narendra");

    //$("#main").mouseover(function () {
    //    $("#main").css("background-color", "#888");
    //});

    //$("#main").mouseleave(function () {
    //    $("#main").css("background-color", "");
    //});

    //var menuItems = $("ul.menu li a");
    //menuItems.on("click", function () {
    //    var me = $(this);
    //    alert(me.text());
    //});

    var $sidebarAndWrapper = $("#sidebar,#wrapper");
    $("#sidebarToggle").on("click", function () {
        $sidebarAndWrapper.toggleClass("hide-sidebar");
        if ($sidebarAndWrapper.hasClass("hide-sidebar")) {
            $(this).text("Show Sidebar");
        } else {
            $(this).text("Hide Sidebar");
        }
    });
})();