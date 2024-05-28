<!-- <?php
if (session_status() == PHP_SESSION_NONE) {
  session_start();
}
?> -->

<header class="header">
    <img src="img/LogoMakr-4c0eRl.png" class="logo" alt="logos">
    <nav class="navbar">

      <?php
      
          // Use is logged in
          echo "<a href='movies.php'>Movies</a>";
          echo "<a href='series.php'>Series</a>";
          
          echo "<a href='logout.php'>Logout</a>";
          echo "<a href='#'>Account</a>";

      ?>
    </nav>
</header>

