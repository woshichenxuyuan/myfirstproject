require(['config'],function(){
    require(['jquery'],function(){
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
        $('footer').load('../html/footer');
        var $main=$('main');
        var itemqty=20;
        var pageNo=1;
        $page=$('.page');
        $.ajax({
            type:'post',
            url:'../api/goodslisit.php',
            data:{
                itemqty:itemqty,
                pageNo:pageNo
            },
            success:function(res){
                var res=JSON.parse(res);
                // console.log(res);
                var $ul=$('<ul/>');
                $ul.addClass('clearfix');
                $.each(res.data,function(idx,item){
                    var $li=$('<li/>').attr('data-id',item.id);
                    var $a=$('<a href="../details.html"></a>')
                    var $img=$('<img src="'+item.imgurl+'"/>');
                    var $p=$('<p>'+item.name+item.id+'</p>');
                    var $span=$('<span >'+item.price+'￥</span>');
                    $a.append($img).append($p).append($span);
                    $li.append($a);
                    $ul.append($li);
                });
                $('.list').append($ul);
                
                var i=res.total/itemqty;
                for(var j=1;j<=i;j++){
                   var $span=$('<span>'+j+'</span>');
                   $span.css({
                    display:'inline-block',
                    width:'30px',
                    height:'30px',
                    border:'1px solid #ccc',
                    textAlign:'center',
                    lineHeight:'30px',
                    marginLeft:'20px'


                   })
                   $page.append($span);
                   $page.children().eq(0).addClass('changeActive'); 
                }
            }
        });
            $page.children().eq(0).addClass('changeActive');
        
        $page.on('click','span',function(){
            var pageNo=$(this).text();
            $(this).siblings().removeClass('changeActive');
            $(this).addClass('changeActive');
            $.ajax({
                type:'post',
                url:'../api/goodslisit.php',
                data:{
                    itemqty:itemqty,
                    pageNo:pageNo
                },
                success:function(res){
                    var res=JSON.parse(res);
                // console.log(res);
                    var $ul=$('<ul/>');
                    $ul.addClass('clearfix');
                    $.each(res.data,function(idx,item){
                        var $li=$('<li/>').attr('data-id',item.id);
                        var $a=$('<a href="../details.html"></a>')
                        var $img=$('<img src="'+item.imgurl+'"/>');
                        var $p=$('<p>'+item.name+item.id+'</p>');
                        var $span=$('<span >'+item.price+'￥</span>');
                        $a.append($img).append($p).append($span);
                        $li.append($a);
                        $ul.append($li);
                    });
                    $ul_1=$('.list ul');
                    console.log($ul_1);
                    $ul_1.remove();
                    $('.list').append($ul);

                    
                }

            })
        });
    })
})