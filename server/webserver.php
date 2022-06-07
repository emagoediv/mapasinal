<?php

require_once __DIR__ . "/vendor/autoload.php";
use Mapasinal\Controller\MapasinalController;

if (isset($_POST["request"])) {
    $mapasinal = new MapasinalController($_POST["action"], $_POST);
    
} else {
    Header("Location: ../app/pages/");
}