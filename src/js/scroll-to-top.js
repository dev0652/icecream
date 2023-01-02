// https://www.w3schools.com/howto/howto_js_scroll_to_top.asp


// When the user scrolls down 20px from the top of the document, show the button

// !!! moved this to window.js
// window.onscroll = function () { scrollFunction() };


window.addEventListener('scroll', scrollFunction);
// window.addEventListener('scroll', startCounterAnimation);


function scrollFunction() {
	let toTopButton = document.querySelector(".back-to-top");


	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		toTopButton.style.display = "block";
	} else {
		toTopButton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


