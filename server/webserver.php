<?php

$action = ["cadastrarUser", "loginUser", "editarCircle", "listCircle", "cadastrarCircle", "lerCircle", "deleteCircle", "editCircle", "saveCircle"];

if(isset($_POST["request"])) {
    if(isset($_POST["action"]) && in_array($_POST["action"], $action)) {
        require __DIR__ . "/config/Conn.php";
        require __DIR__ . "/lib/" . $_POST["action"] . ".php";
       
    }
    
} else {
     echo json_encode(["teste"=> true]);
        exit;
}