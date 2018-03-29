$(document).ready(function() {
        $('.slider').slick({
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false
    });
    
        //Burger open, close
        $(".sandwich, .menu_item").click(function() {
          $(".sandwich").toggleClass("active");
        });
        
        //show menu click
        $(".header__menu__btn").click(function(){
            $(".header__nav__nav2").slideToggle();
           
        });
        
        // Scroll UP
        $(".footer__btnUp").click(function() {
	        $('body,html').animate({scrollTop: top}, 2000);
	});
});