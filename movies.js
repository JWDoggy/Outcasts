document.addEventListener('DOMContentLoaded', function(){
  var Obj = {
    'type': 'GetMovies'
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
    'type': 'GetMovies',
    'movie': searchcontent
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
      }
    }
  }
  xhr.open('POST', 'api.php', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(jsonObj);

})