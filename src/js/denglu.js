require(['config'],function(){
    require(['jquery'],function($){

        jQuery(function($){
            var $dl_mima=$('.dl_mima');
            var $dl_saoma=$('.dl_saoma');
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

            });

            var $span=$('.dl_mima').children().eq(0);
            console.log($span);
            

            $('.dl_mima a').on('click',function(){
                var $nameVal=$('#dl_username').val();
                $nameVal=$nameVal.replace(/^\s{1,}|\s{1,}$/g,'');
                var $pdVal=$('#dl_password').val();
                $pdVal=$pdVal.replace(/^\s{1,}|\s{1,}$/g,'');
                $.ajax({
                    type:'get',
                    url:'../api/denglu.php',
                    data:{
                        username:$nameVal,
                        password:$pdVal
                    },
                    success:function(res){
                        console.log(res);
                        if(res=='fail'){
                          $('.mima_span').text('未注册或账号或密码错误').css({
                            color:'red'
                          });
                          $('#dl_username').css({
                            border:'1px solid red'
                          }); 
                        }else if(res=='success'){
                        
                             var $check=$('#dl_check');
                             console.log($check[0].checked)
                            if($check[0].checked==true){
                             
                                var now=new Date();
                                now.setDate(now.getDate()+7);
                                document.cookie='name='+$nameVal+';expires='+now.toUTCString()+';path=/';
                                document.cookie='password='+$pdVal;
                                
                            }
                             window.location.href='../index.html?id='+$nameVal;
                        }

                   
                        }

                    
                });
            });

            // var str=document.cookie;
            // str=str.split('; ');
            // console.log(str);
            // str.forEach(function(item){
            //     var arr=item.split('=');
            //     console.log(arr);
            //     if(arr[0]=='name'){

                
            //         window.location.href='../index.html?id='+arr[1];
                    
            //     }   

            // })

        });
    })
})
