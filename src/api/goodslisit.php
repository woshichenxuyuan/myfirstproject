<?php
    require('connect.php');
    $itemqty=isset($_POST['itemqty']) ? $_POST['itemqty'] :20;
    $pageNo=isset($_POST['pageNo']) ? $_POST['pageNo'] :1;

    $sql="select * from goodslist ";

    $str=$conn->query($sql);
    // var_dump ($str);
    $content=$str->fetch_all(MYSQLI_ASSOC);
    



    
    $arr_data=$content;
    $res = array(
        'data'=>array_slice($arr_data, ($pageNo-1)*$itemqty,$itemqty),
        'total'=>count($arr_data),
        'itemqty'=>$itemqty,
        'pageNo'=>$pageNo*1
    );
    echo json_encode($res,JSON_UNESCAPED_UNICODE);
    

?>