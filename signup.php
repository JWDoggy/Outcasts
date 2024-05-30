

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SignUp Page</title>
  <script src="signup.js"></script>
  <style>
    @font-face {
      font-family: face;
      src: url(Poppins/Poppins-LightItalic.ttf);
    }

    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: face;
    }

    body{
      background-color: rgb(237, 219, 197);
    }

    .container{
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 90vh;
    }

    .box{
      background: #ccb59a;
      display: flex;
      flex-direction: column;
      padding: 25px 25px;
      border-radius: 20px;
      box-shadow: 0 0 128px 0 rgba(0, 0, 0, 0.1),
                  0 32px 64px -48px rgba(0, 0, 0, 0.5);
    }
    .form-hidden {
  display: none;
}
     .form-box{
      width: 450px;
      margin: 0px 10px;
     }
    
     .form-box header{
      font-size: 25px;
      font-weight: 600;
      padding-bottom: 10px;
      border-bottom: 1px solid #9F8C76;
      margin-bottom: 10px;
     }

     .form-box form .field{
      margin-bottom: 10px;
      flex-direction: column;
     }

     .form-box form .input input{
      height: 40px;
      width: 100%;
      font-size: 16px;
      padding: 0 10px;
      border-radius: 5px;
      border: 1px solid;
      outline: none;
     }

     .btn{
      height: 35px;
      background: #7b6d5c;
      border: 0;
      border-radius: 5px;
      color: #fff;
      font-size: 15px;
      cursor: pointer;
      transition: all .3s;
      margin-top: 10px;
      padding: 0 10px;

     }

     .btn:hover{
      opacity: 0.82;
     }

     .buttons button:hover {
  background-color: #997e5f;
}

     .submit{
      width: 100%;
     }

     .links{
      margin-bottom: 15px;
     }

     .field-input-family{
      display: none;
     }

     .modal {
  display: none; 
  position: fixed;
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
  padding-top: 60px;
}

.modal-content {
  background-color: #fefefe;
  margin: 5% auto; 
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

  </style>
</head>
<body>
<div class="container">
  <div class="box form-box">
    <header>Choose your option: </header>
    <div class="buttons">
      <button onclick="showForm('family')" id="fam">Family Account</button>
      <button onclick="showForm('single')" id="single">Single Account</button>
    </div>

    <form action="" method="post" id="family-form" class="form-hidden">
      <div class="field input">
        <label for="name">Head of family name:</label>
        <input type="text" name="Name" id="name" autocomplete="off" required>
      </div>
      <div class="field input">
        <label for="surname">Head of family surname:</label>
        <input type="text" name="surname" id="surname" autocomplete="off" required>
      </div>
      <div class="field input">
        <label for="email">Email:</label>
        <input type="email" name="email" id="email" autocomplete="off" required>
      </div>
      <div class="field input">
        <label for="password">Password:</label>
        <input type="password" name="password" id="password" autocomplete="off" required>
      </div>
      <div class="field input">
        <label for="numMembers">Number of Members:</label>
        <input type="text" name="numMembers" id="numMembers" autocomplete="off" required>
      </div>
      <div class="field">
        <input type="submit" class="btn" name="submit" value="Sign Up" onclick="signUp(event)">
      </div>
    </form>

    <form action="" method="post" id="single-form" class="form-hidden">
      <div class="field input">
        <label for="name">Name:</label>
        <input type="text" name="name" id="single-name" autocomplete="off" required>
      </div>
      <div class="field input">
        <label for="surname">Surname:</label>
        <input type="text" name="surname" id="single-surname" autocomplete="off" required>
      </div>
      <div class="field input">
        <label for="email">Email:</label>
        <input type="email" name="email" id="single-email" autocomplete="off" required>
      </div>
      <div class="field input">
        <label for="password">Password:</label>
        <input type="password" name="password" id="single-password" autocomplete="off" required>
      </div>
      <div class="field">
        <input type="submit" class="btn" name="submit" value="Sign Up" onclick="signUp(event)">
      </div>
    </form>


  </div>
</div>

  
<div id="familyMembersModal" class="modal">
  <div class="modal-content">
    <span class="close" onclick="closeModal()">&times;</span>
    <form id="familyMembersForm" onsubmit="submitFamilyMembers(event)">
      <div id="familyMembersInputs"></div>
      <div class="field">
        <input type="submit" class="btn" name="submit" value="Submit Family Members">
      </div>
    </form>
  </div>
</div>

</body>
</html>