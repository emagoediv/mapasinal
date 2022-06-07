<?php

namespace Mapasinal\Model;

class CircleModel
{
    public $dados;
    public $conn;

    public function __construct($conn, $dados)
    {
        $this->conn = $conn;
        $this->dados = $dados;
    }

    public function cadastrarCircle() {
        extract($this->dados);
        $sql = "INSERT INTO circles VALUES(0, :idUser, :latitude, :longitude, :raio, :color, :cor, NOW(), :operadora)";
        $stmt = $this->conn->prepare($sql);
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
    }

    public function listCircle() {
        extract($this->dados);
        $sql = "SELECT * FROM circles WHERE idUser = :idUser";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(':idUser', $idUser);
        $stmt->execute();
        $result = $stmt->fetchAll(\PDO::FETCH_ASSOC);
        if ($result == false) {
            echo json_encode(["status"=>false]);
            exit;
        }
        echo json_encode(["status" => true, "circles" => $result]);
        exit;
    }

    public function editCircle() {
        extract($this->dados);
        $sql = "SELECT * FROM circles WHERE idCircle = :idCircle";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(':idCircle', $idCircle);
        $stmt->execute();
        $result = $stmt->fetchAll(\PDO::FETCH_ASSOC);
        if ($result == false) {
            echo json_encode(["status"=>false]);
            exit;
        }
        echo json_encode(["status"=>true, "circles"=>$result]);
        exit;
    }

    public function lerCircle() {
        extract($this->dados);
        $sql = "SELECT * FROM circles WHERE operadora = :operadora";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(':operadora', $operadora);
        $stmt->execute();
        $result = $stmt->fetchAll(\PDO::FETCH_ASSOC);
        if ($result == false || (is_countable($result) ? count($result) : 0) == 0) {
            echo json_encode(["status"=>false]);
            exit;
        }
        echo json_encode(["status"=>true,"circles"=>$result]);
        exit;
    }

    public function deleteCircle() {
        extract($this->dados);
        $sql = "DELETE FROM circles WHERE idCircle = :idCircle";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(':idCircle', $idCircle);
        if ($stmt->execute()) {
            echo json_encode(["status" => true]);
            exit;
        }
        echo json_encode(["status"=>false]);
        exit;
    }

    public function saveCircle() {
        extract($this->dados);
        $sql = "UPDATE circles SET raio = :raio, color = :color, cor = :cor, operadora = :operadora WHERE idCircle = :idCircle";
        $stmt = $this->conn->prepare($sql);
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
    }

    
}