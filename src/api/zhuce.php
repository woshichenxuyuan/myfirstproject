<?php
    // 引入其他文件
    require('connect.php');//include 'connect.php'

    $username = isset($_GET['id']) ? $_GET['id'] : null;
    $password = isset($_GET['password']) ? $_GET['password'] : null;
    
    // 判断用户名是否存在
    $data = $conn->query("select * from zhuce where name='$username'");
    // var_dump($data);
    if($data->num_rows>0){
        echo 'fail';
    }

    if($data->num_rows == 0){
        // 密码md5加密
        $password = md5($password);
        
        // 写入数据sql语句
        $sql = "insert into zhuce(name,password) values('$username','$password')";

        $res = $conn->query($sql);

        if($res){
            echo "success";
        }else{
            echo "fail";
        }
    }
?>