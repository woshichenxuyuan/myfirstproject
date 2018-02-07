require(['config'],function(){
    require(['jquery','common'],function(){

        jQuery(function($){
            var $username=$('#username');
            var $password=$('#password');
            var $qr      =$('#qr');
            var $yzm     =$('#yzm');
            var $dx      =$('#dx');
            var $agree   =$('#agree');
            var $zc_btn  =$('.zc_btn');
            var $label    =$('label');
            var a=0;
            var b=0;
            var c=0;
            var d=0;
            console.log($label)
            $username.on('blur',function(){
                var $nameVal=$username.val();
                $nameVal=$nameVal.replace(/^\s{1,}|\s{1,}$/g,'');
                console.log($nameVal);
                if($nameVal==''||(!/(^1[34578]\d{9})$/.test($nameVal) && !/[a-z0-9\-\._]{2,}@[a-z0-9\-]{1,63}(\.[a-z0-9\u2E80-\u9FFF]{2,6})+$/.test($nameVal))){
                   $label.eq(0).next().text('请输入正确的手机号或邮箱').css({
                        color:'red'
                   });
                   $username.css({
                        border:'1px solid red'
                   });
                   
                }
                else{
                    a++;
                    $label.eq(0).next().text('输入正确').css({
                        color:'#53dc76'
                    });
                   $username.css({
                        border:'1px solid #DEDEDE'
                   });
                   
                }
                // $.ajax({
                //     type:'get',
                //     url:'../api/zhuce.php',
                //     success:function(res){
                //             console.log(res)
                           
                //                 if(res=='fail'){
                //                     $label.eq(0).next().text('该用户已注册').css({
                //                                 color:'red'
                //                             });
                //                 }
                           
                        
                //     }
                // })
            })
             var $yzmVal=scode();
                console.log($yzmVal);
            $yzm.next().text($yzmVal).css({
                letterSpacing:'5px',
                margin:'10px',
                background:'yellow'
            });
            $yzm.on('blur',function(){
                var $yzmValue=$yzm.val();
                $yzmValue=$yzmValue.replace(/^\s{1,}|\s{1,}$/g,'');
                if($yzmValue != $yzmVal){
                    $(this).css({
                        border:'1px solid red'
                    });
                    $label.eq(1).next().text('验证码不正确').css({
                        color:'red'
                    });
                    
                }
                else{
                    b++;
                    $(this).css({
                        border:'1px solid #DEDEDE'
                    });
                    $label.eq(1).next().text('验证码正确').css({
                        color:'#53dc76'
                    });
                    
                }
            });
            $password.on('blur',function(){
                var $pVal=$(this).val();
                $pVal=$pVal.replace(/^\s{1,}|\s{1,}$/g,'');
                if(!/^[a-z][^\s]{5,19}$/.test($pVal)){
                    $(this).css({
                        border:'1px solid red'
                    });
                    $label.eq(2).next().text('密码输入有误').css({
                        color:'red'
                    });
                    
                }else{
                    c++;
                    $(this).css({
                        border:'1px solid #DEDEDE'
                    });
                    $label.eq(2).next().text('密码输入正确').css({
                        color:'#53dc76'
                    });
                    
                }
                qr();

            });
            function qr(){
                var $pVal=$password.val();
                $pVal=$pVal.replace(/^\s{1,}|\s{1,}$/g,'');
                var $qrVal=$qr.val();
                $qrVal=$qrVal.replace(/^\s{1,}|\s{1,}$/g,'');
                if($qrVal!=$pVal){
                    $(this).css({
                        border:'1px solid red'
                    });
                    $label.eq(3).next().text('两次密码输入不一致').css({
                        color:'red'
                    });
                    
                
                }else{
                    d++;
                    $(this).css({
                        border:'1px solid #DEDEDE'
                    });
                    $label.eq(3).next().text('两次密码输入一致').css({
                        color:'#53dc76'
                    });
                    
                }
            }
            $qr.on('blur',function(){
                qr();
            })
            if(agree.checked==false){
                $zc_btn.css({
                    background:'#DEDEDE'
                   }).attr('disabled','disabled');
            }
            $agree.on('click',function(){
                console.log(agree.checked==true&&a!=0&&b!=0&&c!=0&&d!=0)
              if(agree.checked==false){
                $zc_btn.css({
                    background:'#DEDEDE'
                   }).attr('disabled','disabled');
            }else if(agree.checked==true&&a!=0&&b!=0&&c!=0&&d!=0) {
                $zc_btn.css({
                    background:'#F19108'
                   }).removeAttr('disabled');
            }  
            });
            var arr=[200,304];
            $zc_btn.on('click',function(){
                var id=$username.val();
                var password=$password.val();
                $.ajax({
                    type:'get',
                    url:'../api/zhuce.php',
                    data:{id:id,password:password},
                    success:function(res){
                        console.log(res)
                        if(res=='fail'){
                           $('.userspan').text('该用户已存在').css(
                            {color:'red'});
                            $('#username').css({
                                border:'1px solid red' 
                            }); 
                        }
                        else if(res=='success'){
                            window.location.href='dengluye.html'
                        }

                        
                    }
                });
            })

        });
    });
});