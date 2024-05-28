<?php
// $conn is the connection to my database
session_start();
header('Content-Type: application/json');
include "config.php";
$config = config::instance();
$conn = $config->Connection();

$tester = API::instance($conn);
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $post_body = json_decode(file_get_contents("php://input"), true);
    
    if (
        !isset($post_body['type'])
    ) {
        $error ="Type must be specified";
        $response = [
            "status" => "error",
            "timestamp"=> time(),
            "message" => $error,
        ];
        $json_response = json_encode($response);
        echo $json_response;
        exit();

    } else {
        if($post_body['type']=== 'SingeCheck'){
            $tester->SingeCheck();
        }

        if($post_body['type'] === 'GetSeries'){
            $tester->GetSeries();
        }

        if($post_body['type'] === "Register"){
            $tester->Register();

        }
        if($post_body['type'] === "GetMovies"){
            $tester->GetMovies();
        } 
        if($post_body['type'] === 'Login'){
            $tester->Login();
        }
        if($post_body['type'] === 'Favourite'){
            $tester->Favourite();
        }
        if($post_body['type'] === 'GetFavourites'){
            $tester->GetFavourites();
        }

        if($post_body['type'] === 'Remove'){
            $tester->Remove();
        }
        if($post_body['type'] === 'ChangeTheme'){
            $tester->ChangeTheme();
        }
    }
} else {
    $error =
                        "Method not supported";
                    $response = [
                        "status" => "error",
                        "timestamp"=> time(),
                        "message" => $error,
                    ];
                    $json_response = json_encode($response);
                    echo $json_response;
                    exit();
}



class API
{
    protected $dbconnection;
    public static function instance($conn)
    {
        static $instance = null;
        if ($instance === null) {
            $instance = new API($conn);
        }
        return $instance;
    }
    private function __construct($conn)
    {
        $this->dbconnection = $conn;
    }
    public function __destruct()
    {
        $this->dbconnection->close();
    }

    public function Connection()
    {
        return $this->dbconnection;
    }

    public function SingeCheck(){
        $conn = $this->dbconnection;
        $post_body = json_decode(file_get_contents("php://input"), true);
    
            // Check that the entered email and password is in the database
            $ID = $post_body["ID"];
            $qeury_email = "Select * from single_account where user_id = '$ID'";
            $response = mysqli_query($conn, $qeury_email);    
            if(mysqli_num_rows($response) > 0){
                // email is fine
                // check password
                $return = [
                    "status" => "success",
                    "timestamp"=> time()
                ];
                $json_response = json_encode($return);
                http_response_code(200);
                // header("Content-Type: application/json");
                echo $json_response;
            } else {
                // email was incorrect
                $response = [
                    "status" => "error",
                    "timestamp" => time(),
                    "message" => "Family Account"
                ];
                $json_response = json_encode($response);
                echo $json_response;
                exit();
            }
    }

    public function ChangeTheme(){
        $conn = $this->dbconnection;
        $post_body = json_decode(file_get_contents("php://input"), true);
        $require_keys = ['NewTheme','apikey'];
        foreach ($require_keys as $key) {
            // Check that all the required fields are entered
            if(!isset($post_body[$key])){
                $response = [
                    "status" => "error",
                    "timestamp"=> time(),
                    "message" =>
                        "Missing Parameters",
                ];
                $json_response = json_encode($response);
                echo $json_response;
                exit();
            }
        }      

        $theme = $post_body["NewTheme"];
        $apikey = $post_body["apikey"];

        $sql = "UPDATE user_information SET theme = ? WHERE api_key = ?";
        $stmt = $conn->prepare($sql);
        if (!$stmt) {
            // Handle prepare error
            echo "Prepare error: " . $conn->error;
            exit();
        }

        $stmt->bind_param("ss", $theme, $apikey);
        if (!$stmt->execute()) {
            // Handle execute error
            echo "Execute error: " . $stmt->error;
            exit();
        }

        if ($stmt->execute()) {
            // Theme updated successfully
            //echo "Theme updated successfully.";
            $_SESSION['theme'] = $theme;
            http_response_code(200);
            $response = [
                "status" => "success",
                "message" => "Successfully updated theme"
            ];
            echo json_encode($response);
        } else {
            // Failed to update theme
            echo "Failed to update theme: " . $conn->error;
            http_response_code(500);
            $response = [
                "status" => "error",
                "message" => "Failed to update theme"
            ];
            echo json_encode($response);
        }
        $stmt->close();
    }

    public function Remove(){
        $conn = $this->dbconnection;
        $post_body = json_decode(file_get_contents("php://input"), true);
        $require_keys = ['title',"price"];
        foreach ($require_keys as $key) {
            // Check that all the required fields are entered
            if(!isset($post_body[$key])){
                $response = [
                    "status" => "error",
                    "timestamp"=> time(),
                    "message" =>
                        "Missing Parameters",
                ];
                $json_response = json_encode($response);
                echo $json_response;
                exit();
            }
        }

        $title = $post_body["title"];
        $price = $post_body['price'];
        $result = -1;
        
        $sql = "SELECT id FROM listings WHERE title = ? AND price = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ss", $title, $price);
        $stmt->execute();
        $stmt->bind_result($result); 
        $stmt->fetch();

        $stmt->close();

        $sql = "DELETE FROM favourites where listing_id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $result);
        $stmt->execute();
        $affected_rows = $stmt->affected_rows;
        $stmt->close();
        
        if ($affected_rows > 0) {
            // Return success message with HTTP response code 200
            http_response_code(200);
            $response = [
                "status" => "success"
            ];
            echo json_encode($response);
        } else {
            // Return error message with HTTP response code 500 (Internal Server Error)
            http_response_code(500);
            $response = [
                "status" => "error",
                "message" => "Failed to delete favorite"
            ];
            echo json_encode($response);
        }
    }

    public function GetFavourites(){
        $conn = $this->dbconnection;
        $post_body = json_decode(file_get_contents("php://input"), true);
        $require_keys = ['id', 'apikey'];
        foreach ($require_keys as $key) {
            // Check that all the required fields are entered
            if(!isset($post_body[$key])){
                $response = [
                    "status" => "error",
                    "timestamp"=> time(),
                    "message" =>
                        "Missing Parameters",
                ];
                $json_response = json_encode($response);
                echo $json_response;
                exit();
            }
        }
        $listing_id = -1;
        $user_id = $post_body["id"];
        $listing_ids = []; // Initialize an empty array to store the results
        
        $sql = "SELECT listing_id FROM favourites WHERE user_id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $user_id);
        $stmt->execute();
        $stmt->bind_result($listing_id); // Bind the result to a variable
        
        // Fetch each row and store in an array of objects
        while ($stmt->fetch()) {
            $listing_ids[] = ['listing_id' => $listing_id]; // Store each result in an object
        }
        
        $stmt->close();

        // now i have all the listing ids, 
        // return image, price title location bedrooms bathrooms
        $all_listing_details = [];
        foreach ($listing_ids as $listing) {
            //echo $listing['listing_id'] . "<br>";
            $images = "";
            $price = "";
            $title = "";
            $location = "";
            $bedrooms = "";
            $bathrooms = "";

            $sql2 = "SELECT images,price,title,location,bedrooms,bathrooms FROM listings WHERE id = ?";
            $stmt2 = $conn->prepare($sql2);
            $stmt2->bind_param("s", $listing["listing_id"]);
            $stmt2->execute();
            $stmt2->bind_result($images, $price, $title, $location, $bedrooms, $bathrooms); // Bind the result to variables
            
            // Fetch the result
            $stmt2->fetch();
            
            // Split the images string by commas and take the first image
            $images_array = explode(',', $images);
            $first_image = $images_array[0];
            
            // Create an object to store the result
            $listing_details = [
                'images' => $first_image,
                'price' => $price,
                'title' => $title,
                'location' => $location,
                'bedrooms' => $bedrooms,
                'bathrooms' => $bathrooms
            ];
            $all_listing_details[] = $listing_details;
            
            $stmt2->close();
            
            // Now $listing_details is an object containing the details of the listing, with only the first image

        }
        http_response_code(200);
        echo json_encode($all_listing_details);
    }

    public function Favourite(){
        $conn = $this->dbconnection;
        $post_body = json_decode(file_get_contents("php://input"), true);
        $require_keys = ['id', 'apikey'];
        foreach ($require_keys as $key) {
            // Check that all the required fields are entered
            if(!isset($post_body[$key])){
                $response = [
                    "status" => "error",
                    "timestamp"=> time(),
                    "message" =>
                        "Missing Parameters",
                ];
                $json_response = json_encode($response);
                echo $json_response;
                exit();
            }
        }
        // Search for the ID
        $apiKey = $post_body['apikey'];
        $userId = -1;
        $sql = "SELECT id FROM user_information WHERE api_key = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $apiKey);
        $stmt->execute();
        $stmt->bind_result($userId);
        $stmt->fetch();
        $stmt->close();

        if($userId != -1){ // User found
            $listing_id = $post_body["id"];
            
            $sql = "INSERT INTO favourites (user_id, listing_id) VALUES (?, ?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("ii", $userId, $listing_id); 
            $insertResult = $stmt->execute();
            $stmt->close();
    
            if($insertResult) { 
                $response = [
                    "result" => $insertResult,
                    "status" => "success",
                    "timestamp" => time(),
                ];
                http_response_code(200);
                echo json_encode($response);
            } else { 
                $response = [
                    "status" => "error",
                    "timestamp" => time(),
                    "message" => "Failed to add to favourites."
                ];
                http_response_code(500); 
                echo json_encode($response);
            }
        } else { // User not found
            $response = [
                "status" => "error",
                "timestamp" => time(),
                "message" => "User not found."
            ];
            http_response_code(404); // Not Found
            echo json_encode($response);
        }

      
    }
    public function Register()
    {
        if ($_SERVER["REQUEST_METHOD"] === "POST") {
            $conn = $this->dbconnection;
            $post_body = json_decode(file_get_contents("php://input"), true);

            if (
                isset($post_body["type"]) &&
                $post_body["type"] === "Register"
            ) {
                // Check if any of the keys are entered
                $require_keys = ["name", "surname", "email", "password"];
                foreach ($require_keys as $key) {
                    if (!isset($post_body[$key])) {
                        $response = [
                            "status" => "error",
                            "message" =>
                                "Not all the required keys are filled in",
                        ];
                        $json_response = json_encode($response);
                        echo $json_response;
                        exit();
                    }
                }

                // After checking that all the keys are set, check that the values of the keys arent empty
                foreach ($require_keys as $key) {
                    if (empty($post_body[$key])) {
                        $response = [
                            "status" => "error",
                            "message" => "Some keys have empty values",
                        ];
                        $json_response = json_encode($response);
                        echo $json_response;
                        exit();
                    }
                }
                $name = $post_body["name"];
                $surname = $post_body["surname"];
                $email = $post_body["email"];
                //validate user, check if inputted details exist in the database
                $users_qeury = "Select name,surname from user_information where name = '$name' and surname ='$surname' and email = '$email'";
                $sql_users = mysqli_query($conn, $users_qeury);
                if ($sql_users) {
                    // Fetch rows from the result set
                    if (mysqli_num_rows($sql_users) > 0) {
                        $response = [
                            "status" => "error",
                            "message" => "User already exists",
                        ];
                        $json_response = json_encode($response);
                        echo $json_response;
                        exit();
                    }
                } else {
                    // Handle query error
                    echo "Error: " . mysqli_error($conn);
                }

                //Keys are set and values are entered, check specific cases
                //Test password
                if (!validatePassword($post_body["password"])) {
                    $response = [
                        "status" => "error",
                        "message" => "Password incorrect",
                    ];
                    $json_response = json_encode($response);
                    echo $json_response;
                    exit();
                }
                // email
                if (!validateEmail($post_body["email"])) {
                    $response = [
                        "status" => "error",
                        "message" => "Invalid email",
                    ];
                    $json_response = json_encode($response);
                    echo $json_response;
                    exit();
                }
                // name
                if (!validateName($post_body["name"])) {
                    $response = [
                        "status" => "error",
                        "message" => "Invalid name",
                    ];
                    $json_response = json_encode($response);
                    echo $json_response;
                    exit();
                }
                // surname
                if (!validateSurname($post_body["surname"])) {
                    $response = [
                        "status" => "error",
                        "message" => "Invalid email",
                    ];
                    $json_response = json_encode($response);
                    echo $json_response;
                    exit();
                }

                

                //Get the name, surname, email and password + validate it

                // check email
                $email_query = "SELECT * FROM user_information WHERE email = '$email'";
                $email_result = mysqli_query($conn, $email_query);
                if ($email_result) {
                    if (mysqli_num_rows($email_result) > 0) {
                        $response = [
                            "status" => "error",
                            "message" => "Email already in use",
                        ];
                        $json_response = json_encode($response);
                        echo $json_response;
                        exit();
                    }
                } else {
                    echo "Problem with email qeury" . mysqli_error($conn);
                }
                $password = $post_body["password"];
                // Add salt to password
                
                $salt ="Jf4gK7hP2e" ;
                $password_with_salt =$password . $salt;
                $password_hash = sha1($password_with_salt);
                // create new api key
                $api_key = generateApiKey(15);

                // sanatize input :
                $name = mysqli_real_escape_string($conn, $name);
                $surname = mysqli_real_escape_string($conn, $surname);
                $email = mysqli_real_escape_string($conn, $email);
                $password = mysqli_real_escape_string($conn, $password_hash);
                // add this user to the database
                $sql = "INSERT INTO user_information (name,surname,email,password,api_key) VALUES ('$name','$surname','$email','$password','$api_key')";

                if (mysqli_query($conn, $sql)) {
                    $response = [
                        "status" => "success",
                        "timestamp" => time(),
                        "data" => [
                            "apikey" => $api_key
                        ]
                    ];
                    $_SESSION['apikey'] = $api_key;
                    $_SESSION['name'] = "$name";

                    http_response_code(200);
                    $json_response = json_encode($response);
                    echo $json_response;
                } else {
                    $error =
                        "Values was not inserted" . mysqli_error($conn);
                    $response = [
                        "status" => "error",
                        "message" => $error,
                    ];
                    $json_response = json_encode($response);
                    echo $json_response;
                    exit();
                }
            }
        } 
    }

    public function Login(){
        $conn = $this->dbconnection;
        $post_body = json_decode(file_get_contents("php://input"), true);
        $require_keys = ['email', 'password'];
        foreach ($require_keys as $key) {
            // Check that all the required fields are entered
            if(!isset($post_body[$key])){
                $response = [
                    "status" => "error",
                    "timestamp"=> time(),
                    "message" =>
                        "Missing Parameters",
                ];
                $json_response = json_encode($response);
                echo $json_response;
                exit();
            }
        }
            // Check that the entered email and password is in the database
            $email = $post_body["email"];
            $password = $post_body["password"];
            $qeury_email = "Select * from loginInfo where email = '$email'";
            $response = mysqli_query($conn, $qeury_email);    
            if(mysqli_num_rows($response) > 0){
                // email is fine
                // check password
                $qeury_password = "Select user_id from loginInfo where email = '$email' AND password = '$password'";
                $response2 = mysqli_query($conn, $qeury_password);
                if(mysqli_num_rows($response2) > 0){
                    
                    
                    // password and email is correct
                    // get API key
                    $row = mysqli_fetch_assoc($response2);
                    $user_id = $row['user_id'];

                    

                    // password is fine
                    $return = [
                        "status" => "success",
                        "timestamp"=> time(),
                        "data" =>  $user_id
                    ];
                    $json_response = json_encode($return);
                    http_response_code(200);
	                // header("Content-Type: application/json");
                    echo $json_response;

                    
                    // exit();
                } else {
                    // Password was incorrect
                    $response = [
                        "status" => "error",
                        "timestamp" => time(),
                        "message" => "Password incorrect"
                    ];
                    $json_response = json_encode($response);
                    echo $json_response;
                    exit();
                }
            } else {
                // email was incorrect
                $response = [
                    "status" => "error",
                    "timestamp" => time(),
                    "message" => "Email does not exist"
                ];
                $json_response = json_encode($response);
                echo $json_response;
                exit();
            }
    }

    public function GetMovies()
    {
        $conn = $this->dbconnection;
        $post_body = json_decode(file_get_contents("php://input"), true);
            // Check that the entered email and password is in the database
            $query_movies = "SELECT * FROM movies";
            $response = mysqli_query($conn, $query_movies);
    
            if(isset($post_body['movie'])){
                $name = $post_body['movie'];
                $name = $this->dbconnection->real_escape_string($name); // Sanitize input to prevent SQL injection

                $query_movies = "SELECT * FROM movies WHERE Title LIKE '%$name%'";
                $response = mysqli_query($this->dbconnection, $query_movies);

                if (mysqli_num_rows($response) > 0) {
                    $movies = [];

                    while ($row = mysqli_fetch_assoc($response)) {
                        $movies[] = $row;
                    }

                    // Success response with movies data
                    $response = [
                        "status" => "success",
                        "timestamp" => time(),
                        "data" => $movies
                    ];
                } else {
                    // No movies found
                    $response = [
                        "status" => "error",
                        "timestamp" => time(),
                        "message" => "No movies found"
                    ];
                }

                // Output the response as JSON
                echo json_encode($response);
            } else {
                if (mysqli_num_rows($response) > 0) {
                    $movies = [];
        
                    while ($row = mysqli_fetch_assoc($response)) {
                        $movies[] = $row;
                    }
        
                    // Success response with movies data
                    $response = [
                        "status" => "success",
                        "timestamp" => time(),
                        "data" => $movies
                    ];
                } else {
                    // No movies found
                    $response = [
                        "status" => "error",
                        "timestamp" => time(),
                        "message" => "No movies found"
                    ];
                }
        
                // Output the response as JSON
                echo json_encode($response);
            }
    }
    
    public function GetSeries()
    {
        $conn = $this->dbconnection;
        $post_body = json_decode(file_get_contents("php://input"), true);
            // Check that the entered email and password is in the database
            
    
            if(isset($post_body['series'])){
                $name = $post_body['series'];
                $name = $this->dbconnection->real_escape_string($name); // Sanitize input to prevent SQL injection

                $query_movies = "SELECT * FROM series WHERE Title LIKE '%$name%'";
                $response = mysqli_query($this->dbconnection, $query_movies);

                if (mysqli_num_rows($response) > 0) {
                    $movies = [];

                    while ($row = mysqli_fetch_assoc($response)) {
                        $movies[] = $row;
                    }

                    // Success response with movies data
                    $response = [
                        "status" => "success",
                        "timestamp" => time(),
                        "data" => $movies
                    ];
                } else {
                    // No movies found
                    $response = [
                        "status" => "error",
                        "timestamp" => time(),
                        "message" => "No movies found"
                    ];
                }

                // Output the response as JSON
                echo json_encode($response);
            } else {
                $query_movies = "SELECT * FROM series";
                $response = mysqli_query($conn, $query_movies);
                if (mysqli_num_rows($response) > 0) {
                    $movies = [];
        
                    while ($row = mysqli_fetch_assoc($response)) {
                        $movies[] = $row;
                    }
        
                    // Success response with movies data
                    $response = [
                        "status" => "success",
                        "timestamp" => time(),
                        "data" => $movies
                    ];
                } else {
                    // No movies found
                    $response = [
                        "status" => "error",
                        "timestamp" => time(),
                        "message" => "No movies found"
                    ];
                }
        
                // Output the response as JSON
                echo json_encode($response);
            }
    }
}

function generateApiKey($length = 15)
{
    $characters =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    $apiKey = "";
    $maxIndex = strlen($characters) - 1;

    for ($i = 0; $i < $length; $i++) {
        $apiKey .= $characters[rand(0, $maxIndex)];
    }

    return $apiKey;
}

function validateName($name)
{
    $regexName = "/^([a-zA-Z]+$)/";
    if (preg_match($regexName, $name)) {
        return true;
    } else {
        return false;
    }
}
function validateSurname($surname)
{
    $regexSurnane = "/^([a-zA-Z]+$)/";
    if (preg_match($regexSurnane, $surname)) {
        return true;
    } else {
        return false;
    }
}
function validatePassword($password)
{
    $regexPass =
        "/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[a-zA-Z]).{8,}$/";
    if (preg_match($regexPass, $password)) {
        return true;
    } else {
        return false;
    }
}
function validateEmail($email)
{
    if (
        preg_match(
            "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/",
            $email
        )
    ) {
        return true;
    } else {
        return false;
    }
}
