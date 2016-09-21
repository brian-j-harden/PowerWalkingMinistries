$(function(){
    $("#header").load("templates/header.html");
    $("#menu").load("templates/menu.html", function() {
        // When setting up the menu, put in a 100 millisecond
        // delay to ensure the menu loads completely before
        // adding the listeners
        setTimeout(function(){
            setupMenu();
        }, 100);
    });
    $("#content").load("templates/home.html");
    $("#footer").load("templates/footer.html");

    // Setup menu
    function setupMenu() {
        $("#home").on("click", function () {
            $("#content").load("templates/home.html");
        });
        $("#aboutUs").on("click", function () {
            $("#content").load("templates/about.html", function() {
                // When setting up the left menu, put in a 100 millisecond
                // delay to ensure the menu loads completely before
                // adding the listeners
                $("#about-content").load("templates/story.html");
                setTimeout(function(){
                    setupAboutMenu();
                }, 100);
            });
        });
        $("#events").on("click", function () {
            $("#content").load("templates/events.html");
        });
        $("#give").on("click", function () {
            $("#content").load("templates/thanks.html");
        });
    }

    function setupAboutMenu() {
        $("#ourStory").on("click", function () {
            $("#about-content").load("templates/story.html");
        });
        $("#contactUs").on("click", function () {
            $("#about-content").load("templates/contact.html");
        });
    }
});

