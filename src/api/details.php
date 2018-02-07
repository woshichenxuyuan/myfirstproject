<?php
    require('connect.php');
   

    $sql="select * from goodslist ";

    $str=$conn->query($sql);
    // var_dump ($str);
    $content=$str->fetch_all(MYSQLI_ASSOC);




    
    $res=$content;
    // $res = array(
    //     'data'=>array_slice($arr_data, ($pageNo-1)*$itemqty,$itemqty),
    //     'total'=>count($arr_data),
    //     'itemqty'=>$itemqty,
    //     'pageNo'=>$pageNo*1
    // );
    echo json_encode($res,JSON_UNESCAPED_UNICODE);
    

?>