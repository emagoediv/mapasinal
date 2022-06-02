<?php

extract($_POST);
$sql = "SELECT id FROM users WHERE name = :name AND password = :password";
$stmt = $conn->prepare($sql);
$stmt->bindValue(":name", $name);
$stmt->bindValue(":password", sha1($password));
$stmt->execute();
$count = $stmt->rowCount();
$result = $stmt->fetch(PDO::FETCH_OBJ);
if($count === 1) {
    echo json_encode(["status"=>$result->id]);
    exit;
} else {
    echo json_encode(["status"=>false]);
    exit;
}
