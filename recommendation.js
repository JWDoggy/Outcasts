var CurrentImg =0;
var ImgOfListing = [];
document.addEventListener('DOMContentLoaded', function(){
  var obj = {
    "type": "Images",
    'content': 'movies',
    "rating": "rating"
  }

  var jsonObj = JSON.stringify(obj);

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState === XMLHttpRequest.DONE) {
      if(xhr.status === 200) {
        
        var response = JSON.parse(xhr.responseText);
        var array = response.data;
        console.log(array);
        
        // populate the array
        for(var i=0; i<array.length; i++){
          ImgOfListing.push(array[i]);
        }

        ImgOfListing.forEach(listing =>{
          console.log(listing);
        })

        // populate carousel
        var farLeft = document.getElementById('farLeft');
        var flimg = document.createElement('img');
        flimg.src = ImgOfListing[CurrentImg];
        flimg.alt='';
        farLeft.append(flimg);
        CurrentImg++;

        var left = document.getElementById('itemLeft');
        var limg = document.createElement('img');
        limg.src = ImgOfListing[CurrentImg];
        limg.alt = '';
        left.append(limg);
        CurrentImg++;

        var front = document.getElementById('item_1');
        var img = document.createElement('img');
        img.src = ImgOfListing[CurrentImg];
        img.alt = '';
        front.append(img);
        CurrentImg++;

        var right = document.getElementById('itemRight');
        var rimg = document.createElement('img');
        rimg.src = ImgOfListing[CurrentImg];
        rimg.alt='';
        right.append(rimg);
        CurrentImg++;

        var farRight = document.getElementById('farRight');
        var frimg = document.createElement('img');
        frimg.src = ImgOfListing[CurrentImg];
        frimg.alt = '';
        farRight.append(frimg);
        CurrentImg = 2;
        


      }
    }
  }
  xhr.open('POST', 'api.php' , false);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(jsonObj);
});

var leftButton = document.getElementById("btnLeft");
var rightButton = document.getElementById("btnRight");



function updateCarousel() {
  var farLeft = document.getElementById('farLeft');
  var left = document.getElementById('itemLeft');
  var front = document.getElementById('item_1');
  var right = document.getElementById('itemRight');
  var farRight = document.getElementById('farRight');

  farLeft.querySelector('img').src = ImgOfListing[(CurrentImg - 2 + ImgOfListing.length) % ImgOfListing.length];
  left.querySelector('img').src = ImgOfListing[(CurrentImg - 1 + ImgOfListing.length) % ImgOfListing.length];
  front.querySelector('img').src = ImgOfListing[CurrentImg];
  right.querySelector('img').src = ImgOfListing[(CurrentImg + 1) % ImgOfListing.length];
  farRight.querySelector('img').src = ImgOfListing[(CurrentImg + 2) % ImgOfListing.length];
}

document.getElementById('btnLeft').addEventListener('click', function(){
  CurrentImg = (CurrentImg - 1 + ImgOfListing.length) % ImgOfListing.length;
  updateCarousel();
});

document.getElementById('btnRight').addEventListener('click', function(){
  CurrentImg = (CurrentImg + 1) % ImgOfListing.length;
  updateCarousel();
});


var CurrentImg2 =0;
var ImgOfListing2 = [];
document.addEventListener('DOMContentLoaded', function(){
  var obj2 = {
    "type": "Images",
    'content': 'movies',
    "new": "new"
  }

  var jsonObj2 = JSON.stringify(obj2);

  var xhr2 = new XMLHttpRequest();
  xhr2.onreadystatechange = function() {
    if(xhr2.readyState === XMLHttpRequest.DONE) {
      if(xhr2.status === 200) {
        
        var response = JSON.parse(xhr2.responseText);
        var array2 = response.data;
        console.log(array2);
        
        // populate the array
        for(var i=0; i<array2.length; i++){
          ImgOfListing2.push(array2[i]);
        }

        ImgOfListing2.forEach(listing =>{
          console.log(listing);
        })

        // populate carousel
        var farLeft2 = document.getElementById('farLeft2');
        var flimg2 = document.createElement('img');
        flimg2.src = ImgOfListing2[CurrentImg2];
        flimg2.alt='';
        farLeft2.append(flimg2);
        CurrentImg2++;

        var left2 = document.getElementById('itemLeft2');
        var limg2 = document.createElement('img');
        limg2.src = ImgOfListing2[CurrentImg2];
        limg2.alt = '';
        left2.append(limg2);
        CurrentImg2++;

        var front2 = document.getElementById('item_12');
        var img2 = document.createElement('img');
        img2.src = ImgOfListing2[CurrentImg2];
        img2.alt = '';
        front2.append(img2);
        CurrentImg2++;

        var right2 = document.getElementById('itemRight2');
        var rimg2 = document.createElement('img');
        rimg2.src = ImgOfListing2[CurrentImg2];
        rimg2.alt='';
        right2.append(rimg2);
        CurrentImg2++;

        var farRight2 = document.getElementById('farRight2');
        var frimg2 = document.createElement('img');
        frimg2.src = ImgOfListing2[CurrentImg2];
        frimg2.alt = '';
        farRight2.append(frimg2);
        CurrentImg2 = 2;
        


      }
    }
  }
  xhr2.open('POST', 'api.php' , false);
  xhr2.setRequestHeader('Content-Type', 'application/json');
  xhr2.send(jsonObj2);
});

var leftButton2 = document.getElementById("btnLeft2");
var rightButton2 = document.getElementById("btnRight2");

function updateCarousel2() {
  var farLeft = document.getElementById('farLeft2');
  var left = document.getElementById('itemLeft2');
  var front = document.getElementById('item_12');
  var right = document.getElementById('itemRight2');
  var farRight = document.getElementById('farRight2');

  farLeft.querySelector('img').src = ImgOfListing2[(CurrentImg2 - 2 + ImgOfListing2.length) % ImgOfListing2.length];
  left.querySelector('img').src = ImgOfListing2[(CurrentImg2 - 1 + ImgOfListing2.length) % ImgOfListing2.length];
  front.querySelector('img').src = ImgOfListing2[CurrentImg2];
  right.querySelector('img').src = ImgOfListing2[(CurrentImg2 + 1) % ImgOfListing2.length];
  farRight.querySelector('img').src = ImgOfListing2[(CurrentImg2 + 2) % ImgOfListing2.length];
}

document.getElementById('btnLeft2').addEventListener('click', function(){
  CurrentImg2 = (CurrentImg2 - 1 + ImgOfListing2.length) % ImgOfListing2.length;
  updateCarousel2();
});

document.getElementById('btnRight2').addEventListener('click', function(){
  CurrentImg2 = (CurrentImg2 + 1) % ImgOfListing2.length;
  updateCarousel2();
});

var CurrentImg3 =0;
var ImgOfListing3 = [];
document.addEventListener('DOMContentLoaded', function(){
  var obj3 = {
    "type": "Images",
    'content': 'series',
    "rating": "rating"
  }

  var jsonObj3 = JSON.stringify(obj3);

  var xhr2 = new XMLHttpRequest();
  xhr2.onreadystatechange = function() {
    if(xhr2.readyState === XMLHttpRequest.DONE) {
      if(xhr2.status === 200) {
        
        var response = JSON.parse(xhr2.responseText);
        var array2 = response.data;
        console.log(array2);
        
        // populate the array
        for(var i=0; i<array2.length; i++){
          ImgOfListing3.push(array2[i]);
        }

        ImgOfListing3.forEach(listing =>{
          console.log(listing);
        })

        // populate carousel
        var farLeft2 = document.getElementById('farLeft3');
        var flimg2 = document.createElement('img');
        flimg2.src = ImgOfListing3[CurrentImg3];
        flimg2.alt='';
        farLeft2.append(flimg2);
        CurrentImg3++;

        var left2 = document.getElementById('itemLeft3');
        var limg2 = document.createElement('img');
        limg2.src = ImgOfListing3[CurrentImg3];
        limg2.alt = '';
        left2.append(limg2);
        CurrentImg3++;

        var front2 = document.getElementById('item_13');
        var img2 = document.createElement('img');
        img2.src = ImgOfListing3[CurrentImg3];
        img2.alt = '';
        front2.append(img2);
        CurrentImg3++;

        var right2 = document.getElementById('itemRight3');
        var rimg2 = document.createElement('img');
        rimg2.src = ImgOfListing3[CurrentImg3];
        rimg2.alt='';
        right2.append(rimg2);
        CurrentImg3++;

        var farRight2 = document.getElementById('farRight3');
        var frimg2 = document.createElement('img');
        frimg2.src = ImgOfListing3[CurrentImg3];
        frimg2.alt = '';
        farRight2.append(frimg2);
        CurrentImg3 = 2;
        


      }
    }
  }
  xhr2.open('POST', 'api.php' , false);
  xhr2.setRequestHeader('Content-Type', 'application/json');
  xhr2.send(jsonObj3);
});

var leftButton3 = document.getElementById("btnLeft3");
var rightButton3 = document.getElementById("btnRight3");

function updateCarousel3() {
  var farLeft = document.getElementById('farLeft3');
  var left = document.getElementById('itemLeft3');
  var front = document.getElementById('item_13');
  var right = document.getElementById('itemRight3');
  var farRight = document.getElementById('farRight3');

  farLeft.querySelector('img').src = ImgOfListing3[(CurrentImg3 - 2 + ImgOfListing3.length) % ImgOfListing3.length];
  left.querySelector('img').src = ImgOfListing3[(CurrentImg3 - 1 + ImgOfListing3.length) % ImgOfListing3.length];
  front.querySelector('img').src = ImgOfListing3[CurrentImg3];
  right.querySelector('img').src = ImgOfListing3[(CurrentImg3 + 1) % ImgOfListing3.length];
  farRight.querySelector('img').src = ImgOfListing3[(CurrentImg3 + 2) % ImgOfListing3.length];
}

document.getElementById('btnLeft3').addEventListener('click', function(){
  CurrentImg3 = (CurrentImg3 - 1 + ImgOfListing3.length) % ImgOfListing3.length;
  updateCarousel3();
});

document.getElementById('btnRight3').addEventListener('click', function(){
  CurrentImg3 = (CurrentImg3 + 1) % ImgOfListing3.length;
  updateCarousel3();
});

var CurrentImg4 =0;
var ImgOfListing4 = [];
document.addEventListener('DOMContentLoaded', function(){
  var obj3 = {
    "type": "Images",
    'content': 'series',
    "new": "new"
  }

  var jsonObj3 = JSON.stringify(obj3);

  var xhr2 = new XMLHttpRequest();
  xhr2.onreadystatechange = function() {
    if(xhr2.readyState === XMLHttpRequest.DONE) {
      if(xhr2.status === 200) {
        
        var response = JSON.parse(xhr2.responseText);
        var array2 = response.data;
        console.log(array2);
        
        // populate the array
        for(var i=0; i<array2.length; i++){
          ImgOfListing4.push(array2[i]);
        }

        ImgOfListing4.forEach(listing =>{
          console.log(listing);
        })

        // populate carousel
        var farLeft2 = document.getElementById('farLeft4');
        var flimg2 = document.createElement('img');
        flimg2.src = ImgOfListing4[CurrentImg4];
        flimg2.alt='';
        farLeft2.append(flimg2);
        CurrentImg4++;

        var left2 = document.getElementById('itemLeft4');
        var limg2 = document.createElement('img');
        limg2.src = ImgOfListing4[CurrentImg4];
        limg2.alt = '';
        left2.append(limg2);
        CurrentImg4++;

        var front2 = document.getElementById('item_14');
        var img2 = document.createElement('img');
        img2.src = ImgOfListing4[CurrentImg4];
        img2.alt = '';
        front2.append(img2);
        CurrentImg4++;

        var right2 = document.getElementById('itemRight4');
        var rimg2 = document.createElement('img');
        rimg2.src = ImgOfListing4[CurrentImg4];
        rimg2.alt='';
        right2.append(rimg2);
        CurrentImg4++;

        var farRight2 = document.getElementById('farRight4');
        var frimg2 = document.createElement('img');
        frimg2.src = ImgOfListing4[CurrentImg4];
        frimg2.alt = '';
        farRight2.append(frimg2);
        CurrentImg4 = 2;
        


      }
    }
  }
  xhr2.open('POST', 'api.php' , false);
  xhr2.setRequestHeader('Content-Type', 'application/json');
  xhr2.send(jsonObj3);
});

var leftButton4 = document.getElementById("btnLeft4");
var rightButton4 = document.getElementById("btnRight4");

function updateCarousel4() {
  var farLeft = document.getElementById('farLeft4');
  var left = document.getElementById('itemLeft4');
  var front = document.getElementById('item_14');
  var right = document.getElementById('itemRight4');
  var farRight = document.getElementById('farRight4');

  farLeft.querySelector('img').src = ImgOfListing4[(CurrentImg4 - 2 + ImgOfListing4.length) % ImgOfListing4.length];
  left.querySelector('img').src = ImgOfListing4[(CurrentImg4 - 1 + ImgOfListing4.length) % ImgOfListing4.length];
  front.querySelector('img').src = ImgOfListing4[CurrentImg4];
  right.querySelector('img').src = ImgOfListing4[(CurrentImg4 + 1) % ImgOfListing4.length];
  farRight.querySelector('img').src = ImgOfListing4[(CurrentImg4 + 2) % ImgOfListing4.length];
}

document.getElementById('btnLeft4').addEventListener('click', function(){
  CurrentImg4 = (CurrentImg4 - 1 + ImgOfListing4.length) % ImgOfListing4.length;
  updateCarousel4();
});

document.getElementById('btnRight4').addEventListener('click', function(){
  CurrentImg4 = (CurrentImg4 + 1) % ImgOfListing4.length;
  updateCarousel4();
});