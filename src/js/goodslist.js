require(['config'],function(){
    require(['jquery'],function(){
        $('header').load('../html/header',function(){
            //免登陆
            var str=document.cookie;
            if(str!='[]'){
                str=str.split('; ');
                console.log(str);
                str.forEach(function(item){
                    var arr=item.split('=');
                    console.log(arr);
                    if(arr[0]=='name'){
                        $('.hd_dl').text('欢迎您！'+arr[1]).css({
                                color:'orange'
                            });
    
                }   
            })

            }


            $('.li_1').on('mouseenter',function(){
                $(this).children().eq(1).stop().show().stop().animate({
                        top:46,
                        opacity:0.7,
                        },1000);
            });
            $('.li_1').on('mouseleave',function(){
                $(this).children().eq(1).stop().hide().stop().animate({
                        top:146,
                        opacity:1,
                    },1000);
            });
            function xie(){
                var cookies =document.cookie;
                cookies=cookies.split('; ');
                cookies.forEach(function(item){
                    var arr_c=item.split('=');
                    console.log(arr_c[0])
                    if(arr_c[0]=='goods'){

                        var res=JSON.parse(arr_c[1])
                        res.forEach(function(item){
                            var $li=$('<li/>').addClass(item.id);
                            var $img=$('<img src="'+item['src']+'"/>');
                            var $p=$('<p>'+item.gname+'<br>'+'单价：'+item.price+'<br>'+'数量：'+item.num+'<br>'+'发货站：'+item.place+'</p>');
                            // var $cspan=$('<span/>').text(item.gname);
                            // var $span_1=$('<span/>').text(item.price);
                            $li.append($img).append($p);
                            $('.carList').append($li);
                        });
                        $('.car_son').text(res.length);
                        // console.log(res.length)

                    }
                });

                    $('.car_son').css({
                        color:'orange'
                    })
               $('.car_fat').on('mouseenter',function(){
                    $('.carList').show();
                    $(this).css({
                        color:'orange'

                    })
               });
                $('.car_fat').on('mouseleave',function(){
                    $('.carList').hide();
                     $(this).css({
                        color:'#000'
                        
                    })
               })  
        }
        xie();
        });
        $('footer').load('../html/footer');
        //初始化
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
                    var $a=$('<a href="details.html?id='+item.id+'"></a>')
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
        //点击分页
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
                    var $ul=$('<ul/>');
                    $ul.addClass('clearfix');
                    $.each(res.data,function(idx,item){
                        var $li=$('<li/>').attr('data-id',item.id);
                        var $a=$('<a href="details.html?id='+item.id+'"></a>')
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
                    //排序
                    //大-》小
                    

                    
               
                
                }


            })
        });
        //按款式分类
        //男式
        $p=$('.fx p').children();
        // console.log($btn);
        $p.eq(0).on('click',function(){
            var style=$(this).text();
            $(this).siblings().removeClass('changeActive');
            $(this).addClass('changeActive');
            // console.log($style);
             $.ajax({
            type:'get',
            url:'../api/nanshi.php',
            data:{
                itemqty:itemqty,
                pageNo:pageNo,
                styles:'男式'
            },
            success:function(res){
                var res=JSON.parse(res);
                $('.list ul').remove();
                var $ul=$('<ul/>');
                $ul.addClass('clearfix');
                $.each(res.data,function(idx,item){
                    var $li=$('<li/>').attr('data-id',item.id);
                    var $a=$('<a href="details.html?id='+item.id+'"></a>')
                    var $img=$('<img src="'+item.imgurl+'"/>');
                    var $p=$('<p>'+item.name+item.id+'</p>');
                    var $span=$('<span >'+item.price+'￥</span>');
                    $a.append($img).append($p).append($span);
                    $li.append($a);
                    $ul.append($li);
                });
                $('.list').append($ul);
                   $('.page span').remove();
                
                var i=Math.ceil(res.total/itemqty);
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


                   }).addClass('man');

                   $page.append($span);
                   $page.children().eq(0).addClass('changeActive'); 
                }
            }
        });
        //点击分页
        $page.children().eq(0).addClass('changeActive');
        
        $page.on('click','.man',function(){
            var pageNo=$(this).text();
            console.log(style);
            $(this).siblings().removeClass('changeActive');
            $(this).addClass('changeActive');
            $.ajax({
                type:'get',
                url:'../api/nanshi.php',
                data:{
                    itemqty:itemqty,
                    pageNo:pageNo,
                    styles:'男式'

                },
                success:function(res){
                    console.log(res)
                    var res=JSON.parse(res);
                    var $ul=$('<ul/>');
                    $ul.addClass('clearfix');
                    $.each(res.data,function(idx,item){
                        var $li=$('<li/>').attr('data-id',item.id);
                        var $a=$('<a href="details.html?id='+item.id+'"></a>')
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
                    //排序
                    //大-》小
                    

                    
               
                
                }


            })
        });
            
        });
        //女式
        $p.eq(1).on('click',function(){
            var style=$(this).text();
            $(this).siblings().removeClass('changeActive');
            $(this).addClass('changeActive');
            // console.log($style);
             $.ajax({
            type:'get',
            url:'../api/nvshi.php',
            data:{
                itemqty:itemqty,
                pageNo:pageNo,
                styles:'女式'
            },
            success:function(res){
                var res=JSON.parse(res);
                $('.list ul').remove();
                var $ul=$('<ul/>');
                $ul.addClass('clearfix');
                $.each(res.data,function(idx,item){
                    var $li=$('<li/>').attr('data-id',item.id);
                    var $a=$('<a href="details.html?id='+item.id+'"></a>')
                    var $img=$('<img src="'+item.imgurl+'"/>');
                    var $p=$('<p>'+item.name+item.id+'</p>');
                    var $span=$('<span >'+item.price+'￥</span>');
                    $a.append($img).append($p).append($span);
                    $li.append($a);
                    $ul.append($li);
                });
                $('.list').append($ul);
                   $('.page span').remove();
                
                var i=Math.ceil(res.total/itemqty);
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


                   }).addClass('nv');
                   $page.append($span);
                   $page.children().eq(0).addClass('changeActive'); 
                }
            }
        });
        //点击分页
        $page.children().eq(0).addClass('changeActive');
        
        $page.on('click','.nv',function(){
            var pageNo=$(this).text();
            console.log(style);
            $(this).siblings().removeClass('changeActive');
            $(this).addClass('changeActive');
            $.ajax({
                type:'get',
                url:'../api/nvshi.php',
                data:{
                    itemqty:itemqty,
                    pageNo:pageNo,
                    styles:'女式'

                },
                success:function(res){
                    console.log(res)
                    var res=JSON.parse(res);
                    var $ul=$('<ul/>');
                    $ul.addClass('clearfix');
                    $.each(res.data,function(idx,item){
                        var $li=$('<li/>').attr('data-id',item.id);
                        var $a=$('<a href="details.html?id='+item.id+'"></a>')
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
                    //排序
                    //大-》小
                    

                    
               
                
                }


            })
        });
            
        });
        //排序
       $('.fx span button').on('click',function(){
            $(this).siblings().removeClass('changeActive');
            $(this).addClass('changeActive');
            var px=$(this).text();
            console.log(999)
            // var style=$(this).text();
            // console.log($style);
             $.ajax({
            type:'get',
            url:'../api/paixu.php',
            data:{
                itemqty:itemqty,
                pageNo:pageNo,
                paixu:px
            },
            success:function(res){
                var res=JSON.parse(res);
                $('.list ul').remove();
                var $ul=$('<ul/>');
                $ul.addClass('clearfix');
                $.each(res.data,function(idx,item){
                    var $li=$('<li/>').attr('data-id',item.id);
                    var $a=$('<a href="details.html?id='+item.id+'"></a>')
                    var $img=$('<img src="'+item.imgurl+'"/>');
                    var $p=$('<p>'+item.name+item.id+'</p>');
                    var $span=$('<span >'+item.price+'￥</span>');
                    $a.append($img).append($p).append($span);
                    $li.append($a);
                    $ul.append($li);
                });
                $('.list').append($ul);
                   $('.page span').remove();
                
                var i=Math.ceil(res.total/itemqty);
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


                   }).addClass('px');
                   $page.append($span);
                   $page.children().eq(0).addClass('changeActive'); 
                }
            }
        });
        //点击分页
        $page.children().eq(0).addClass('changeActive');
        
        $page.on('click','.px',function(){
            var pageNo=$(this).text();
            // console.log(style);
            $(this).siblings().removeClass('changeActive');
            $(this).addClass('changeActive');
            $.ajax({
                type:'get',
                url:'../api/paixu.php',
                data:{
                    itemqty:itemqty,
                    pageNo:pageNo,
                    paixu:px

                },
                success:function(res){
                    console.log(res)
                    var res=JSON.parse(res);
                    var $ul=$('<ul/>');
                    $ul.addClass('clearfix');
                    $.each(res.data,function(idx,item){
                        var $li=$('<li/>').attr('data-id',item.id);
                        var $a=$('<a href="details.html?id='+item.id+'"></a>')
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
       });
        

    });
});