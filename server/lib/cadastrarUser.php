<?php
extract($_POST);
$sql = "SELECT id FROM users WHERE email = :email";
$stmt = $conn->prepare($sql);
$stmt->bindValue(":email", $email);
$stmt->execute();
$result = $stmt->fetch(PDO::FETCH_OBJ);
if($result != false) {
    echo json_encode(["status"=>false]);
    exit;
}else {
    $sql = "INSERT INTO users VALUES(0, :name, :email, :password)";
    $stmt = $conn->prepare($sql);
    $stmt->bindValue(":name", $name);
    $stmt->bindValue(":email", $email);
    $stmt->bindValue(":password", sha1($password));
    if ($stmt->execute()) {
        echo json_encode(["status"=>true]);
        exit;
    }
}
?>