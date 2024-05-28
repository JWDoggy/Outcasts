<?php
include('header.php');
// session_start();
  $cssFile = 'css/Listing.css';

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="<?php echo $cssFile; ?>">
  <script src="movies.js" defer></script>
</head>
<body>
<div class="SearchBar">
    <span>
      <form class="SB">
        <input type="text" placeholder="Search by Title" name="q" id="usertext">
        <button type="submit" id="mybtn"><img src="img/search.png" alt="search icon"> </button>
      </form>
    </span>
  </div>
<div id="grid-container">
  </div>
</body>
</html>