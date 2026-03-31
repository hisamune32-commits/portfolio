$(function(){
    // スライドショー
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

    $('.slick').slick({
        autoplay:true,
        autoplaySpeed:2000,
        Infinity:false,
        prevArrow:'<button class="slick_arrow slick_prev_arrow"></button>',
        nextArrow:'<button class="slick_arrow slick_next_arrow"></button>',
        dots:true
    });

    // ヘッダーナビゲーション
    $('li').hover(function(){
        if($(this).hasClass('blue')){
            $(this).removeClass('blue');
        }
        else{
            $(this).addClass('blue');
        }
    });

    // ボタン
    $('.btn').hover(function(){
        if($(this).hasClass('btn1')){
            $(this).removeClass('btn1');
        }
        else{
            $(this).addClass('btn1');
        }
    });

    // 送信ボタン
    $('.submit').hover(function(){
        if($(this).hasClass('btn1')){
            $(this).removeClass('btn1');
        }
        else{
            $(this).addClass('btn1');
        }
    });

    $('.end-2').hover(function(){
        if($(this).hasClass('btn1')){
            $(this).removeClass('btn1');
        }
        else{
            $(this).addClass('btn1');
        }
    });

// WORK写真
    $('.works-img').hide().fadeIn('slow');

    // $('.popup').magnificPopup({
    //     type: 'image'
    // });

});



