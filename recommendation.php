<!-- u22512374 Herman Engelbrecht-->
<?php
include('header.php');
  $cssFile = 'css/ViewStyle.css';

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>View Page</title>
  <link rel="stylesheet" href="<?php echo $cssFile; ?>">
  <script src="recommendation.js" defer></script>
</head>
<body>

  <div id="BigContainer">
    
    <section class="slideshow">
    <h3>Top Rated Movies: </h3>
      <span id="item_1">
      </span>
      <span id="itemLeft">
      </span>
      <span id="itemRight">
      </span>
      <span id="farLeft">
      </span>
      <span id="farRight">
      </span>
    </section>
  
    <div class="Buttons">
      <span class="button">
        <button type="button" id="btnLeft">
          <i class="arrow left"></i>
        </button>
      </span>
      <span class="button">
        <button type="button" id="btnRight">
          <i class="arrow right"></i>
        </button>
      </span>
    </div>
  </div>

  <div id="BigContainer2">
    
    <section class="slideshow2">
    <h3>New Releases in Movies: </h3>
      <span id="item_12">
      </span>
      <span id="itemLeft2">
      </span>
      <span id="itemRight2">
      </span>
      <span id="farLeft2">
      </span>
      <span id="farRight2">
      </span>
    </section>
  
    <div class="Buttons">
      <span class="button">
        <button type="button" id="btnLeft2">
          <i class="arrow left"></i>
        </button>
      </span>
      <span class="button">
        <button type="button" id="btnRight2">
          <i class="arrow right"></i>
        </button>
      </span>
    </div>
  </div>

  <div id="BigContainer3">
    
    <section class="slideshow3">
    <h3>Top Rated Series: </h3>
      <span id="item_13">
      </span>
      <span id="itemLeft3">
      </span>
      <span id="itemRight3">
      </span>
      <span id="farLeft3">
      </span>
      <span id="farRight3">
      </span>
    </section>
  
    <div class="Buttons">
      <span class="button">
        <button type="button" id="btnLeft3">
          <i class="arrow left"></i>
        </button>
      </span>
      <span class="button">
        <button type="button" id="btnRight3">
          <i class="arrow right"></i>
        </button>
      </span>
    </div>
  </div>

  <div id="BigContainer4">
    
    <section class="slideshow4">
    <h3>New Releases in Series: </h3>
      <span id="item_14">
      </span>
      <span id="itemLeft4">
      </span>
      <span id="itemRight4">
      </span>
      <span id="farLeft4">
      </span>
      <span id="farRight4">
      </span>
    </section>
  
    <div class="Buttons">
      <span class="button">
        <button type="button" id="btnLeft4">
          <i class="arrow left"></i>
        </button>
      </span>
      <span class="button">
        <button type="button" id="btnRight4">
          <i class="arrow right"></i>
        </button>
      </span>
    </div>
  </div>
  
</body>
</html>

