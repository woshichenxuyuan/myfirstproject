<?php
    require('connect.php');
    $itemqty=isset($_GET['itemqty']) ? $_GET['itemqty'] :20;
    $pageNo=isset($_GET['pageNo']) ? $_GET['pageNo'] :1;
    $style=isset($_GET['styles']) ? $_GET['styles'] :'';

    $sql="select * from goodslist ";
    if($style){
        $sql.="where styles='$style'";
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