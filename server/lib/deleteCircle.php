<?php

extract($_POST);
$sql = "DELETE FROM circles WHERE idCircle = :idCircle";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':idCircle', $idCircle);
if ($stmt->execute()) {
    echo json_encode(["status" => true]);
    exit;
}
    echo json_encode(["status"=>false]);
    exit;