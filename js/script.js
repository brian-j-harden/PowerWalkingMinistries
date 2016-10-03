(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-85112736-1', 'auto');
ga('send', 'pageview');

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
//    $("#footer").load("templates/footer.html");

    // Setup menu
    function setupMenu() {
        $("#home").on("click", function () {
            $("#content").load("templates/home.html");

            // Google Analytics
            ga('send', {
                hitType: 'event',
                eventCategory: 'Navigation',
                eventAction: 'click',
                eventLabel: 'Home',
                transport: 'beacon'
            });
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

            // Google Analytics
            ga('send', {
                hitType: 'event',
                eventCategory: 'Navigation',
                eventAction: 'click',
                eventLabel: 'About Us',
                transport: 'beacon'
            });
        });
        $("#events").on("click", function () {
            $("#content").load("templates/events.html");

            // Google Analytics
            ga('send', {
                hitType: 'event',
                eventCategory: 'Navigation',
                eventAction: 'click',
                eventLabel: 'Events',
                transport: 'beacon'
            });
        });
        $("#give").on("click", function () {
            $("#content").load("templates/thanks.html");

            // Google Analytics
            ga('send', {
                hitType: 'event',
                eventCategory: 'Navigation',
                eventAction: 'click',
                eventLabel: 'Give',
                transport: 'beacon'
            });

            setTimeout(function(){
                // Setup listener for donation form
                $('#donate').submit(function() {
                    // Google Analytics
                    ga('send', {
                        hitType: 'event',
                        eventCategory: 'Navigation',
                        eventAction: 'click',
                        eventLabel: 'Donation',
                        transport: 'beacon'
                    });

                    return true; // continue to paypal
                });
            }, 100);
        });
    }

    function setupAboutMenu() {
        $("#stats").on("click", function () {
            $("#about-content").load("templates/stats.html");

            // Google Analytics
            ga('send', {
                hitType: 'event',
                eventCategory: 'Navigation',
                eventAction: 'click',
                eventLabel: 'Statistics',
                transport: 'beacon'
            });
        });
        $("#ourStory").on("click", function () {
            $("#about-content").load("templates/story.html");

            // Google Analytics
            ga('send', {
                hitType: 'event',
                eventCategory: 'Navigation',
                eventAction: 'click',
                eventLabel: 'Our Story',
                transport: 'beacon'
            });
        });
        $("#contactUs").on("click", function () {
            $("#about-content").load("templates/contact.html");

            // Google Analytics
            ga('send', {
                hitType: 'event',
                eventCategory: 'Navigation',
                eventAction: 'click',
                eventLabel: 'Contact Us',
                transport: 'beacon'
            });
        });
    }
});

