<?php
extract($_POST);

$sql = "INSERT INTO circles VALUES(0, :idUser, :latitude, :longitude, :raio, :color, :cor, NOW(), :operadora)";
$stmt = $conn->prepare($sql);
$stmt->bindValue(":idUser", $idUser);
$stmt->bindValue(":latitude", $latitude);
$stmt->bindValue(":longitude", $longitude);
$stmt->bindValue(":raio", $raio);
$stmt->bindValue(":cor", $cor);
$stmt->bindValue(":color", $color);
$stmt->bindValue(":operadora", $operadora);
if ($stmt->execute()) {
    echo json_encode(["status"=>true]);
    exit;
} else {
    echo json_encode(["status"=>false]);
}