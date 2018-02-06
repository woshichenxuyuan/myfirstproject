require(['config'],function(){
    require(['jquery'],function($){
        $('header').load('../html/header',function(){

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
        });
        var id=window.location.search;
            id=decodeURI(id);
            console.log(id);
            id=id.slice(1).split('=');
            id=id[1];
        console.log(id);
        var $dt_bl=$('.dt_bl');
        var $dt_br=$('.dt_br');
        $.ajax({
            type:'get',
            url:'../api/data/goodslist.json',
            success:function(res){
                // console.log('WAT2112.BA0950'=='WAT2112.BA0951');
                $.each(res,function(idx,item){
                    console.log(item.id==id)
                    if(item.id==id){
                        for(var i=0;i<4;i++){
                            var $img=$('<img src="'+item['imgurl']+'"/>');
                            
                         
                            $('.dt_bl_l').append($img);
                        }
                        var $img_1=$('<img src="'+item['imgurl']+'"/>');

                        console.log($img)
                        $dt_bl.append($img_1);
                        var $p=$('<p>'+item.name+item.id+'</p>')
                        $('.dt_brt').append($p);
                        var $span=$('<span/>').text('￥'+item.price);
                        var $p_1=$('.dl_brz').children();
                        $p_1.eq(0).append($span)
                        var $span_1=$('<span/>').text()
                        $ul=$('<ul/>');
                        $ul.addClass('clearfix');
                        var $li=$("<li/>");
                        var $i=$('<i/>');
                        var $img_2=$('<img src="'+item['imgurl']+'"/>');
                        var $span=$('<span>'+item.name+'<br>'+'￥'+item.price+'<span/>');
                        $i.append($img_2);
                        $li.append($i).append($span)
                        $ul.append($li);
                         $('.zuijin').append($ul);
                    }
                });
                    $ul=$('<ul/>');
                    $ul.addClass('clearfix');
                for(var i=0;i<6;i++){
                    
                        var $li=$("<li/>");
                        var $i=$('<i/>');
                        var $img_2=$('<img src="'+res[i]['imgurl']+'"/>');
                        var $span=$('<span>'+res[i].name+'<br>'+'￥'+res[i].price+'<span/>');
                        $i.append($img_2);
                        $li.append($i).append($span)
                        $ul.append($li);
                }
                $('.left_top_1').append($ul);

            }
        })
        $('footer').load('../html/footer');
    });
})