<?php

extract($_POST);
$sql = "SELECT * FROM circles WHERE operadora = :operadora";
$stmt = $conn->prepare($sql);
$stmt->bindValue(':operadora', $operadora);
$stmt = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode([$stmt]);
exit;