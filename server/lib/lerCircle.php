<?php

extract($_POST);
$sql = "SELECT * FROM circles";
$stmt = $conn->query($sql);
$stmt = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode([$stmt]);
exit;