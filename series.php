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
  <script src="series.js" defer></script>
</head>
<body>
<div class="SearchBar">
    <span>
      <form class="SB">
        <input type="text" placeholder="Search by Title" name="q" id="usertext">
        <button type="submit" id="mybtn"><img src="img/search.png" alt="search icon"> </button>
      </form>
      <form class="genre-filter" action="">
        <h5>In the mood for: </h5>
        <input type="button" value="Comedy" name="q" id="comedyInput">
        <input type="button" value="Horror" name="q" id="horrorInput">
        <input type="button" value="Action" name="q" id="actionInput">
        <input type="button" value="Drama" name="q" id="dramaInput">
      </form>
      <form class="other-filter" action="">
        <h5>Filter By: </h5>
        <input type="button" value="Ratings" name="q" id="ratingInput">
        <input type="button" value="New Releases" name="q" id="yearInput">
      </form>
    </span>
  </div>
<div id="grid-container">
  </div>
</body>
</html>