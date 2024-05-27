function ChangeImage(i)
{
    console.log("Div Was Clicked on" + i ) ; 
    var img = document.getElementById("mainimage") ; 

    img.src = "../img/jc1.jpeg" ; 

    if ( i == 1)
    {
        img.src = "../img/jc1.jpeg" ; 
    }
    if ( i == 2)
    {
        img.src = "../img/jc2.jpeg" ; 
    }
    if ( i == 3)
    {
        img.src = "../img/jc3.jpeg" ; 
    }
    if ( i == 4)
    {
        img.src = "../img/jc4.jpeg" ; 
    }
    if ( i == 5)
    {
        img.src = "../img/jc5.jpeg" ; 
    }
}

function Searchbar()
{
    var input = document.getElementById("searchbar") ; 
    
    console.log("Searched for a movie called " + input.value) ; 
}

function CustDate()
{
    var input = document.getElementById("custdate") ; 
    
    console.log("Searched for a movie called " + input.value) ; 
}

function CustGenre()
{
    var input = document.getElementById("custgenre") ; 
    
    console.log("Searched for a movie called " + input.value) ; 
}

function DateBut(i) 
{
    console.log("Button Press for " + i) ; 

}

function GenreBut(i)
{
    console.log("Button Press for " + i) ;

}



