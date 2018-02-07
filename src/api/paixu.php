<?php
    require('connect.php');
    $itemqty=isset($_GET['itemqty']) ? $_GET['itemqty'] :20;
    $pageNo=isset($_GET['pageNo']) ? $_GET['pageNo'] :1;
    
    $paixu=isset($_GET['paixu']) ? $_GET['paixu'] :'';
    $sql="select * from goodslist ";
    if($paixu){
        if($paixu=='降序'){

            $sql.="order by price*1";
        }else{
            $sql.="order by price*1 desc";

        }
    }
    $str=$conn->query($sql);
    // var_dump ($str);
    $content=$str->fetch_all(MYSQLI_ASSOC);
    // var_dump($sql);



    
    $arr_data=$content;
    $res = array(
        'data'=>array_slice($arr_data, ($pageNo-1)*$itemqty,$itemqty),
        'total'=>count($arr_data),
        'itemqty'=>$itemqty,
        'pageNo'=>$pageNo*1
    );
    echo json_encode($res,JSON_UNESCAPED_UNICODE);
    

?>