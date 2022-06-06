<?php

extract($_POST);
$sql = "SELECT * FROM circles WHERE operadora = :operadora";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':operadora', $operadora);
$stmt->execute();
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
if ($result == false || (is_countable($result) ? count($result) : 0) == 0) {
    echo json_encode(["status"=>false]);
    exit;
}
echo json_encode(["status"=>true,"circles"=>$result]);
exit;