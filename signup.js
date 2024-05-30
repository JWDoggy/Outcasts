var family = false;
var single = false;

function showForm(formType) {
  document.getElementById('family-form').classList.add('form-hidden');
  document.getElementById('single-form').classList.add('form-hidden');

  if (formType === 'family') {
    document.getElementById('family-form').classList.remove('form-hidden');
    var btnSingle = document.getElementById('single');

    btnSingle.style.display = 'none';
    family = true;
    
  } else if (formType === 'single') {
    document.getElementById('single-form').classList.remove('form-hidden');
    var btnFamily = document.getElementById('fam');
    btnFamily.style.display = 'none';
    single = true; 
  }
}


function showFamilyMembersForm() {
  return new Promise((resolve) => {
    const numMembers = document.getElementById('numMembers').value;
    const familyMembersInputs = document.getElementById('familyMembersInputs');
    
    familyMembersInputs.innerHTML = '';
    
    for (let i = 1; i <= numMembers; i++) {
      const memberField = document.createElement('div');
      memberField.classList.add('field', 'input');
      
      memberField.innerHTML = `
        <label for="memberName${i}">Member ${i} Name:</label>
        <input type="text" name="memberName${i}" id="memberName${i}" autocomplete="off" required>
        <label for="memberSurname${i}">Member ${i} Surname:</label>
        <input type="text" name="memberSurname${i}" id="memberSurname${i}" autocomplete="off" required>
      `;
      
      familyMembersInputs.appendChild(memberField);
    }
    
    document.getElementById('familyMembersModal').style.display = 'block';

    // Add event listener to handle the form submission inside the modal
    document.getElementById('familyMembersForm').addEventListener('submit', function(event) {
      event.preventDefault();
      
      const form = document.getElementById('familyMembersForm');
      const formData = new FormData(form);
      const data = {};
      
      formData.forEach((value, key) => {
        data[key] = value;
      });
      
      console.log('Family members data:', data);
      // Close the modal
      closeModal();
      // Resolve the promise with the collected family members data
      resolve(data);
    });
  });
}

function closeModal() {
  document.getElementById('familyMembersModal').style.display = 'none';
}

const data = {};
var bool = false;
function submitFamilyMembers() {
  
  const form = document.getElementById('familyMembersForm');
  const formData = new FormData(form);
  
  formData.forEach((value, key) => {
    data[key] = value;
  });
  
  console.log('Family members data:', data);
  // Handle the form submission, e.g., send data to the server
  
  closeModal();

}

function signUp(event){
event.preventDefault();
  if(family){
    
      const email = document.getElementById('email').value;
      const name = document.getElementById('name').value;
      const surname = document.getElementById('surname').value;
      const password = document.getElementById('password').value;
      const membercount = document.getElementById('numMembers').value;
    
      showFamilyMembersForm()
      .then((familyMembersData) => {
        var obj = {
          "type": "RegisterFam",
          "name": name,
          "surname": surname,
          "email": email,
          "password": password,
          "mebercount": membercount,
          "familymembers": familyMembersData
        }

        console.log(obj);

        var jsonObj = JSON.stringify(obj);
        var req = new XMLHttpRequest();
        req.onreadystatechange = function(){
          if(req.readyState === XMLHttpRequest.DONE){
            if(req.status === 200){
              var responseData = JSON.parse(req.responseText);
              
              if(responseData.status === 'success'){
                // when a user register their theme is set to default and then in the listing page they can change it
                console.log('success');
                var ID = responseData.data;
                localStorage.setItem('userID',ID);
                window.open("movies.php",'_self');
              } else {
                console.log(responseData.message);
              }
            } else {
              console.log("error");
            }
          }
        };
        req.open('POST', "api.php", true);
        req.setRequestHeader('Content-Type', 'application/json');
        req.send(jsonObj);
      });

      

  } else {
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const password = document.getElementById('password').value


    var obj = {
      "type": "Register",
      "name": name,
      "surname": surname,
      "email": email,
      "password": password
    }

    console.log(obj);

    var jsonObj = JSON.stringify(obj);
    var req = new XMLHttpRequest();
    req.onreadystatechange = function(){
      if(req.readyState === XMLHttpRequest.DONE){
        if(req.status === 200){
          var responseData = JSON.parse(req.responseText);
          
          if(responseData.status === 'success'){
            // when a user register their theme is set to default and then in the listing page they can change it
            console.log('success');
            var ID = responseData.data;
            localStorage.setItem('userID',ID);
            window.open("movies.php",'_self');
          } else {
            console.log(responseData.message);
          }
        } else {
          console.log("error");
        }
      }
    };
    req.open('POST', "api.php", true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(jsonObj);

  }


}


function redirect(event){
  console.log("Entered the function");
  event.preventDefault();
  window.location.href = "Listing.php";
}