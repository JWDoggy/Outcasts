<?php
header('Content-Type: application/json');
  class Config {
    public $servername;
    public $username;
    public $password;
    public $dbname;

    public static function instance(){
        static $instance = null;
        if ($instance === null) {
            $instance = new Config();
        }
        return $instance;
    }

    private function __construct(){
        $this->servername = "wheatley.cs.up.ac.za";
        $this->username = "u22512374";
        $this->password = "7FLH6BHZHIU6XP2AFFBZ5TN7GLCDAAUQ";
        $this->dbname = "u22512374_221prac";
    }

    public function connection(){
        $conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);
        if ($conn->connect_error) {
            $response = array(
                'success' => false,
                'message' => 'Database connection failed: ' . $conn->connect_error
            );
            header('Content-Type: application/json');
            echo json_encode($response);
            return null;
        }
        return $conn;
    }
}

