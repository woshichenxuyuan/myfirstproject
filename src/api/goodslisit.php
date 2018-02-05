<?php
    $itemqty=isset($_POST['itemqty']) ? $_POST['itemqty'] :20;
    $pageNo=isset($_POST['pageNo']) ? $_POST['pageNo'] :1;
    $path='data/goodslist.json';
    $file=fopen($path,'r');
    $len=filesize($path);
    $content=fread($file,$len);
    $arr_data=json_decode($content);
    $res = array(
        'data'=>array_slice($arr_data, ($pageNo-1)*$itemqty,$itemqty),
        'total'=>count($arr_data),
        'itemqty'=>$itemqty,
        'pageNo'=>$pageNo*1
    );
    echo json_encode($res,JSON_UNESCAPED_UNICODE);
    fclose($file);

?>