(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-85112736-1', 'auto');
ga('send', 'pageview');

$(function(){
    // Function used to preload images
    $.fn.preload = function(callback) {
        this.each(function(){
            $('<img/>')[0].src = 'img/'+this;
        });
        if(callback && typeof callback == "function") {
            setTimeout(function(){
                callback();
            }, 1000);
        }
    };

    $(['full_header.png','home_shoes.png']).preload(function() {
        $("#header").load("templates/header.html", function () {
            $(".header-img").fadeIn( "slow");
        });
        $("#menu").load("templates/menu.html", function() {
            // When setting up the menu, put in a 100 millisecond
            // delay to ensure the menu loads completely before
            // adding the listeners
            setTimeout(function(){
                setupMenu();
            }, 100);
        });
        $("#content").load("templates/home.html", function() {
            $(".home-img").fadeIn( "slow");
        });
    });

    // preload remaining pictures so rest of page loads well.
    $(['Wendy.png','T-1.png','T-2.png','spacer.png','walking-shoes.png']).preload();

    // Setup menu
    function setupMenu() {
        $("#home").addClass("selected");

        $("#home").on("click", function () {
            $("#content").load("templates/home.html", function() {
                $(".home-img").fadeIn( "slow");
            });

            $(".menu-link").removeClass("selected");
            $("#home").addClass("selected");

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

                    $(".menu-link").removeClass("selected");
                    $("#aboutUs").addClass("selected");
                    $("#ourStory").addClass("selected");
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

            $(".menu-link").removeClass("selected");
            $("#events").addClass("selected");

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

            $(".menu-link").removeClass("selected");

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

            $(".menu-link").removeClass("selected");
            $("#aboutUs").addClass("selected");
            $("#stats").addClass("selected");

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

            $(".menu-link").removeClass("selected");
            $("#aboutUs").addClass("selected");
            $("#ourStory").addClass("selected");

            // Google Analytics
            ga('send', {
                hitType: 'event',
                eventCategory: 'Navigation',
                eventAction: 'click',
                eventLabel: 'Our Story',
                transport: 'beacon'
            });
        });
        $("#guidelines").on("click", function () {
            $("#about-content").load("templates/guidelines.html");

            $(".menu-link").removeClass("selected");
            $("#aboutUs").addClass("selected");
            $("#guidelines").addClass("selected");

            // Google Analytics
            ga('send', {
                hitType: 'event',
                eventCategory: 'Navigation',
                eventAction: 'click',
                eventLabel: 'Guidelines',
                transport: 'beacon'
            });
        });
        $("#testimonials").on("click", function () {
            $("#about-content").load("templates/testimonials.html");

            $(".menu-link").removeClass("selected");
            $("#aboutUs").addClass("selected");
            $("#testimonials").addClass("selected");

            // Google Analytics
            ga('send', {
                hitType: 'event',
                eventCategory: 'Navigation',
                eventAction: 'click',
                eventLabel: 'Testimonials',
                transport: 'beacon'
            });
        })
        $("#contactUs").on("click", function () {
            $("#about-content").load("templates/contact.html");

            $(".menu-link").removeClass("selected");
            $("#aboutUs").addClass("selected");
            $("#contactUs").addClass("selected");

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

