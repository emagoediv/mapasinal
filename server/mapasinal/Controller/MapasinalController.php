<?php

namespace Mapasinal\Controller;
use Mapasinal\Model\UserModel;
use Mapasinal\Model\CircleModel;
class MapasinalController
{
    public $action;
    public $dados;
    private $actionPossiblesUser = ["cadastrarUser", "loginUser"];
    private $actionPossiblesCircle = ["listCircle", "cadastrarCircle", "lerCircle", "deleteCircle", "editCircle", "saveCircle"];
    
    public function __construct($action, $dados)
    {
        $this->dados = $dados;
        $this->action = $action;
        return $this->executeAction();
    }

    private function executeAction() {
        if(in_array($this->action, $this->actionPossiblesUser)) {
            require __DIR__ . "/../../config/Conn.php";
            $user = new UserModel($conn, $this->dados);
            if ($this->action == "cadastrarUser") { 
                $user->cadastrarUser();
            } else if ($this->action == "loginUser") {
                $user->loginUser();
            }
        } else if (in_array($this->action, $this->actionPossiblesCircle)) {
            require __DIR__ . "/../../config/Conn.php";
            $circle = new CircleModel($conn, $this->dados);
            if ($this->action == "cadastrarCircle") { 
                $circle->cadastrarCircle();
            } else if ($this->action == "listCircle") {
                $circle->listCircle();
            } else if ($this->action == "editCircle") {
                $circle->editCircle();
            } else if ($this->action == "lerCircle") {
                $circle->lerCircle();
            } else if ($this->action == "deleteCircle") {
                $circle->deleteCircle();
            } else if ($this->action == "editCircle") {
                $circle->editCircle();
            } else if ($this->action == "saveCircle") {
                $circle->saveCircle();
            }
        }
    }
}