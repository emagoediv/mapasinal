<?php

namespace Mapasinal\Model;

class UserModel
{
    public $dados;
    public $conn;

    public function __construct($conn, $dados)
    {
        $this->conn = $conn;
        $this->dados = $dados;
    }

    public function cadastrarUser() {
        extract($this->dados);
        $result = $this->verifyEmail();
        if($result != false) {
            echo json_encode(["status"=>false]);
            exit;
        }else {
            $sql = "INSERT INTO users VALUES(0, :name, :email, :password)";
            $stmt = $this->conn->prepare($sql);
            $stmt->bindValue(":name", $name);
            $stmt->bindValue(":email", $email);
            $stmt->bindValue(":password", sha1($password));
            if ($stmt->execute()) {
                echo json_encode(["status"=>true]);
                exit;
            }
        }
    }

    public function loginUser() {
        extract($this->dados);
        $sql = "SELECT id FROM users WHERE name = :name AND password = :password";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(":name", $name);
        $stmt->bindValue(":password", sha1($password));
        $stmt->execute();
        $count = $stmt->rowCount();
        $result = $stmt->fetch(\PDO::FETCH_OBJ);
        if($count === 1) {
            echo json_encode(["status"=>$result->id]);
            exit;
        } else {
            echo json_encode(["status"=>false]);
            exit;
        }
    }

    private function verifyEmail() {
        extract($this->dados);
        $sql = "SELECT id FROM users WHERE email = :email";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(":email", $email);
        $stmt->execute();
        return $stmt->fetch(\PDO::FETCH_OBJ);
    }
}