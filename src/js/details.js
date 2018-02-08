require(['config'],function(){
    require(['jquery','gdsZoom'],function($){
        $('header').load('../html/header',function(){
            //免登陆
            var str=document.cookie;
            if(str!='[]'){
                str=str.split('; ');
                // console.log(str);
                str.forEach(function(item){
                    var arr=item.split('=');
                    // console.log(arr);
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
            })
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
        var id=window.location.search;
            id=decodeURI(id);
            console.log(id);
            id=id.slice(1).split('=');
            id=id[1];
        console.log(id);
        var $dt_bl=$('.dt_bl');
        var $dt_br=$('.dt_br');
        var gcolor;
        var gid;
        $.ajax({
            type:'get',
            url:'../api/details.php',
            dataType:'json',
            success:function(res){
                console.log(res);
                $.each(res,function(idx,item){
                    // console.log(item.id==id)
                    if(item.id==id){
                        gid=item.id;
                        gcolor=item['color'];
                        $('.color_')[0].src=item['imgurl'];
                        $('.color_').css({
                            width:'50px',
                            height:'50px',
                            border:'2px solid blue'
                        })
                        for(var i=0;i<4;i++){
                            var $img=$('<img src="../img/g'+(i+5)+'.jpg"/>');
                            if(i==0){
                                $img=$('<img src="'+item['imgurl']+'"/>');
                            }
                         
                            $('.dt_bl_l').append($img);
                        }
                        var $img_1=$('<img src="'+item['imgurl']+'" class="gds_1"/>');
                        $div=$('<div/>').addClass('gds').append($img_1).css({
                            float:'left',
                        })
                        // console.log($img)
                        $dt_bl.append($div);
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
                console.log($('.gds'))
               $('.gds').zoom({
                    position:'right',
                    // width:500,
                    // height:500
                });
               $('.dt_bl_l').on('click','img',function(){
                // console.log($(this)[0])
                    $('.gds_1')[0].src=$(this)[0].src;
                    $(this).siblings().css({
                        border:'1px solid #ccc'
                    })
                    $(this).css({
                        border:'1px solid orange'
                    });
                     $('.color_')[0].src=$(this)[0].src;
                        $('.color_').css({
                            width:'50px',
                            height:'50px',
                            border:'2px solid blue'
                        })

               })
            }
        });

        $('.buycar').on('click',function(){
            var sl=$('#_number').val();
            if(sl==0){
                $('.ts').text('请选择购买数量').css({
                    color:'red'
                });
                $('#_number').css({
                    border:'2px solid red'
                });
                return;
            }

            var $copyImg=$('.gds_1').clone();
            $copyImg.css({
                position:'absolute',
                left:0,
                top:0,
                width:$('.gds_1').outerWidth()
            }).appendTo($('.gds')).addClass('copyImg');
            $('.copyImg').animate({
               
               
                left:800,
                top:-220,
                width:50,
                height:50,

            },1000,function(){
            $('.copyImg').remove();
                var src=$('.gds_1')[0].src;
                var num=$('#_number').val();

                var gname=$('.dt_brt p').text();
                var price=$('.price span').text();
                var place='大陆';
                console.log(gid);
                
                var goods=[];
                // 判断该商品是否已经存在cookies
                //获取上一个cookie
                var lastcookie=document.cookie;
                lastcookie=lastcookie.split('; ');

            

                    lastcookie.forEach(function(item){
                        var lastArr=item.split('=');
                        if(lastArr[0]=='goods'){
                            goods=JSON.parse(lastArr[1]);
                        }
                    })
                
                // console.log(goods);
                
                    for(var i =0;i<goods.length;i++){
                        console.log(goods[i].id==gid)
                        if(goods[i].id==gid){
                            goods[i].num++;
                            console.log(999)
                            break;
                        }
                    }
                    // console.log(i,goods.length)
                    if(i==goods.length){
                        var gobj={
                            'id':gid,
                            'src':src,
                            'num':num*1,
                            'gname':gname,
                            'price':price,
                            'place':place,
                            'color':gcolor

                        }
                        goods.push(gobj);


                    }
                
                
                var now=new Date();
                now.setDate(now.getDate()+7);
                document.cookie='goods='+JSON.stringify(goods)+';expires='+now.toUTCString()+';path=/';
            //  获取cookie写入购物车
     
                $('.carList').text('');
                var cookies =document.cookie;
                cookies=cookies.split('; ');
                cookies.forEach(function(item){
                    var arr_c=item.split('=');
                    // console.log(arr_c[0])
                    if(arr_c[0]=='goods'){

                        var res=JSON.parse(arr_c[1])
                        res.forEach(function(item){
                            var $li=$('<li/>').addClass(item.id);
                            var $img=$('<img src="'+item['src']+'"/>');
                            var $p=$('<p>'+item.gname+'<br>'+'单价：'+item.price+'<br>'+'数量：'+item.num+'<br>'+'发货站：'+item.place+'</p>');
                          
                            $li.append($img).append($p);
                            $('.carList').append($li);
                        });
                        $('.car_son').text(res.length);
                        console.log(res.length)

                    }
                })
    
        });
            
        });
        $('#_number').on('focus',function(){
            $('#_number').css({
                    border:'1px solid skyblue'
                });
        });
        $('.reduce').on('click',function(){
            var num_r=$('#_number').val();
            num_r=num_r*1-1;
            $('#_number').val(num_r);
        });
         $('.add').on('click',function(){
            var num_r=$('#_number').val();
            num_r=num_r*1+1;
            $('#_number').val(num_r);
        });
        
        $('footer').load('../html/footer');
    });
})