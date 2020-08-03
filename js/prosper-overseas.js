/*
 *
 *   INSPINIA - Responsive Admin Theme
 *   version 2.7
 *
 */


$(document).ready(function() {

        
    var colorlist = localStorage.getItem('skin')

    console.log('storage ' + colorlist );
    if(colorlist && colorlist !== ''){
        $('body').attr('class', colorlist);
    }else {
        $('body').attr('class', 'theme-clr skin-blue');
    }

    $('#skin-blue').click(skinblue);
    $('#skin-blue-light').click(skinbluelight);
    $('#skin-yellow').click(skinyellow);
    $('#skin-green').click(skingreen);
    $('#skin-red').click(skinred);
    $('#skin-azo-orange').click(skinazoorange);
    $('#skin-rose').click(skinrose);
    $('#skin-corbalt-blue').click(skincorbaltblue);
    $('#skin-mezenta').click(skinmezenta);
    $('#skin-vollet').click(skinvollet);
    $('#skin-light-green').click(skinlightgreen);
    $('#skin-turq-green').click(skinturqgreen);
    function skinblue() {
        localStorage.setItem('skin', 'theme-clr skin-blue');
        $('body').attr('class', 'theme-clr skin-blue');
    }
    function skinbluelight() {
        localStorage.setItem('skin', 'theme-clr skin-blue-light');
        $('body').attr('class', 'theme-clr skin-blue-light');
    }
    function skinyellow() {
        localStorage.setItem('skin', 'theme-clr skin-yellow');
        $('body').attr('class', 'theme-clr skin-yellow');
    }
    function skingreen() {
        localStorage.setItem('skin', 'theme-clr skin-green');
        $('body').attr('class', 'theme-clr skin-green');
    }
    function skinred() {
        localStorage.setItem('skin', 'theme-clr skin-red');
        $('body').attr('class', 'theme-clr skin-red');
    }
    function skinazoorange() {
        localStorage.setItem('skin', 'theme-clr skin-azo-orange');
        $('body').attr('class', 'theme-clr skin-azo-orange');
    }
    function skinrose() {
        localStorage.setItem('skin', 'theme-clr skin-rose');
        $('body').attr('class', 'theme-clr skin-rose');
    }
    function skincorbaltblue() {
        localStorage.setItem('skin', 'theme-clr skin-corbalt-blue');
        $('body').attr('class', 'theme-clr skin-corbalt-blue');
    }
    function skinmezenta() {
        localStorage.setItem('skin', 'theme-clr skin-mezenta');
        $('body').attr('class', 'theme-clr skin-mezenta');
    }
    function skinvollet() {
        localStorage.setItem('skin', 'theme-clr skin-vollet');
        $('body').attr('class', 'theme-clr skin-vollet');
    }
    function skinlightgreen() {
        localStorage.setItem('skin', 'theme-clr skin-light-green');
        $('body').attr('class', 'theme-clr skin-light-green');
    }
    function skinturqgreen() {
        localStorage.setItem('skin', 'theme-clr skin-turq-green');
        $('body').attr('class', 'theme-clr skin-turq-green');
    }


    $('.theme-sidebar-btn').on('click', function() {
        $(".theme-sidebar").toggleClass("open-active");
    });

    // Add body-small class if window less than 768px
    if ($(this).width() < 769) {
        $('body').addClass('body-small')
    } else {
        $('body').removeClass('body-small')
    }

    // MetisMenu
    $('#side-menu').metisMenu();

    // Collapse ibox function
    $('.collapse-link').on('click', function() {
        var ibox = $(this).closest('div.ibox');
        var button = $(this).find('i');
        var content = ibox.children('.ibox-content');
        content.slideToggle(200);
        button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
        ibox.toggleClass('').toggleClass('border-bottom');
        setTimeout(function() {
            ibox.resize();
            ibox.find('[id^=map-]').resize();
        }, 50);
    });

    // Close ibox function
    $('.close-link').on('click', function() {
        var content = $(this).closest('div.ibox');
        content.remove();
    });

    // Fullscreen ibox function
    $('.fullscreen-link').on('click', function() {
        var ibox = $(this).closest('div.ibox');
        var button = $(this).find('i');
        $('body').toggleClass('fullscreen-ibox-mode');
        button.toggleClass('fa-expand').toggleClass('fa-compress');
        ibox.toggleClass('fullscreen');
        setTimeout(function() {
            $(window).trigger('resize');
        }, 100);
    });

    // Close menu in canvas mode
    $('.close-canvas-menu').on('click', function() {
        $("body").toggleClass("mini-navbar");
        SmoothlyMenu();
    });

    // Run menu of canvas
    $('body.canvas-menu .sidebar-collapse').slimScroll({
        height: '100%',
        railOpacity: 0.9
    });

    // Open close right sidebar
    $('.right-sidebar-toggle').on('click', function() {
        $('#right-sidebar').toggleClass('sidebar-open');
    });

    // Initialize slimscroll for right sidebar
    $('.sidebar-container').slimScroll({
        height: '100%',
        railOpacity: 0.4,
        wheelStep: 10
    });

    // Open close small chat
    $('.open-small-chat').on('click', function() {
        $(this).children().toggleClass('fa-comments').toggleClass('fa-remove');
        $('.small-chat-box').toggleClass('active');
    });
    
     $(".refresh").click(function(){
            location.reload(true);
        });

    // Initialize slimscroll for small chat
    $('.small-chat-box .content').slimScroll({
        height: '234px',
        railOpacity: 0.4
    });
    
    $( window ).on('load', function() {
				
		function PageLoader() {
		$('.loader').fadeOut();
		}
		PageLoader();	
			
	});

    // Small todo handler
    $('.check-link').on('click', function() {
        var button = $(this).find('i');
        var label = $(this).next('span');
        button.toggleClass('fa-check-square').toggleClass('fa-square-o');
        label.toggleClass('todo-completed');
        return false;
    });

    // Append config box / Only for demo purpose
    // Uncomment on server mode to enable XHR calls
    // $.get("skin-config.html", function (data) {
    //     if (!$('body').hasClass('no-skin-config'))
    //         $('body').append(data);
    // });

    // Minimalize menu
    $('.navbar-minimalize').on('click', function() {
        $("body").toggleClass("mini-navbar");
        SmoothlyMenu();
        $('#container-applications-students').highcharts().reflow();
        $('#container-commissions').highcharts().reflow();
        $('#container-top-schools').highcharts().reflow();
    });

    // Tooltips demo
    $('.tooltip-demo').tooltip({
        selector: "[data-toggle=tooltip]",
        container: "body"
    });


    // Full height of sidebar
    function fix_height() {
        var heightWithoutNavbar = $("body > #wrapper").height() - 61;
        $(".sidebar-panel").css("min-height", heightWithoutNavbar + "px");

        var navbarheight = $('nav.navbar-default').height();
        var wrapperHeight = $('#page-wrapper').height();

        if (navbarheight > wrapperHeight) {
            $('#page-wrapper').css("min-height", navbarheight + "px");
        }

        if (navbarheight < wrapperHeight) {
            $('#page-wrapper').css("min-height", $(window).height() + "px");
        }

        if ($('body').hasClass('fixed-nav')) {
            if (navbarheight > wrapperHeight) {
                $('#page-wrapper').css("min-height", navbarheight + "px");
            } else {
                $('#page-wrapper').css("min-height", $(window).height() - 60 + "px");
            }
        }

    }

    fix_height();

    // Fixed Sidebar
    $(window).bind("load", function() {
        if ($("body").hasClass('fixed-sidebar')) {
            $('.sidebar-collapse').slimScroll({
                height: '100%',
                railOpacity: 0.9
            });
        }
    });

    // Move right sidebar top after scroll
    $(window).scroll(function() {
        if ($(window).scrollTop() > 0 && !$('body').hasClass('fixed-nav')) {
            $('#right-sidebar').addClass('sidebar-top');
        } else {
            $('#right-sidebar').removeClass('sidebar-top');
        }
    });

    $(window).bind("load resize scroll", function() {
        if (!$("body").hasClass('body-small')) {
            fix_height();
        }
    });

    $("[data-toggle=popover]")
        .popover();

    // Add slimscroll to element
    $('.full-height-scroll').slimscroll({
        height: '100%'
    })
});


// Minimalize menu when screen is less than 768px
$(window).bind("resize", function() {
    if ($(this).width() < 769) {
        $('body').addClass('body-small')
    } else {
        $('body').removeClass('body-small')
    }
});

// Local Storage functions
// Set proper body class and plugins based on user configuration
$(document).ready(function() {
    if (localStorageSupport()) {

        var collapse = localStorage.getItem("collapse_menu");
        var fixedsidebar = localStorage.getItem("fixedsidebar");
        var fixednavbar = localStorage.getItem("fixednavbar");
        var boxedlayout = localStorage.getItem("boxedlayout");
        var fixedfooter = localStorage.getItem("fixedfooter");

        var body = $('body');

        if (fixedsidebar == 'on') {
            body.addClass('fixed-sidebar');
            $('.sidebar-collapse').slimScroll({
                height: '100%',
                railOpacity: 0.9
            });
        }

        if (collapse == 'on') {
            if (body.hasClass('fixed-sidebar')) {
                if (!body.hasClass('body-small')) {
                    body.addClass('mini-navbar');
                }
            } else {
                if (!body.hasClass('body-small')) {
                    body.addClass('mini-navbar');
                }

            }
        }

        if (fixednavbar == 'on') {
            $(".navbar-static-top").removeClass('navbar-static-top').addClass('navbar-fixed-top');
            body.addClass('fixed-nav');
        }

        if (boxedlayout == 'on') {
            body.addClass('boxed-layout');
        }

        if (fixedfooter == 'on') {
            $(".footer").addClass('fixed');
        }
    }
});

// check if browser support HTML5 local storage
function localStorageSupport() {
    return (('localStorage' in window) && window['localStorage'] !== null)
}

// For demo purpose - animation css script
function animationHover(element, animation) {
    element = $(element);
    element.hover(
        function() {
            element.addClass('animated ' + animation);
        },
        function() {
            //wait for animation to finish before removing classes
            window.setTimeout(function() {
                element.removeClass('animated ' + animation);
            }, 2000);
        });
}

function SmoothlyMenu() {
    if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
        // Hide menu in order to smoothly turn on when maximize menu
        $('#side-menu').hide();
        // For smoothly turn on menu
        setTimeout(
            function() {
                $('#side-menu').fadeIn(400);
            }, 200);
    } else if ($('body').hasClass('fixed-sidebar')) {
        $('#side-menu').hide();
        setTimeout(
            function() {
                $('#side-menu').fadeIn(400);
            }, 100);
    } else {
        // Remove all inline style from jquery fadeIn function to reset menu state
        $('#side-menu').removeAttr('style');
    }
}

// Dragable panels
function WinMove() {
    var element = "[class*=col]";
    var handle = ".ibox-title";
    var connect = "[class*=col]";
    $(element).sortable({
            handle: handle,
            connectWith: connect,
            tolerance: 'pointer',
            forcePlaceholderSize: true,
            opacity: 0.8
        })
        .disableSelection();
}

$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

(function($){
    $(window).on("load",function(){
        $(".content").mCustomScrollbar({
                snapAmount:40,
                scrollButtons:{enable:true},
                keyboard:{scrollAmount:40},
                mouseWheel:{deltaFactor:40},
                scrollInertia:400
            });
        
    });
})(jQuery);


  

