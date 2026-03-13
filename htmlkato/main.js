$(function(){
    AOS.init();

    (new WOW({
        animateClass: 'animate__animated'
    })).init();




    $('.drawer').drawer()

    $('.drawer').on('drawer.opened', function(){
    $('.drawer-nav').addClass('drawer-a');
    });
    
    
    $('.drawer').on('drawer.opened', function(){
    $('.drawer-hamburger').addClass('drawer-b');
    });

    $('.drawer').on('drawer.closed', function(){
    $('.drawer-hamburger').removeClass('drawer-b');
    });

    


});
