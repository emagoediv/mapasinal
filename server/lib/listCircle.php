<?php

extract($_POST);
$sql = "SELECT * FROM circles WHERE idUser = :idUser";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':idUser', $idUser);
$stmt->execute();
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
if ($result == false) {
    echo json_encode(["status"=>false]);
    exit;
}
echo json_encode(["status" => true, "circles" => $result]);
exit;