<?php
    $id = isset($_GET['id']) ? $_GET['id'] : Null;
    $pd=isset($_GET['password']) ? $_GET['password'] : Null;
    $src='data/user.json';

    $fiter=fopen($src,'r');

    $len=filesize($src);

    $cont=fread($fiter,$len);

    fclose($fiter);

    $res=json_decode($cont);

    $arr=array('id'=>$id,'password'=>$pd);

    // var_dump(array_merge($res,$arr))
    // var_dump($arr);
    array_push($res,$arr);
    // var_dump($res);
    $fiter=fopen($src,'w');
    fwrite($fiter,json_encode($res,JSON_UNESCAPED_UNICODE));
    fclose($fiter);
    echo json_encode($res,JSON_UNESCAPED_UNICODE);


    
?>