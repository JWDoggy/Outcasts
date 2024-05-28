// u22512374
var ID;
function login(event){
  event.preventDefault();
  // Check if username and password is valid
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // create json data that is going to be sent
  var jsonObj = {
    "type": "Login",
    "email": email,
    "password": password
  };
  // Make request to API
  var jsonstring = JSON.stringify(jsonObj);

  var req = new XMLHttpRequest();
  req.onreadystatechange = function(){
    if(req.readyState === XMLHttpRequest.DONE){
      var responseData = JSON.parse(req.responseText);
      console.log(responseData);
      if(responseData.status === 'success'){
        ID = responseData.data;
        // make another post request
        var jso2 = {
          "type": "SingeCheck",
          "ID": ID
        };

        var jsonstring2 = JSON.stringify(jso2);
        var req2 = new XMLHttpRequest();
        req2.onreadystatechange = function() {
            if (req2.readyState === XMLHttpRequest.DONE) {
                var responseData = JSON.parse(req2.responseText);
                if (responseData.status === 'success') {
                    window.open("main.php",'_self');
                } else {
                    // Open familypage
                    window.open('familypage.html', '_self');
                }
            }
        };

        // Make sure to use req2 here instead of req
        req2.open('POST', "api.php", true);
        req2.setRequestHeader('Content-Type', 'application/json');
        req2.send(jsonstring2);


        // localStorage.setItem('userID',ID);
        // console.log("success");
        // window.open("Listing.php",'_self');

      } else {
        console.log("failed");
      }
      // if(req.status === 200){
        
      //   //alert("")
      //   // if logged in successfulyy start a session
      //   // console.log(responseData);
      //   // localStorage.setItem("apikey", responseData.data.apikey);
      //   // if(responseData.status === "success"){
      //   //   console.log('request success');
      //   // window.open("Listing.php",'_self');
      //   // }
        
        

      // } else {
      //   // request failed
      //   console.log("Request failed");
      // }
    }
  };
  // wheatley.cs.up.ac.za/u22512374/api.php
  req.open('POST', "api.php", true);
  req.setRequestHeader('Content-Type', 'application/json');
  req.send(jsonstring);


}

/*
  {
    "status": "success",
    "timestamp": 1714647027,
    "data": {
        "apikey": "HaFFJLfPF20Id5h"
    }
  }
*/

