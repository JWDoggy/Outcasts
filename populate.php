<?php
header('Content-Type: application/json');

// Include the Config class
require_once('config.php');

// Create a new instance of the Config class
$config = Config::instance();

// Establish database connection
$conn = $config->connection();

if ($conn) {
    // Retrieve all records from the movies table
    $sql = "SELECT imdb_id FROM series";
    $result = $conn->query($sql);

    $count = 0;
    if ($result->num_rows > 0) {
        // Loop through each record
        
            while ($row = $result->fetch_assoc()) {
                // while($count < 500 && $count > 150){
                $imdb_id = $row['imdb_id'];
    
                // Make GET request to OMDB API
                $url = "https://www.omdbapi.com/?i=$imdb_id&apikey=86f79e91";
                $response = file_get_contents($url);
    
                if ($response !== false) {
                    $data = json_decode($response, true);
    
                    // Extract the "Poster" value
                    $poster = $data['Poster'];

                    if(!isset($poster)){
                        continue;
                    }
    
                    // Update the corresponding record in the movies table
                    $update_sql = "UPDATE series SET poster = ? WHERE imdb_id = ?";
                    $stmt = $conn->prepare($update_sql);
                    $stmt->bind_param('ss', $poster, $imdb_id);
                    $stmt->execute();
                    $stmt->close();
                } else {
                    // Handle error if API request fails
                    // echo json_encode(array(
                    //     'success' => false,
                    //     'message' => 'Failed to fetch data from OMDB API'
                    // ));
                    // exit();
                    continue;
                }
                
    //    }
    //    $count++;
            }
            
    } else {
        // Handle if no records found in the movies table
        echo json_encode(array(
            'success' => false,
            'message' => 'No records found in the movies table'
        ));
        exit();
    }

    // Close database connection
    $conn->close();

    // Response after successful update
    echo json_encode(array(
        'success' => true,
        'message' => 'Poster values updated successfully'
    ));
} else {
    // Handle if database connection fails
    echo json_encode(array(
        'success' => false,
        'message' => 'Database connection failed'
    ));
}
?>
