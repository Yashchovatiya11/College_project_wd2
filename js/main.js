(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // Initiate the wowjs
    new WOW().init();


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('fast');
        } else {
            $('.back-to-top').fadeOut('fast');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonial carousel
    $(".testimonial-carousel-1").owlCarousel({
        loop: true,
        dots: false,
        margin: 25,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 10000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            575: {
                items: 1
            },
            767: {
                items: 2
            },
            991: {
                items: 3
            }
        }
    });



    // model hide & show
    $(document).ready(function () {

        var x = $('#searchModal').val();

        $('.btn-search').click(function () {
            if (x.style == "block") {
                $('#searchModal').hide();
            }
            else {
                $('#searchModal').show();
            }
        });


        $('.btn-close').click(function () {
            $('#searchModal').hide();
        });
    });



    $(document).ready(function () {
        
        $("#all").click(function () {
            $('.all').show();
        })
        $("#Wedding").click(function () {
            $('.Wedding').show();
            $('.Corporate').hide();
            $('.Cocktail').hide();
            $('.Buffet').hide();
        })
        $("#Corporate").click(function () {
            $('.Wedding').hide();
            $('.Corporate').show();
            $('.Cocktail').hide();
            $('.Buffet').hide();
        })
        $("#Cocktail").click(function () {
            $('.Wedding').hide();
            $('.Corporate').hide();
            $('.Cocktail').show();
            $('.Buffet').hide();
        })
        $("#Buffet").click(function () {
            $('.Wedding').hide();
            $('.Corporate').hide();
            $('.Cocktail').hide();
            $('.Buffet').show();
        })

    })


    $(document).ready(function () {
        
        $("#alll").click(function () {
            $('.all').show();
        })
        $("#starter").click(function () {
            $('.ospe').hide();
            $('.mainc').hide();
            $('.offer').hide();
            $('.stater').show();
            $('.drink').hide();
        })
        $("#maincourse").click(function () {
            $('.ospe').hide();
            $('.mainc').show();
            $('.offer').hide();
            $('.stater').hide();
            $('.drink').hide();
        })
        $("#drink").click(function () {
            $('.ospe').hide();
            $('.mainc').hide();
            $('.offer').hide();
            $('.stater').hide();
            $('.drink').show();
        })
        $("#offer").click(function () {
            $('.ospe').hide();
            $('.mainc').hide();
            $('.offer').show();
            $('.stater').hide();
            $('.drink').hide();
        })
        $("#ourspecial").click(function () {
            $('.ospe').show();
            $('.mainc').hide();
            $('.offer').hide();
            $('.stater').hide();
            $('.drink').hide();
        })

    })

})(jQuery);

