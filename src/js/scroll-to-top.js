// https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

// window.onscroll = function () { scrollFunction() };
window.addEventListener('scroll', scrollFunction);


function scrollFunction() {
	let toTopButton = document.querySelector(".back-to-top");


	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		toTopButton.style.display = "block";
	} else {
		toTopButton.style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


