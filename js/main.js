(function() {
    "use strict";

    $("#navToggle").click(function() {
        $(".menu-collapse").toggleClass("d-block");
        $(".header__nav").toggleClass("menu-opened");
        $(".menu-collapse").toggleClass("overlayMenu");
        $(this).toggleClass("active");
        $(".header-overlay__wrap").toggleClass("open");
        // $("body").toggleClass("locked");
    });


    function initialize() {
        var mapOptions = {
            zoom: 14,
            center: new google.maps.LatLng(23.7893837, 90.38596079999999),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById('map'), mapOptions);

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(23.7893837, 90.38596079999999),
        });

        marker.setMap(map);
        var infowindow = new google.maps.InfoWindow({
            content: "Hello World!"
        });

        infowindow.open(map, marker);

        //add overlay
        map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('map-overlay'));
    }

    // navigator.geolocation.getCurrentPosition(initialize);
    jQuery(document).ready(function($) {


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();

        $('.gallery-btn a').click(function() {

            $(".gallery-btn a").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr('data-filter');
            $(".gellery-item").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
        // jQeury smooth scroll
        $("li.smooth-scroll a").bind("click", function(event) {
            var $anchor = $(this);
            var headerH = "50";
            $("html, body")
                .stop()
                .animate({
                    scrollTop: $($anchor.attr("href"))
                        .offset()
                        .top - headerH + "px"
                }, 1200, "easeOutCirc");

            event.preventDefault();

        });
        //jquery scroll spy
        $("body").scrollspy({
            target: ".navbar-collapse",
            offset: 95
        });
        new WOW().init();
        //Pretty Photo
        $("a[data-gallery^='prettyPhoto']").prettyPhoto({
            social_tools: false
        });
    });
}(jQuery));