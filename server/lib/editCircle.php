<?php

extract($_POST);
$sql = "SELECT * FROM circles WHERE idCircle = :idCircle";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':idCircle', $idCircle);
$stmt->execute();
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
if ($result == false) {
    echo json_encode(["status"=>false]);
    exit;
}
echo json_encode(["status"=>true, "circles"=>$result]);
exit;