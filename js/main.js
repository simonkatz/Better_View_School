
// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

//implement bx-slider
$('.facility').bxSlider({
  mode: 'fade',
  auto: true,
  controls: false,
  captions: true,
  pager: true,
  pagerCustom: '#bx-facility'
});

//implement bx-slider
$('.pupils').bxSlider({
  mode: 'fade',
  auto: true,
  controls: false,
  captions: true,
  pager: true,
  pagerCustom: '#bx-pupils'
});

//implement bx-slider
$('.extra').bxSlider({
  mode: 'fade',
  auto: true,
  controls: false,
  captions: true,
  pager: true,
  pagerCustom: '#bx-extra'
});

$('.about').bxSlider({
  mode: 'fade',
  auto: true,
  controls: false,
  captions: true,
  pause: 7000,
});

$('#fullpage').fullpage({
    sectionsColor: ['white', '#F5F5F5'],
    loopHorizontal: false,
    anchors:['firstPage', 'secondPage', 'footer'],
    paddingTop: '30px',
    paddingBottom: '30px',
    fitToSection: false,
    autoScrolling: false,
    paddingTop: 0,
    paddingBottom: 0,
});
 
$('.marquee').marquee({
    duration: 25000,
    gap: 50,
    delayBeforeStart: 15000,
    direction: 'up',
    duplicated: true,
    startVisible: true,
    pauseOnHover: true,
    pauseOnCycle: true
});

$('.swipebox').swipebox();