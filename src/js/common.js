/**
 * [一个求所有传入参数和的函数]
 * @return {res} [返回所传入参数和的值]
 */
function sum(){
       var res=0;
    
        for(var i=0;i<arguments.length;i++){
            res+=arguments[i];
        }
        return res;
      console.log(res) ;
    }
    /**
     * [一个任意两数相加减乘除及取余数的函数]
     * @return {[type]} [description]
     */
 function js(){

            var _ip1=ip1.value*1;
            var _ip2=ip2.value*1;
            var _sel=sel.value;
            
            switch(_sel){
                case  '+':
                total=_ip1+_ip2;break;
                 case  '-':
                total=_ip1-_ip2;break;
                 case  '*':
                total=_ip1*_ip2;break;
                 case  '/':
                total=_ip1 / _ip2;break;
                 case  '%':
                total=_ip1%_ip2;break;

            }
            return total;

        }
        /**
         * [生成验证码的函数]
         * @return {[type]} [description]
         */
    function yanzhenma(){   

            var res=parseInt(Math.random()*10000+1);
            var yzm=res;
            if(res<10){
                yzm='000'+res;
            }
            if(res<100&&res>=10){
                yzm='00'+res;
            }
            if(res<1000&&res>=100){
                yzm='0'+res;
            }
            return yzm;
        }
    /**
     * 生成随机颜色的函数
     * @return {Sting} [颜色模式rgba(红，绿，蓝，透明度)]
     */
    function suijiyanse(){
        var hg=parseInt(Math.random()*256);
        var lv=parseInt(Math.random()*256);
        var lan=parseInt(Math.random()*256);
       var sjye='rgba('+hg+','+lv+','+lan+','+1+')';
       return sjye;
    }
    /**
     * 数组元素求和
     * @return {Number} [返回数组所有的元素相加的和]
     */
      function he(a){
            var total=0;
            for(var i=0;i<a.length;i++){
                total+=a[i];
            }
            return total;

        }
         /**
     * 数组元素查重并返回去掉重复项的新数组
     * @return {Array数组} [返回去掉重复项的新数组]
     */
        function norepeat(arr){
        for(var k=0;k<arr.length;k++){
            for(var h=k+1;h<arr.length;){
                if(arr[k]===arr[h]){
                    arr.splice(h,1);
                }
                else{
                    h++;
                }
            }
        }
        return arr;
        }

   /**
     * 生成十六进制的随机颜色
     * @return {颜色十六进制写法} [十六进制的写法随机颜色]
     */
     function sjcolor(){
            var res='0123456789abcdef';
        var color='#';
        for(var i=0;i<6;i++){
        var idx=parseInt(Math.random()*res.length);
            color+=res[idx];
     }
            return color;
        }
        /**
     * 生成随4位数字字母组成的机验证码
     * @return {String} [4位数字字母组成的机验证码]
     */
    function scode(){
        var str='0123456789'.split('');
    var arr='abcdefghijklmnopqrstuvwxyz'.split('');
    console.log(str);
    var yzm='';
    for(var i=0;i<2;i++){
        var idx=parseInt(Math.random()*str.length);
        yzm+=str[idx]+arr[idx];
    }
    return yzm;
    }
    
    var element={
        /**
     * 过滤非元素节点
     * @return {Array} [返回过滤非元素节点后的数组]
     */
      get:function(item){
        var arr=[];
        for(var i=0;i<item.length;i++){
            if(item[i].nodeType===1){
                arr.push(item[i]);
            } 
        }
        return arr;
    },
      /**
     * 获取字元素
     * @return {Array} [返回过滤非元素节点后node的子元素节点组成的数组]
     */
        children:function(node){
            var res=node.childNodes;
            var str=element.get(res);
            return str;
        },
        //获取下一个元素
    next:function(element){
        var zi=element.nextSibling;
        if(zi.nodeType!=1){
            var zy=zi.nextSibling;
            return zy;
        }
        else{
            return zi;
        }
    },

    // 获取前一个元素
    prev:function(element){
         var zi=element.previousSibling;
        if(zi.nodeType!=1){
            var zy=zi.previousSibling;
            return zy;
        }
        else{
            return zi;
        }

    }
      
    }
    var Cookies={ 
            // 写入cookie
            set:function(name,value,params){
                var cookies=name+'='+value;
                var params= params||{};
                if(params.expires){
                    cookies+=';expries='+params.expires.toUTCString();
                }
                if(params.path){
                    cookies+=';path='+params.path;
                }
                if(params.domain){
                    cookies+=';domain='+params.domain;
                }
                if(params.secure){
                    cookies+=';secure='+params.secure;
                }
                document.cookie=cookies;

        },
        // 获取cookie
        get:function(name){
            var cookies=document.cookie;
            if(cookies.length===0){
                return;
            }
            cookies=cookies.split('; ');
            var res='';
            for(var i=0;i<cookies.length;i++){
                var arr=cookoes.split('=');
                if(arr[0]==name){
                    res=arr[1];
                    break;
                }
            }
            return res;
        },
        //删除cookie
        remove:function(name){
            var now=new Date();
            now.setDate(now.getDate()-10);
            this.set(name,'xx',{expires:now});
        }};
    // element.children(links)

function getCss(ele,attr){
  // 兼容的思路：判断当前浏览器是否支持这个方法
  // 而不是判断当前时什么浏览器
  if(window.getComputedStyle){
    return getComputedStyle(ele)[attr]
  }else if(ele.currentStyle){
    return ele.currentStyle[attr];
  }else{
    // 如果以上两个都不支持，则直接返回内联样式
    return ele.style[attr];
  }
}

 /**
 * [动画函数]
 * @param  {Element} ele    [动画元素]
 * @param  {String} attr   [动画属性]
 * @param  {Number} target [目标值]
 */
function animation(ele,opt,callback){
    //设置动画的数量
    ele.animationLen=0;
    //遍历opt设置定时器
    for(var attr in opt){
      ele.animationLen++

      //匿名函数传递attr属性
      (function(attr){
        // 声明相应的定时器名
      var timerName=attr+'timer';
      //获取传入目标值
      var target=opt[attr];
      //清除同名定时器
      clearInterval(ele[timerName]);
      //设置定时器
      ele[timerName]=setInterval(function(){
        //获取当前值
        var courr=getCss(ele,attr);
        //提取单位
        var unit=courr.match(/[a-zA-Z]+$/)
        //判断是否有单位
        unit=unit? unit[0] : '';
        //提取值
        var current=parseFloat(courr);
        //计算速度
  
          var speed=(target-current)/10;
          //速度不能为0
          speed=speed<0  ? Math.floor(speed) : Math.ceil(speed);
       
        if(attr === 'opacity'){
          speed = speed<0 ? -0.02 : 0.02;
        }
        var animationAttr=current+speed;
        if(animationAttr===target||speed===0){
            clearInterval(ele[timerName]);
            animationAttr=target;
            ele.animationLen--;
            //动画完成执行回调函数
            if(ele.animationLen==0){
              typeof callback === 'function' && callback();
            }
        }
        ele.style[attr]=animationAttr+unit;
      },30)
      })(attr);
    }

} 
/**
 * [生成一个范围内的随机整数]
 * @param  {Number} min [范围最小值]
 * @param  {Number} max [范围内最大值]
 * @return {Number}     [返回随机整数]
 */
function randomNumber(min,max){
  return parseInt(Math.random()*(max-min+1)) + min
}  
