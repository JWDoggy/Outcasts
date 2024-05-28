<!-- u22512374 Herman Engelbrecht-->
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
  <title>Listing Page</title>
  <link rel="stylesheet" href="<?php echo $cssFile; ?>">
  <script src="Listing.js" defer></script>
</head>
<body>

  <div class="SearchBar">
    <span>
      <form class="SB">
        <input type="text" placeholder="Search by Title" name="q" id="usertext">
        <button type="submit" id="mybtn"><img src="img/search.png" alt="search icon"> </button>
      </form>
    </span>
    <!-- <span class="BoR">
      <fieldset>
        <form id="BRform">
          <div>
            <input type="radio" id="Buy" name="Options" value="Buy">
            <label for="Buy" id="label1">Buy property</label>
          </div>
          <div>
            <input type="radio" id="Rent" name="Options" value="Rent">
            <label for="Rent" id="label2">Rent property</label>
          </div>
        </form>
      </fieldset>
    </span>
    <span class="sort">
      <fieldset>
        <legend>Sort By:</legend>
        <div id="title">
          <input type="radio"name="sortby" id="title1">
          <label for="title1">Title</label>
        </div>
        <div id="price">
          <input type="radio" name="sortby" id="price1">
          <label for="price1" >Price</label>
        </div>
      </fieldset>
    </span>
    <span class="Filter">
      <fieldset>
        <legend>Filter By:</legend>
        <form action="" id="FilterForm">
          
          <input type="number" id="miP" name="minPrice">
          <label for="miP">Minimum Price:</label>
          
          <label for="maP" >Maximum Price:</label>
          <input type="number" id="maP"  name="maxPrice">

          <label for="nBa"  >Bathrooms:</label>
          <input type="number" id="nBa" name="numBath">

          <label for="nBe" >Bedrooms:</label>
          <input type="number" id="nBe" name="numBed">

          <button type="submit" id="fltbtn">FILTER</button>
        </form>
        </fieldset>
    </span>
    <span class="SaveButton">
      <button id="savebtn">Save filters</button>
    </span> -->

  </div>
  <img src="img/Loading/icegif-1260.gif" alt="gif" id="loading">
  <div id="grid-container">
  </div>

  
  
  
</body>
</html>
