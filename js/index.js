$(document).ready(function() {
        $('.slider').slick({
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false
    });
    
    //Burger open, close
    $(".sandwich, .menu_item").click(function() {
      $(".sandwich").toggleClass("active");
    });
    
    //show menu click
    $(".header__menu__btn").click(function(){
        $(".header__nav__nav2").slideToggle(500);
       
    });
    
    // Scroll UP
    $(".footer__btnUp").click(function() {
        $('body,html').animate({ scrollTop: 0 }, 'slow');
    });
	
	//Icon btn-up animate

		$(".footer__btnUp ").hover(function(){
		    $(".footer__btnUp").addClass('animated bounce');
		});
		
	//Calendar
	
	$(function(){
	    
           $("#datepicker").datepicker();
           
	    
            
       });
});