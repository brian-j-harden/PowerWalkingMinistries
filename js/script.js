$(function(){
    $("#header").load("templates/header.html");
    $("#menu").load("templates/menu.html", function() {
        // When setting up the menu, put in a 100 milliscond
        // delay to ensure the menu loads completely before
        // adding the listeners
        setTimeout(function(){
            setupMenu();
        }, 100);
    });
    $("#content").load("templates/home.html");
    $("#footer").load("footer.html");

    // Setup menu
    function setupMenu() {
        $("#home").on("click", function () {
            $("#content").load("templates/home.html");
        });
        $("#aboutUs").on("click", function () {
            $("#content").load("templates/about.html");
        });
        $("#events").on("click", function () {
            $("#content").load("templates/events.html");
        });
        $("#give").on("click", function () {
            $("#content").load("templates/thanks.html");
        });
    }
});

