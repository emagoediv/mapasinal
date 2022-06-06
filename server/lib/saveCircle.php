<?php
extract($_POST);

$sql = "UPDATE circles SET raio = :raio, color = :color, cor = :cor, operadora = :operadora WHERE idCircle = :idCircle";
$stmt = $conn->prepare($sql);
$stmt->bindValue(":raio", $raio);
$stmt->bindValue(":cor", $cor);
$stmt->bindValue(":color", $color);
$stmt->bindValue(":operadora", $operadora);
$stmt->bindValue(":idCircle", $idCircle);
if ($stmt->execute()) {
    echo json_encode(["status"=>true]);
    exit;
} else {
    echo json_encode(["status"=>false]);
}