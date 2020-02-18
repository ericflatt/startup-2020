$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {


    if (this.hash !== "") {

      event.preventDefault();

      // Store hash
      var hash = this.hash;


      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){


        window.location.hash = hash;
      });
    }
  });
});

function form() {
  window.location='https://docs.google.com/forms/d/e/1FAIpQLSfstMpJ4x2dnDOSSj-NnfY8WMX6qWb1epoaAIY8NZyhDXKnoA/viewform';
}


$(function() {
    $("#contactButton").click(function() {
      $(".contactFormContainer").addClass("active");
    });
    $(".cancelButton").click(function() {
        $(".contactFormContainer").removeClass("active");
      });
  });

  $('#nav').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollThreshold: 0
  });

  $( function() {
  
    var $gallery = $('.carousel').flickity({
      pageDots: false
    });
  
    var flickity = $gallery.data('flickity');
    
    var $galleryNav = $('.carousel-nav');
    var $galleryNavItems = $galleryNav.find('li');
    
    $gallery.on( 'select.flickity', function() {
      $galleryNav.find('.is-selected').removeClass('is-selected');
      $galleryNavItems.eq( flickity.selectedIndex ).addClass('is-selected');
    });
    
    $galleryNav.on( 'click', 'li', function() {
      var index = $(this).index();
      $gallery.flickity( 'select', index );
    });
    
  });
 

//flickity options
var elem = document.querySelector('.carousel-nav');
var flkty = new Flickity( elem, {
  cellAlign: 'left',
  contain: 'false',
  asNavFor:'.withNav',
  draggable:'false',
});

  

var countDownDate = new Date("Feb 7, 2020 11:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("countdown").innerHTML = days + " days " + hours + " hours "
  + minutes + " minutes " + seconds + " seconds ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);


var navVideo=document.getElementById("navVideo");

function Pause()
{
  navVideo.pause();
  navVideo.currentTime = 0;
}

function Play()
{
  if (navVideo.paused)
  navVideo.play();
}

