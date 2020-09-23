<?php
if(isset($_POST) and $_SERVER['REQUEST_METHOD'] == "POST"){
    $formats = array("jpg", "gif", "png");
    $format = @end(explode(".",$_FILES['image']['name']));
    if(in_array($format,$formats)){
        if(is_uploaded_file($_FILES['image']['tmp_name'])){
            $dir = "upload/".$_FILES['image']['name']."_".rand(0,999999)."_".time();
            if(move_uploaded_file($_FILES['image']['tmp_name'], $dir)){
                echo "<img scr='".$dir."' alt='".$dir."'>";
            }else{
                echo "<font color='red'>Файл не загрузился".$_FILES['image']['error']."</font>";
            }
        }
    }else{
        echo "<font color='red'>Выберите правильный формат!!!</font>";
    }
}