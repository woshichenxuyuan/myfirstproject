jQuery(function($){
    var $dl_mima=$('.dl_mima');
    var $dl_saoma=$('.dl_saoma');
// console.log($dl_mima)
    var $saoma=$('.saoma');
    var $mima=$('.mima');
    $saoma.addClass('lightHeight')
    $saoma.on('click',function(){
        
        $(this).addClass('lightHeight')
        $mima.removeClass('lightHeight')
        $dl_saoma.show(1000);
        $dl_mima.hide(1000);
    });
    $mima.on('click',function(){
        
        $(this).addClass('lightHeight')
        $saoma.removeClass('lightHeight')
        $dl_saoma.hide(1000);
        $dl_mima.show(1000);
    });
    $dl_saoma.on('mouseenter',function(){
        $dl_saoma.children().eq(0).stop().animate({
            width:100,
            height:100,
            top:50
        },1000);
        $dl_saoma.children().eq(1).stop().animate({
            left:100,
            opacity:1
        },1000);

    });
    $dl_saoma.on('mouseleave',function(){
        $dl_saoma.children().eq(0).stop().animate({
            width:200,
            height:200,
            top:0
        },1000);
        $dl_saoma.children().eq(1).stop().animate({
            left:200,
            opacity:0
        },1000);

    })
});
