<?php

if($_SERVER["REQUEST_METHOD"]=="POST"){
    header("Access-Control-Allow-Origin","*");
    foreach ($_FILES as $archivo) {
        move_uploaded_file($archivo["tmp_name"],$archivo["name"]);
    }
}


?>
