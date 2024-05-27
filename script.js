// This is script file

$('.testimonials-container').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:true
        },
        768:{
            items:2
        },
    }
})


//blur the background
function toggle(){
    var blur = document.getElementsByClassName('testimonial-section');
    blur.classList.toggle('active')
}


// popUp for the button
function togglePopup() 
{
    const popup = document.getElementById('popupOverlay');
    popup.style.display = (popup.style.display === 'flex') ? 'none' : 'flex';
}

//close the popUP
function closePopUp(){
    var overlay = document.getElementById("popupOverlay");
    overlay.classList.toggle("active");
}

//THE REVIEW FORM//
const allStar = document.querySelectorAll('.rating .star')
const ratingValue = document.querySelector('.rating input')

allStar.forEach((item, idx)=> {
	item.addEventListener('click', function () {
		let click = 0
		ratingValue.value = idx + 1

		allStar.forEach(i=> {
			i.classList.replace('bxs-star', 'bx-star')
			i.classList.remove('active')
		})
		for(let i=0; i<allStar.length; i++) {
			if(i <= idx) {
				allStar[i].classList.replace('bx-star', 'bxs-star')
				allStar[i].classList.add('active')
			} else {
				allStar[i].style.setProperty('--i', click)
				click++
			}
		}
	})
})

// JavaScript function to toggle the popup overlay
/*function togglePopup() {
    var overlay = document.getElementById("popupOverlay");
    overlay.classList.toggle("active");
}*/
