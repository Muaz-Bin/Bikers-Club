$(document).ready(function(){
  $('.navbar-toggler,.close-icon,.nav-link').click(function(){
    $('.navigation-menu').toggleClass('open');
  })
  $('.carousel').owlCarousel({
    items:1,
    loop:true,
    nav:true,
    navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    autoplay:true,
    autoplayTimeout:4000,
  });
  $('.carousel-3').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:4000,
    nav:true,
    navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    responsive:{
      0:{
        items:1,
      },
      768:{
        items:2,
        margin:30,
      },
    }
  });
  $('.carousel-4').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:4000,
    nav:true,
    navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    responsive:{
      0:{
        items:2,
        margin:20,
      },
      768:{
        items:4,
        margin:25,
      },
    }
  });
});
