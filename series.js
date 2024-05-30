document.addEventListener('DOMContentLoaded', function(){
  var Obj = {
    'type': 'GetSeries'
  }

  var jsonObj = JSON.stringify(Obj);
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if(xhr.readyState === XMLHttpRequest.DONE){

      if(xhr.responseText.length === 0){
        var noListingMessage = document.createElement('p');
        noListingMessage.id = "error";
        noListingMessage.textContent = 'No results were found for your search';
        document.body.appendChild(noListingMessage);
      } else {
        var responseData = JSON.parse(xhr.responseText);
                                var propertiesData = responseData.data;
                                console.log(propertiesData[0]);
                                var count = 0;
                                propertiesData.forEach(element => {
                                  if(count < 30){
                                    const firstImgaeUrl = element.poster;
                        
                                  var container = document.getElementById("grid-container");
                        
                                  //<div class="home-block"
                                    var homeblock = document.createElement("div");
                                    homeblock.className = "home-block";
                                    container.appendChild(homeblock);
                        
                                    // <img>
                                    var imgElement = document.createElement("img");
                                    imgElement.src = firstImgaeUrl;
                                    imgElement.alt = "Home ";
                                    homeblock.appendChild(imgElement);
                                    // <div>
                                    var overlay = document.createElement("div");
                                    overlay.className = "overlay";
                                    homeblock.appendChild(overlay);
                                    // <div>
                                    var overlayT = document.createElement("div");
                                    overlayT.className = "overlay-text";
                                    overlay.appendChild(overlayT);
                        
                                    // title :
                                   var head4 = document.createElement("h4");
                                   head4.textContent = element.Title;
                                   overlayT.appendChild(head4);
                        
                                   var description = document.createElement('p');
                                   description.textContent ="Description: " +element.Description;
                                  overlayT.appendChild(description);
                                  
              
                                  var outgenre = document.createElement('p');
                                  outgenre.textContent = "Genre: "+element.genres;
                                  overlayT.appendChild(outgenre);

                                  var PgCOntent = document.createElement('p');
                                  PgCOntent.textContent = "Genre: "+element["COL 5"];
                                  overlayT.appendChild(PgCOntent);
                        
                                  var rating = document.createElement('p');
                                  rating.textContent ="Rating: "+ element.rating;
                                  overlayT.appendChild(rating);
                        
                                  var runtime = document.createElement('p');
                                  runtime.textContent = 'Run time: '+element.runtime+ " minutes";
                                  overlayT.appendChild(runtime);
                        
                                  var checkbox = document.createElement('input');
                                  checkbox.setAttribute('type', 'checkbox');
                                  checkbox.setAttribute('id', 'favourite');
                                  checkbox.setAttribute('name', 'favourite');
                                  overlayT.appendChild(checkbox);
                        
                                  var label = document.createElement('label');
                                  label.setAttribute('for', 'favourite');
                                  label.textContent = 'Favourite';
                                  label.setAttribute('id', 'lblFav');
                                  overlayT.appendChild(label);
                        
                                  var breakb = document.createElement('br');
                                  overlayT.appendChild(breakb);
                        
                                  // var viewLink = document.createElement('a');
                                  // viewLink.setAttribute('href', 'View.php');
                                  // viewLink.textContent = 'View this property';
                                  // overlayT.appendChild(viewLink);   
                                  
                        document.body.appendChild(container);
                                  }
                          });
      }
    }
  }
  xhr.open('POST', 'api.php', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(jsonObj);
})

function clearGridContainer() {
  var container = document.getElementById('grid-container');
  while (container.firstChild) {
      container.removeChild(container.firstChild);
  }
}

var search = document.getElementById('mybtn');
search.addEventListener('click', function(event){
  event.preventDefault();
  
  var searchcontent = document.getElementById('usertext').value;
  

  var obj = {
    'type': 'GetSeries',
    'series': searchcontent
  }

  var jsonObj = JSON.stringify(obj);
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if(xhr.readyState === XMLHttpRequest.DONE){

      if(xhr.responseText.length === 0){
        clearGridContainer();
        var noListingMessage = document.createElement('p');
        noListingMessage.id = "error";
        noListingMessage.textContent = 'No results were found for your search';
        document.body.appendChild(noListingMessage);
      } else {
        if(xhr.status === "success"){
          clearGridContainer();
          var responseData = JSON.parse(xhr.responseText);
                                  var propertiesData = responseData.data;
                                  console.log(propertiesData[0]);
                                  var count = 0;
                                  propertiesData.forEach(element => {
                                    if(count < 30){
                                      const firstImgaeUrl = element.poster;
                          
                                    var container = document.getElementById("grid-container");
                          
                                    //<div class="home-block"
                                      var homeblock = document.createElement("div");
                                      homeblock.className = "home-block";
                                      container.appendChild(homeblock);
                          
                                      // <img>
                                      var imgElement = document.createElement("img");
                                      imgElement.src = firstImgaeUrl;
                                      imgElement.alt = "Home ";
                                      homeblock.appendChild(imgElement);
                                      // <div>
                                      var overlay = document.createElement("div");
                                      overlay.className = "overlay";
                                      homeblock.appendChild(overlay);
                                      // <div>
                                      var overlayT = document.createElement("div");
                                      overlayT.className = "overlay-text";
                                      overlay.appendChild(overlayT);
                          
                                      // title :
                                     var head4 = document.createElement("h4");
                                     head4.textContent = element.Title;
                                     overlayT.appendChild(head4);
                          
                                     var description = document.createElement('p');
                                     description.textContent ="Description: " +element.Description;
                                    overlayT.appendChild(description);
                                    
                
                                    var outgenre = document.createElement('p');
                                    outgenre.textContent = "Genre: "+element.genres;
                                    overlayT.appendChild(outgenre);
  
                                    var PgCOntent = document.createElement('p');
                                    PgCOntent.textContent = "Genre: "+element["COL 5"];
                                    overlayT.appendChild(PgCOntent);
                          
                                    var rating = document.createElement('p');
                                    rating.textContent ="Rating: "+ element.rating;
                                    overlayT.appendChild(rating);
                          
                                    var runtime = document.createElement('p');
                                    runtime.textContent = 'Run time: '+element.runtime+ " minutes";
                                    overlayT.appendChild(runtime);
                          
                                    var checkbox = document.createElement('input');
                                    checkbox.setAttribute('type', 'checkbox');
                                    checkbox.setAttribute('id', 'favourite');
                                    checkbox.setAttribute('name', 'favourite');
                                    overlayT.appendChild(checkbox);
                          
                                    var label = document.createElement('label');
                                    label.setAttribute('for', 'favourite');
                                    label.textContent = 'Favourite';
                                    label.setAttribute('id', 'lblFav');
                                    overlayT.appendChild(label);
                          
                                    var breakb = document.createElement('br');
                                    overlayT.appendChild(breakb);
                          
                                    // var viewLink = document.createElement('a');
                                    // viewLink.setAttribute('href', 'View.php');
                                    // viewLink.textContent = 'View this property';
                                    // overlayT.appendChild(viewLink);   
                                    
                          document.body.appendChild(container);
                                    }
                            });
        } else {
          clearGridContainer();
        var noListingMessage = document.createElement('p');
        noListingMessage.id = "error";
        noListingMessage.textContent = 'No results were found for your search';
        document.body.appendChild(noListingMessage);
        }
        
      }
    }
  }
  xhr.open('POST', 'api.php', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(jsonObj);

})

document.addEventListener('DOMContentLoaded', () => {
  const genreButtons = document.querySelectorAll('.genre-filter input[type="button"]');

  genreButtons.forEach(button => {
    button.addEventListener('click', () => {
      const genre = button.value;
      filterByGenre(genre);
    });
  });
});

function filterByGenre(genre) {
  // This function will handle the filtering logic
  console.log(`Filtering movies by genre: ${genre}`);
  var Obj = {
    "type": "filter",
    'content':'series',
    "genre": genre
  }

  var jsonObj = JSON.stringify(Obj);
  var xhr = new XMLHttpRequest();
                      xhr.onreadystatechange = function() {
                         if(xhr.readyState === XMLHttpRequest.DONE) {
                          console.log(xhr.responseText);
                          if(xhr.responseText.length === 0){
                            clearGridContainer();
                      
                          } else {
                            
                            clearGridContainer();
                            var responseData = JSON.parse(xhr.responseText);
                            if(responseData.status === "error"){
                              var noListingMessage = document.createElement('p');
                            noListingMessage.id = "error";
                            noListingMessage.textContent = 'No results were found for your search';
                            document.body.appendChild(noListingMessage);
                            console.log('wsnt favourited');
                            } else {
                              var propertiesData = responseData.data;
                              console.log(responseData)
                              var count = 0;
                              propertiesData.forEach(element => {
                            
                                  const firstImgaeUrl = element.poster;
                      
                                var container = document.getElementById("grid-container");
                      
                                //<div class="home-block"
                                  var homeblock = document.createElement("div");
                                  homeblock.className = "home-block";
                                  container.appendChild(homeblock);
                      
                                  // <img>
                                  var imgElement = document.createElement("img");
                                  imgElement.src = firstImgaeUrl;
                                  imgElement.alt = "Home ";
                                  homeblock.appendChild(imgElement);
                                  // <div>
                                  var overlay = document.createElement("div");
                                  overlay.className = "overlay";
                                  homeblock.appendChild(overlay);
                                  // <div>
                                  var overlayT = document.createElement("div");
                                  overlayT.className = "overlay-text";
                                  overlay.appendChild(overlayT);
                      
                                  // title :
                                 var head4 = document.createElement("h4");
                                 head4.textContent = element.Title;
                                 overlayT.appendChild(head4);
                      
                                 var description = document.createElement('p');
                                 description.textContent ="Description: " +element.Description;
                                overlayT.appendChild(description);
                                
            
                                var outgenre = document.createElement('p');
                                outgenre.textContent = "Genre: "+element.genres;
                                overlayT.appendChild(outgenre);

                                var PgCOntent = document.createElement('p');
                                PgCOntent.textContent = "PG rating: "+element["COL 5"];
                                overlayT.appendChild(PgCOntent);
                      
                                var rating = document.createElement('p');
                                rating.textContent ="Rating: "+ element.rating;
                                overlayT.appendChild(rating);
                      
                                var runtime = document.createElement('p');
                                runtime.textContent = 'Run time: '+element.runtime+ " minutes";
                                overlayT.appendChild(runtime);
                      
                                var checkbox = document.createElement('input');
                                checkbox.setAttribute('type', 'checkbox');
                                checkbox.setAttribute('id', 'favourite');
                                checkbox.setAttribute('name', 'favourite');
                                overlayT.appendChild(checkbox);
                      
                                var label = document.createElement('label');
                                label.setAttribute('for', 'favourite');
                                label.textContent = 'Favourite';
                                label.setAttribute('id', 'lblFav');
                                overlayT.appendChild(label);
                      
                                var breakb = document.createElement('br');
                                overlayT.appendChild(breakb);
                      
                                // var viewLink = document.createElement('a');
                                // viewLink.setAttribute('href', 'View.php');
                                // viewLink.textContent = 'View this property';
                                // overlayT.appendChild(viewLink);   
                                
                      document.body.appendChild(container);
                                
                        });
                            }
                                
                          }
                         }
                      };
          
                      xhr.open('POST', 'api.php', true);
                      xhr.setRequestHeader('Content-Type', 'application/json');
                      xhr.send(jsonObj);
}

document.addEventListener('DOMContentLoaded', () => {
  const genreButtons = document.querySelectorAll('.other-filter input[type="button"]');

  genreButtons.forEach(button => {
    button.addEventListener('click', () => {
      const genre = button.value;
      filterByOther(genre);
    });
  });
});

function filterByOther(other) {
  // This function will handle the filtering logic
  console.log(`Filtering movies by genre: ${other}`);
  var Obj = {
    "type": "filterbyOther",
    "content": "series",
    "case": other
  }

  var jsonObj = JSON.stringify(Obj);
  var xhr = new XMLHttpRequest();
                      xhr.onreadystatechange = function() {
                         if(xhr.readyState === XMLHttpRequest.DONE) {
                          console.log(xhr.responseText);
                          if(xhr.responseText.length === 0){
                            // var noListingMessage = document.createElement('p');
                            // noListingMessage.id = "error";
                            // noListingMessage.textContent = 'No results were found for your search';
                            // document.body.appendChild(noListingMessage);
                            console.log('wsnt favourited');
                          } else {
                            
                            clearGridContainer();
                            var responseData = JSON.parse(xhr.responseText);
                                var propertiesData = responseData.data;
                                console.log(responseData)
                                var count = 0;
                                propertiesData.forEach(element => {
                              
                                    const firstImgaeUrl = element.poster;
                        
                                  var container = document.getElementById("grid-container");
                        
                                  //<div class="home-block"
                                    var homeblock = document.createElement("div");
                                    homeblock.className = "home-block";
                                    container.appendChild(homeblock);
                        
                                    // <img>
                                    var imgElement = document.createElement("img");
                                    imgElement.src = firstImgaeUrl;
                                    imgElement.alt = "Home ";
                                    homeblock.appendChild(imgElement);
                                    // <div>
                                    var overlay = document.createElement("div");
                                    overlay.className = "overlay";
                                    homeblock.appendChild(overlay);
                                    // <div>
                                    var overlayT = document.createElement("div");
                                    overlayT.className = "overlay-text";
                                    overlay.appendChild(overlayT);
                        
                                    // title :
                                   var head4 = document.createElement("h4");
                                   head4.textContent = element.Title;
                                   overlayT.appendChild(head4);
                        
                                   var description = document.createElement('p');
                                   description.textContent ="Description: " +element.Description;
                                  overlayT.appendChild(description);
                                  
              
                                  var outgenre = document.createElement('p');
                                  outgenre.textContent = "Genre: "+element.genres;
                                  overlayT.appendChild(outgenre);

                                  var PgCOntent = document.createElement('p');
                                  PgCOntent.textContent = "PG rating: "+element["COL 5"];
                                  overlayT.appendChild(PgCOntent);
                        
                                  var rating = document.createElement('p');
                                  rating.textContent ="Rating: "+ element.rating;
                                  overlayT.appendChild(rating);
                        
                                  var runtime = document.createElement('p');
                                  runtime.textContent = 'Run time: '+element.runtime+ " minutes";
                                  overlayT.appendChild(runtime);
                        
                                  var checkbox = document.createElement('input');
                                  checkbox.setAttribute('type', 'checkbox');
                                  checkbox.setAttribute('id', 'favourite');
                                  checkbox.setAttribute('name', 'favourite');
                                  overlayT.appendChild(checkbox);
                        
                                  var label = document.createElement('label');
                                  label.setAttribute('for', 'favourite');
                                  label.textContent = 'Favourite';
                                  label.setAttribute('id', 'lblFav');
                                  overlayT.appendChild(label);
                        
                                  var breakb = document.createElement('br');
                                  overlayT.appendChild(breakb);
                        
                                  // var viewLink = document.createElement('a');
                                  // viewLink.setAttribute('href', 'View.php');
                                  // viewLink.textContent = 'View this property';
                                  // overlayT.appendChild(viewLink);   
                                  
                        document.body.appendChild(container);
                                  
                          });
                          }
                         }
                      };
          
                      xhr.open('POST', 'api.php', true);
                      xhr.setRequestHeader('Content-Type', 'application/json');
                      xhr.send(jsonObj);
}

var count = 0;
document.addEventListener('DOMContentLoaded', function() {
  // localStorage.clear();
  var gridContainer = document.getElementById("grid-container");

  gridContainer.addEventListener('click', function(event) {
      var target = event.target;
      console.log("entered 2");

                if (target.matches('input#favourite') || target.matches('label[for="favourite"]')) {
                  count++;
                  if(target.checked){
                    var homeBlock = target.closest('.home-block');
                    if (homeBlock) {
                      var overlayTextDiv = homeBlock.querySelector('.overlay-text');
                      var h4Element = overlayTextDiv.querySelector('h4');
                      var pElements = overlayTextDiv.querySelectorAll('p');
                      var info = [];
                      for(var i=0; i<pElements.length; i++){
                        info.push(pElements[i].textContent);
                      }
                      var h4TextContent = h4Element.textContent;
                      var myObj = {};
                      myObj.title = h4TextContent;
                      info.forEach(function(item){
                        var keyVal = item.split(": ");
                        myObj[keyVal[0].toLowerCase()] = keyVal[1];
                      });

                      console.log(myObj);

                      var ID = localStorage.getItem('userID');
                      console.log(ID);
                      
                      const final = {
                        'type': "favourite",
                        'content': 'series',
                        'user_id': ID,
                        "data": myObj
                      }

                      const myObjectString = JSON.stringify(final);
                      // make request 
                      //localStorage.setItem('favourite'+count, myObjectString);
                      var ID;
                      var xhr = new XMLHttpRequest();
                      xhr.onreadystatechange = function() {
                         if(xhr.readyState === XMLHttpRequest.DONE) {
                          console.log(xhr.responseText);
                          if(xhr.responseText.length === 0){
                            // var noListingMessage = document.createElement('p');
                            // noListingMessage.id = "error";
                            // noListingMessage.textContent = 'No results were found for your search';
                            // document.body.appendChild(noListingMessage);
                            console.log('wsnt favourited');
                          } else {
                            
                            var responseData = JSON.parse(xhr.responseText);
                            if(responseData.status === 'success'){
                              console.log('success');
                            }
                          }
                         }
                      };
          
                      xhr.open('POST', 'api.php', true);
                      xhr.setRequestHeader('Content-Type', 'application/json');
                      xhr.send(myObjectString);

              

                                           
                    }
                  }
                  } 
  


  });
});