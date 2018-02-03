jQuery(function($){
    $('.li_1').on('mouseenter',function(){
        $(this).children().eq(1).stop().show().stop().animate({
                top:46,
                 opacity:0.7,
                },1000);
        })
         $('.li_1').on('mouseleave',function(){
            $(this).children().eq(1).stop().hide().stop().animate({
                            top:146,
                            opacity:1,
                    },1000);
                });
            $('.lbt .container').carousel({
                width:1200,
                height:500,
                imgs:['img/lunbo1.jpg','img/lunbo2.jpg','img/lunbo3.jpg','img/lunbo4.jpg']
            })
            $.ajax({
                type:'get',
                url:"api/data/index.json",
                async:true,
                success:function(date){
                    var $ul=$('<ul/>');
                    $ul.addClass('clearfix');
                    $.each(date,function(idx,item){
                        var $p=$('<p/>').text(item.intrduct);
                        var $h2=$('<h2/>').text(item.name);
                        var $img=$('<img src="'+item.imgurl+'"/>');
                        var $span=$('<span/>')
                        $span.append($img);
                        var $a=$('<a/>').append($span).append($h2).append($p);

                        var $li=$('<li/>').append($a)
                        $ul.append($li);
                            })
                        $('.main .container').append($ul);

                    }

                  });
            $('.go_top').hide();
            $(window).scroll(function(){
                if($(window).scrollTop()>=500){
                    $('.go_top').fadeIn();
                            
                }
                else{
                    $('.go_top').fadeOut();

                }
                if($(window).scrollTop()>=150){
                    $('.nav').addClass('xiding')
                }else{
                        $('.nav').removeClass('xiding')
                        }
            })
            $('.go_top').on('click',function(){
                        
                $('body,html').animate({
                    scrollTop:0
                },1000);
            })
})