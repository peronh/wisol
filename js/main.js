jQuery(document).ready(function ($) {

  // Header fixed and Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
      $('#header').addClass('header-fixed');
      $('#header #logo img').css('width','150px');
      $('.nav-menu a').css('color', 'white');
      $('#mobile-nav-toggle i').css('color', 'white');

    } else {
      $('.back-to-top').fadeOut('slow');
      $('#header').removeClass('header-fixed');
      $('#header #logo img').css('width','300px');
      $('.nav-menu a').css('color', '#8db600');
        $('#mobile-nav-toggle i').css('color', '#8db600');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs
  new WOW().init();

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function (e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function (e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smoth scroll on page hash links
  $('a[href*="#"]:not([href="#"])').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (!$('#header').hasClass('header-fixed')) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Porfolio filter
  $("#portfolio-flters li").click(function () {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    var selectedFilter = $(this).data("filter");
    $("#portfolio-wrapper").fadeTo(100, 0);

    $(".portfolio-item").fadeOut().css('transform', 'scale(0)');

    setTimeout(function () {
      $(selectedFilter).fadeIn(100).css('transform', 'scale(1)');
      $("#portfolio-wrapper").fadeTo(300, 1);
    }, 300);
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // custom code


    var jssor_1_SlideshowTransitions = [
        {$Duration:500,$Delay:10,$Cols:8,$Rows:8,$Clip:15,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:2049,$Easing:$Jease$.$OutQuad},
    ];

    var jssor_1_options = {
        $AutoPlay: 1,
        $SlideshowOptions: {
            $Class: $JssorSlideshowRunner$,
            $Transitions: jssor_1_SlideshowTransitions,
            $TransitionsOrder: 1
        },
        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$
        },
        $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$
        }
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    /*#region responsive code begin*/

    var MAX_WIDTH = 1920;
     //var MAX_HEIGHT = 10000;
    // var MAX_BLEEDING = 1;

    // function ScaleSlider() {
    //     var containerElement = jssor_1_slider.$Elmt.parentNode;
    //     var containerWidth = containerElement.clientWidth;
    //
    //     if (containerWidth) {
    //         var originalWidth = jssor_1_slider.$OriginalWidth();
    //         var originalHeight = jssor_1_slider.$OriginalHeight();
    //
    //         var containerHeight = containerElement.clientHeight || originalHeight;
    //
    //         var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);
    //         var expectedHeight = Math.min(MAX_HEIGHT || containerHeight, containerHeight);
    //
    //         //constrain bullets, arrows inside slider area, it's optional, remove it if not necessary
    //         // if (MAX_BLEEDING >= 0 && MAX_BLEEDING < 1) {
    //         //     var widthRatio = expectedWidth / originalWidth;
    //         //     var heightRatio = expectedHeight / originalHeight;
    //         //     var maxScaleRatio = Math.max(widthRatio, heightRatio);
    //         //     var minScaleRatio = Math.min(widthRatio, heightRatio);
    //         //
    //         //     maxScaleRatio = Math.min(maxScaleRatio / minScaleRatio, 1 / (1 - MAX_BLEEDING)) * minScaleRatio;
    //         //     expectedWidth = Math.min(expectedWidth, originalWidth * maxScaleRatio);
    //         //     expectedHeight = Math.min(expectedHeight, originalHeight * maxScaleRatio);
    //         // }
    //
    //         jssor_1_slider.$ScaleSize(expectedWidth, expectedHeight, MAX_BLEEDING);
    //         jssor_1_slider.$Elmt.style.top = ((containerHeight - expectedHeight) / 2) + "px";
    //         jssor_1_slider.$Elmt.style.left = ((containerWidth - expectedWidth) / 2) + "px";
    //     }
    //     else {
    //         window.setTimeout(ScaleSlider, 30);
    //     }
    // }
    function ScaleSlider() {
        var containerElement = jssor_1_slider.$Elmt.parentNode;
        var containerWidth = containerElement.clientWidth;

        if (containerWidth) {

            var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

            jssor_1_slider.$ScaleWidth(expectedWidth);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }



    ScaleSlider();

    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
     //$(window).bind("orientationchange", OnOrientationChange);

});
