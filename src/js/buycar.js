require(['config'],function(){
    require(['jquery'],function($){
        $('header').load('../html/header',function(){

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
        $('footer').load('../html/footer');
        //获取cookies写入购物车
       (function(){
            var cookies=document.cookie;

            cookies=cookies.split('; ');

            cookies.forEach(function(item){
                var garr=item.split('=');
                if(garr[0]=='goods'){
                    var res=JSON.parse(garr[1]);
                    res.forEach(function(item){
                        // console.log(item)
                        var $input=$('<input type="checkbox">').addClass('checkbtn');
                        //加入商品名与图片
                        var $p=$('<p/>').addClass('clearfix');

                        var $img=$('<img src="'+item.src+'">');

                        var $span=$('<span>'+item.gname+'<br>颜色：'+item.color+'<span/>');
                        $p.append($img).append($span);
                        $p.children().css({
                            float:'left'
                        })
                        //加入商品发货站
                        var $span1=$('<span/>').text('发货站:  '+item.place);
                        //加入商品价格
                        var $span2=$('<span/>').text(item.price).addClass('price');
                        //加入商品数量以及加减数量按钮
                        var $span3=$('<span/>').addClass('del');
                        var $btn1=$('<button/>').text('-').addClass('jian');
                        var $btn2=$('<button/>').text('+').addClass('jia');
                        var $input1=$('<input type="number"/>').addClass('qty').val(item.num).attr('disabled','disabled').css({
                            background:'#fff'
                        });
                        $span3.append($btn1,$input1,$btn2).addClass('clearfix');
                        $span3.children().css({
                            float:'left'
                        })
                        //加入小计金额
                        var price=item['price'].slice(1);
                        var total=price*item['num'];
                        console.log(total);
                        var $span4=$('<span/>').text('￥'+total).addClass('total');
                        //删除商品按钮
                        var $a=$('<a/>').text('删  除').addClass(item.id);
                        //把全部内容加入li
                        $li=$('<li/>').append($input,$p,$span1,$span2,$span3,$span4,$a).addClass('clearfix li_q');
                        $li.children().css({
                            float:'left'
                        })
                        // 把li加入ul
                        $('.goodsLists').append($li);

                    });
                    //加数量
                    $('.jia').on('click',function(){
             
                           
                        
                        //小计
                        var num=$(this).siblings().eq(1).val();
                        console.log($(this).siblings().eq(1));
                       // =$('.qty').val();
                        num=num*1+1;
                        $(this).siblings().eq(1).val(num);
                        var price=$(this).parent().prev().text();
                        price=price.slice(1);

                        var total=price*num;
                        console.log(total);
                        $(this).parent().next().text('￥'+total)
                        //结算
                        var $check=$('.checkbtn');
                           
                        var price=0;
                        // var $thisParent=$(this).parent().parent();
                        // var $thisItem=$thisParent.children();
                        //         console.log($thisItem[0]);
                        $.each($check,function(idx,item){
                            


                                if(item.checked==true){
                          
                                    //结算
                                   var father= item.parentNode;
                                   console.log(father)
                                   var children=father.childNodes;
                                   var res=children[5].innerHTML.slice(1);
                                   price+=res*1;
                                }
                            
                     
                    
                            
                        
                        });
                        $('.totalPrice').text('￥'+price+'.00');
                    });
                    $('.jian').on('click',function(){
                        var num=$(this).siblings().eq(0).val();
                        console.log($(this).siblings().eq(0));
                       // =$('.qty').val();
                        num=num*1-1;
                        if(num<0){
                            return;
                        }
                        //结算
                        var $check=$('.checkbtn');
                        var $thisParent=$(this).parent().parent();
                        var $thisItem=$thisParent.children();
                                // console.log($thisItem[0]);
                         var price=0;
                         var priceTotal=$('.totalPrice').text().slice(1);
                         console.log(priceTotal)
                        $.each($check,function(idx,item){
                           

                                if(item.checked==true){
                                    if($thisItem[0]==item){

                                       var father= item.parentNode;
                                       console.log(father)
                                       var children=father.childNodes;
                                       var res1=children[3].innerHTML.slice(1);
                                         var res=children[5].innerHTML.slice(1);
                                         console.log(res,res1);
                                       price+=priceTotal*1-res1*1;
                                    }
                          
                                    //结算
                                }
                                    $('.totalPrice').text('￥'+price+'.00');
                            
                     
                    
                            
                        
                        });
                        //小计
                        $(this).siblings().eq(0).val(num);
                         var price=$(this).parent().prev().text();
                        price=price.slice(1);

                        var total=price*num;
                        console.log(total);
                        $(this).parent().next().text('￥'+total)
                        
                    });
                    $('#allCheck').on('click',function(){
                        console.log($('.checkbtn'));
                        var $btn=$('.checkbtn');
                            var price=0;
                        if($(this)[0].checked==true){
                            $.each($btn,function(idx,item){
                                item.checked=true;
                                
                                console.log(item.checked)
                            });
                              var $total=$('.total');
                              $.each($total,function(idx,item){
                                    var res=item.innerHTML.slice(1);
                                    price+=res*1;
                                    console.log(price)

                              });
                              $('.totalPrice').text('￥'+price+'.00');
                            $('.li_q').css({
                                background:'#FDF0EF'
                            });
                        }else{
                            $.each($btn,function(idx,item){
                                item.checked=false;
                                console.log(item.checked)
                                 $('.totalPrice').text('￥'+price+'.00');


                            })
                             $('.li_q').css({
                                background:'#fff'
                            });

                        }
                    });
                    
                    
                    $('.checkbtn').on('click',function(){
                        var $check=$('.checkbtn');
                            var j=0;
                            var i=0;
                            var price=0;
                        $.each($check,function(idx,item){
                            if(item.checked==true){
                                i++;
                                //结算
                               var father= item.parentNode;
                               var children=father.childNodes;
                               var res=children[5].innerHTML.slice(1);
                               price+=res*1;
                            }
                            // j=idx+1;
                            j++;
                            
                        
                        });
                        $('.totalPrice').text('￥'+price+'.00');
                        console.log(i,j)
                        if(i==j){
                            $('#allCheck')[0].checked=true;
                        }else{
                            $('#allCheck')[0].checked=false;

                        }
                        if($(this)[0].checked==true){
                            $(this).parent().css({
                                background:'#FDF0EF'
                            })
                        }else{
                            $(this).parent().css({
                                background:'#fff'
                            })
                        }
                        
                       
                    })
                    //点击实现删除购物车商品效果
                    $('a').on('click',function(){

                        var id=$(this).attr('class');
                        $(this).parent().remove();
                        console.log(id)
                        var goods='';
                        var cookies=document.cookie;
                        cookies=cookies.split('; ');
                        cookies.forEach(function(item){
                            var garr=item.split('=');
                            if(garr[0]=='goods'){
                                var res=JSON.parse(garr[1]);
                                console.log(res.length)
                                for(var i=0;i<res.length;i++){
                                    if(res[i].id==id){
                                        res.splice(i,1);
                                        break;

                                    }
                                }
                                    goods=res;
                                    console.log(goods);
                                    var now=new Date();
                                    now.setDate(now.getDate()+7);
                                    document.cookie='goods='+JSON.stringify(goods)+';expires='+now.toUTCString()+';path=/';
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

                            }

                        })
                    });
                    

                }

            })
       })();
       //数据生成猜你喜欢商品列表
       (function(){
            // var i=0;
            $.ajax({
                type:'get',
                url:'../api/details.php',
                dataType:'json',
                success:function(res){
                    console.log(res);
                    for(var i=0;i<res.length-50;i++){
                       
                            var $li=$('<li/>').css({
                                float:'left'
                            });
                            var $a=$('<a href="goodslist.html"></a>');
                            var $img=$('<img src="'+res[i].imgurl+'"/>').css({
                                width:'80px',
                                height:'80px',
                                border:'1px solid #ccc',
                            });
                            var $p=$('<p>'+res[i].name+'<br/>价格:￥'+res[i].price+'</p>');
                            // var $span=$('<span/>').text();
                            // $p.append($span);
                            $a.append($img,$p);
                            $li.append($a);
                            $('.guess_g').append($li);
                            
                    }

                    
                }


            })
       })(); 
       //点击左右按钮实现猜你喜欢商品列表滚动
       (function(){
           var left=0;
           var right=0;
            $('.left_').on('click',function(){
                if(left<=-6288){
                    left=-6288;
                    return;
                }
                left+=-1048;
                // console.log(999)
                $('.guess_g').animate({
                    left:left
                },1000);
            });
           $('.right_').on('click',function(){
                
                left+=1048;
                if(left>=20){
                    left=10;
                    return;
                }
                $('.guess_g').animate({
                    left:left
                },1000);
            });
       })();
       function jiesuan(){
         var price=0;
            $.each($check,function(idx,item){
                    if(item.checked==true){
                      
                        //结算
                        var father= item.parentNode;
                        console.log(father)
                        var children=father.childNodes;
                        var res=children[5].innerHTML.slice(1);
                        price+=res*1;
                    }
                     
                    
                            
                        
            });
            $('.totalPrice').text('￥'+price+'.00');
       }
       // (function(){
       //      $('#allCheck1').on('click',function(){
 
       //          var $check=$(':checkbox');
       //          console.log($check)
       //          if($(this)[0].checked==true){
       //              $.each($check,function(idx,item){
       //                  item.checked=true;

       //              });
       //          }else{
       //              $.each($check,function(idx,item){
       //                  item.checked=true;

       //              });

       //          }

       //      });
       // })();
    });
})