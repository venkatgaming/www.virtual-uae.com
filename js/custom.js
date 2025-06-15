/*
Template: Xeronix - IT Solutions
Author: peacefulqode.com
Version: 1.0
Design and Developed by: PeacefulQode

*/

/*================================================
[  Table of contents  ]
==================================================

==> Page Loader
==> Search Button
==> Accordion
==> Sidebar Toggle
==> Sticky Header
==> Portfolio Image Effect
==> Slick Slider
==> Owl Carousel
==> Progressbar
==> Back To Top
==> Isotope
==> Counter
==> WOW
==> Magnific Popup
==> Service Image Effect
==> Service Image Effect 2
==> Service Image Effect 3
==> Service Image Effect 4
==> Award Image Effect 1
==> Award Image Effect 2
==> Team Image Effect 1
==> Team Image Effect 2
==> Swiper Slider
==> Simplebar

==================================================
[ End table content ]
================================================*/


(function (jQuery) {
    "use strict";
    jQuery(window).on('load', function (e) {


        /*==================================================
        [ Page Loader ]
        ==================================================*/
        jQuery("#pq-loading").fadeOut();
        jQuery("#pq-loading").delay(0).fadeOut("slow");

        var Scrollbar = window.Scrollbar;


        /*==================================================
        [ Search Button ]
        ==================================================*/
        jQuery('#pq-seacrh-btn').on('click', function () {
            jQuery('.pq-search-form').slideToggle();
            jQuery('.pq-search-form').toggleClass('pq-form-show');
            if (jQuery('.pq-search-form').hasClass("pq-form-show")) {
                jQuery(this).html('<i class="ti-close"></i>');
            } else {
                jQuery(this).html('<i class="ti-search"></i>');
            }
        });


        /*==================================================
        [ Accordion ]
        ==================================================*/
        jQuery('.pq-accordion-block .pq-accordion-box .pq-accordion-details').hide();
        jQuery('.pq-accordion-block .pq-accordion-box:first').addClass('pq-active').children().slideDown('slow');
        jQuery('.pq-accordion-block .pq-accordion-box').on("click", function () {
            if (jQuery(this).children('div.pq-accordion-details').is(':hidden')) {
                jQuery('.pq-accordion-block .pq-accordion-box').removeClass('pq-active').children('div.pq-accordion-details').slideUp('slow');
                jQuery(this).toggleClass('pq-active').children('div.pq-accordion-details').slideDown('slow');
            }
        });


        /*==================================================
        [ Sidebar Toggle ]
        ==================================================*/
        jQuery("#pq-toggle-btn").on('click', function () {
            jQuery('#pq-sidebar-menu-contain').toggleClass("active");
        });
        jQuery('.pq-toggle-btn').click(function () {
            jQuery('body').addClass('pq-siderbar-open');
        });
        jQuery('.pq-close').click(function () {
            jQuery('body').removeClass('pq-siderbar-open');
        });

        /*==================================================
        [ Sticky Header ]
        ==================================================*/
        var view_width = jQuery(window).width();
        if (!jQuery('header').hasClass('pq-header-default') && view_width >= 1023)
        {
            var height = jQuery('header').height();
            jQuery('.pq-breadcrumb').css('padding-top', height * 1.3);
        }
        if (jQuery('header').hasClass('pq-header-default'))
        {
            jQuery(window).scroll(function() {
                var scrollTop = jQuery(window).scrollTop();
                if (scrollTop > 300) {
                    jQuery('.pq-bottom-header').addClass('pq-header-sticky animated fadeInDown animate__faster');
                } else {
                    jQuery('.pq-bottom-header').removeClass('pq-header-sticky animated fadeInDown animate__faster');
                }
            });
        }
        if (jQuery('header').hasClass('pq-has-sticky')) {
            jQuery(window).scroll(function() {
                var scrollTop = jQuery(window).scrollTop();
                if (scrollTop > 300) {
                    jQuery('.pq-bottom-header').addClass('pq-header-sticky animated fadeInDown animate__faster');
                } else {
                    jQuery('.pq-bottom-header').removeClass('pq-header-sticky animated fadeInDown animate__faster');
                }
            });
        }

        /*==================================================
        [ Portfolio Image Effect  ]
        ==================================================*/

        jQuery('.pq-portfoliobox-2 .protfolio-tabs-item:first-child').addClass("active");
        jQuery('.pq-portfoliobox-2 .protfolio-tabs-item').on({
            mouseenter: function () {
                jQuery('.pq-portfoliobox-2 .protfolio-tabs-item').removeClass('active');
                jQuery(this).addClass('active');
            },

        });

        /*==================================================
        [ Slick Slider ]
        ==================================================*/

        if (jQuery('.slick-slider-main').length) {
            var $slider = jQuery('.slick-slider-main').slick({
                slidesToShow: 1,
                infinite: false,
                arrows: true,
                autoplay: false,
                dots: false,
                lazyLoad: 'ondemand',
                autoplaySpeed: 3000,
                loop: true,
                asNavFor: '.slick-slider-thumb'
            });
            var $slider2 = jQuery('.slick-slider-thumb').slick({
                slidesToShow: 1,
                infinite: false,
                lazyLoad: 'ondemand',
                asNavFor: '.slick-slider-main',
                autoplay: false,
                dots: false,
                Default: '50px',
                arrows: false,
                centerMode: false,
                loop: true,
                focusOnSelect: true
            });
        }

        /*==================================================
        [ Owl Carousel ]
        ==================================================*/

        jQuery('.owl-carousel').each(function () {
            var app_slider = jQuery(this);
            var rtl = false;
            var prev = 'ion-ios-arrow-back';
            var next = 'ion-ios-arrow-forward';
            var prev_text = 'Prev';
            var next_text = 'Next';
            if (jQuery('body').hasClass('pq-is-rtl')) {
                rtl = true;
                prev = 'ion-ios-arrow-forward';
                next = 'ion-ios-arrow-back';
            }
            if (app_slider.data('prev_text') && app_slider.data('prev_text') != '') {
                prev_text = app_slider.data('prev_text');
            }
            if (app_slider.data('next_text') && app_slider.data('next_text') != '') {
                next_text = app_slider.data('next_text');
            }
            app_slider.owlCarousel({
                rtl: rtl,
                items: app_slider.data("desk_num"),
                loop: app_slider.data("loop"),
                margin: app_slider.data("margin"),
                nav: app_slider.data("nav"),
                dots: app_slider.data("dots"),
                loop: app_slider.data("loop"),
                autoplay: app_slider.data("autoplay"),
                autoplayHoverPause: true,
                autoplayTimeout: app_slider.data("autoplay-timeout"),
                navText: ["<i class='" + prev + "'></i>", "<i class='" + next + "'></i>"],
                responsiveClass: true,
                responsive: {
                    // breakpoint from 0 up
                    0: {
                        items: app_slider.data("mob_sm"),
                        nav: false,
                        dots: false
                    },
                    // breakpoint from 480 up
                    480: {
                        items: app_slider.data("mob_num"),
                        nav: false,
                        dots: false
                    },
                    // breakpoint from 786 up
                    786: {
                        items: app_slider.data("tab_num")
                    },
                    // breakpoint from 1023 up
                    1023: {
                        items: app_slider.data("lap_num")
                    },
                    1199: {
                        items: app_slider.data("desk_num")
                    }
                }
            });
        });

        /*==================================================
        [ Progressbar ]
        ==================================================*/

        jQuery('.pq-progress-bar > span').each(function () {
            var app_slider = jQuery('.pq-progressbar-box');
            jQuery(this).progressBar({
                shadow: false,
                animation: true,
                height: app_slider.data('h'),
                percentage: false,
                border: false,
                animateTarget: true,
            });
            var progress_bar = jQuery(this);
            var width = jQuery(this).data('percent');
            progress_bar.css({
                'transition': 'width 2s'
            });
            jQuery('.progress-value').css({
                'transition': 'margin 2s'
            });
            setTimeout(function () {
                jQuery(this).show(function () {
                    progress_bar.css('width', width + '%');
                });
            }, 500);
            setTimeout(function () {
                jQuery('.pq-progressbar-style-1  .progress-value').show(function () {
                    jQuery('.pq-progressbar-style-1  .progress-value').css('margin-left', width + 'px');
                });
            }, 500);
            setTimeout(function () {
                jQuery('.pq-progressbar-style-3 .progress-tooltip').show(function () {
                    jQuery('.pq-progressbar-style-3 .progress-tooltip').css('margin-left', width + 'px');
                });
            }, 500);
        });
    });

    /*==================================================
    [ Back To Top ]
    ==================================================*/
    jQuery('#back-to-top').fadeOut();
    jQuery(window).on("scroll", function () {
        if (jQuery(this).scrollTop() > 250) {
            jQuery('#back-to-top').fadeIn(1400);
        } else {
            jQuery('#back-to-top').fadeOut(400);
        }
    });
    jQuery('#top').on('click', function () {
        jQuery('top').tooltip('hide');
        jQuery('body,html').animate({
            scrollTop: 0
        }, 100);
        return false;
    });


    /*==================================================
    [ Isotope ]
    ==================================================*/

    jQuery('.pq-masonry').isotope({
        itemSelector: '.pq-masonry-item',
        masonry: {
            columnWidth: '.grid-sizer',
            // gutter: 0
        }
    });
    jQuery('.pq-grid').isotope({
        itemSelector: '.pq-grid-item',
    });
    jQuery('.pq-filter-button-group').on('click', '.pq-filter-btn', function () {
        var filterValue = jQuery(this).attr('data-filter');
        console.log(filterValue);
        jQuery('.pq-masonry').isotope({ filter: filterValue });
        jQuery('.pq-grid').isotope({ filter: filterValue });
        jQuery('.pq-filter-button-group .pq-filter-btn').removeClass('active');
        jQuery(this).addClass('active');
        updateFilterCounts();
    });
    var initial_items = 5;
    var next_items = 3;
    if (jQuery('.pq-masonry').length > 0) {
        var initial_items = jQuery('.pq-masonry').data('initial_items');
        var next_items = jQuery('.pq-masonry').data('next_items');
    }
    if (jQuery('.pq-grid').length > 0) {
        var initial_items = jQuery('.pq-grid').data('initial_items');
        var next_items = jQuery('.pq-grid').data('next_items');
    }
    function showNextItems(pagination) {
        var itemsMax = jQuery('.visible_item').length;
        var itemsCount = 0;
        jQuery('.visible_item').each(function () {
            if (itemsCount < pagination) {
                jQuery(this).removeClass('visible_item');
                itemsCount++;
            }
        });
        if (itemsCount >= itemsMax) {
            jQuery('#showMore').hide();
        }
        if (jQuery('.pq-masonry').length > 0) {
            jQuery('.pq-masonry').isotope('layout');
        }
        if (jQuery('.pq-grid').length > 0) {
            jQuery('.pq-grid').isotope('layout');
        }
    }
    // function that hides items when page is loaded
    function hideItems(pagination) {
        var itemsMax = jQuery('.pq-filter-items').length;
        // console.log(itemsMax);
        var itemsCount = 0;
        jQuery('.pq-filter-items').each(function () {
            if (itemsCount >= pagination) {
                jQuery(this).addClass('visible_item');
            }
            itemsCount++;
        });
        if (itemsCount < itemsMax || initial_items >= itemsMax) {
            jQuery('#showMore').hide();
        }
        if (jQuery('.pq-masonry').length > 0) {
            jQuery('.pq-masonry').isotope('layout');
        }
        if (jQuery('.pq-grid').length > 0) {
            jQuery('.pq-grid').isotope('layout');
        }
    }
    jQuery('#showMore').on('click', function (e) {
        e.preventDefault();
        showNextItems(next_items);
    });
    hideItems(initial_items);
    function updateFilterCounts() {
        // get filtered item elements
        if (jQuery('.pq-masonry').length > 0) {
            var itemElems = jQuery('.pq-masonry').isotope('getFilteredItemElements');
        }
        if (jQuery('.pq-grid').length > 0) {
            var itemElems = jQuery('.pq-grid').isotope('getFilteredItemElements');
        }
        var count_items = jQuery(itemElems).length;
        // console.log(count_items);
        if (count_items > initial_items) {
            jQuery('#showMore').show();
        } else {
            jQuery('#showMore').hide();
        }
        if (jQuery('.pq-filter-items').hasClass('visible_item')) {
            jQuery('.pq-filter-items').removeClass('visible_item');
        }
        var index = 0;
        jQuery(itemElems).each(function () {
            if (index >= initial_items) {
                jQuery(this).addClass('visible_item');
            }
            index++;
        });
        if (jQuery('.pq-masonry').length > 0) {
            jQuery('.pq-masonry').isotope('layout');
        }
        if (jQuery('.pq-grid').length > 0) {
            jQuery('.pq-grid').isotope('layout');
        }
    }

    /*==================================================
    [ counter ]
    ==================================================*/
    jQuery('.timer').countTo();

    /*==================================================
    [ wow ]
    ==================================================*/

    new WOW().init();


    /*==================================================
    [ Magnific Popup ]
    ==================================================*/
    jQuery(document).ready(function () {
        jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        jQuery('.gallery').each(function () { // the containers for all your galleries
            jQuery(this).magnificPopup({
                delegate: 'a', // the selector for gallery item
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        });
    });

    /*==================================================
    [ Service Image Effect ]
    ==================================================*/

    jQuery('.pq-service-box.pq-style-1:first-child').addClass("active");
    jQuery('.pq-service-box.pq-style-1').on({
        mouseenter: function () {
            jQuery('.pq-service-box.pq-style-1').removeClass('active');
            jQuery(this).addClass('active');
        },
    });

    /*==================================================
    [ Service Image Effect 2 ]
    ==================================================*/

    jQuery('.pq-service-box-2-list').on({
        mouseenter: function () {
            jQuery('.pq-service-box.pq-style-2').removeClass('active');
            jQuery(this).find(".pq-service-box.pq-style-2").addClass('active');
        },
    });

    /*==================================================
    [ Service Image Effect 3 ]
    ==================================================*/

    jQuery('.pq-service-box-5-list .item:nth(0) .pq-service-box.pq-style-5').addClass("active");
    jQuery('.pq-service-box-5-list .item').on({
        mouseenter: function () {
            jQuery('.pq-service-box.pq-style-5').removeClass('active');
            jQuery(this).find(".pq-service-box.pq-style-5").addClass('active');
        },
    });

    /*==================================================
    [ Service Image Effect 4 ]
    ==================================================*/

    jQuery('.pq-service-6-item:nth(0) .pq-service-box.pq-style-6').addClass("active");
    jQuery('.pq-service-6-item').on({
        mouseenter: function () {
            jQuery('.pq-service-box.pq-style-6').removeClass('active');
            jQuery(this).find(".pq-service-box.pq-style-6").addClass('active');
        },

    });

    /*==================================================
    [ Award Image Effect 1 ]
    ==================================================*/

    jQuery('.pq-award-tabs.pq-style-1 .award-tabs-item:first-child').addClass("active");
    jQuery('.pq-award-tabs.pq-style-1 .award-tabs-item').on({
        mouseenter: function () {
            jQuery('.pq-award-tabs.pq-style-1 .award-tabs-item').removeClass('active');
            jQuery(this).addClass('active');
        },
    });

    /*==================================================
    [ Award Image Effect 2 ]
    ==================================================*/

    jQuery('.pq-award-tabs.pq-style-2 .award-tabs-item:first-child').addClass("active");
    jQuery('.pq-award-tabs.pq-style-2 .award-tabs-item').on({
        mouseenter: function () {
            jQuery(this).parent().addClass('parent');
            jQuery('.pq-award-tabs.pq-style-2 .award-tabs-item').removeClass('active');
            jQuery(this).addClass('active');
        },
    });

    /*==================================================
    [ Team Image Effect 1 ]
    ==================================================*/

    jQuery('.pq-team-box-grid.pq-style-2 .item:nth-child(3) .pq-team-box.pq-style-2').addClass("active");
    jQuery('.pq-team-box.pq-style-2').on({
        mouseenter: function () {
            jQuery('.pq-team-box.pq-style-2').removeClass('active');
            jQuery(this).addClass('active');
        },
    });

    /*==================================================
    [ Team Image Effect 2 ]
    ==================================================*/

    jQuery('.pq-team-box-grid.pq-style-3 .item:nth-child(2) .pq-team-box.pq-style-3').addClass("active");
    jQuery('.pq-team-box.pq-style-3').on({
        mouseenter: function () {
            jQuery('.pq-team-box.pq-style-3').removeClass('active');
            jQuery(this).addClass('active');
        },
    });

    /*==================================================
    [ Swiper Slider ]
    ==================================================*/

    var mySwiper = new Swiper(".swiper", {
        autoHeight: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        speed: 500,
        direction: "horizontal",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar"
        },
        loop: false,
        effect: "slide",
        spaceBetween: 30,
        on: {
            init: function () {
                jQuery(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
                jQuery(".swiper-pagination-custom .swiper-pagination-switch").eq(0).addClass("active");
            },
            slideChangeTransitionStart: function () {
                jQuery(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
                jQuery(".swiper-pagination-custom .swiper-pagination-switch").eq(mySwiper.realIndex).addClass("active");
            }
        }
    });
    jQuery(".swiper-pagination-custom .swiper-pagination-switch").click(function () {
        mySwiper.slideTo(jQuery(this).index());
        jQuery(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
        jQuery(this).addClass("active");
    });

    /*==================================================
    [ Simplebar ]
    ==================================================*/

    var SimpleBar = jQuery('.mCustomScrollbar');
    
})(jQuery);