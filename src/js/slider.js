// vars
'use strict'
var testim = document.getElementById("feedback"),
	testimDots = Array.prototype.slice.call(document.getElementById("feedback-dots").children),
	testimContent = Array.prototype.slice.call(document.getElementById("feedback-content").children),
	testimLeftArrow = document.getElementById("left-arrow"),
	testimRightArrow = document.getElementById("right-arrow"),
	arrowInactive = document.querySelector(".feedback-wrapper"),
	testimSpeed = 4500,
	currentSlide = 0,
	currentActive = 0,
	testimTimer,
	touchStartPos,
	touchEndPos,
	touchPosDiff,
	ignoreTouch = 30;
;


window.onload = function () {

	// Testim Script
	function playSlide(slide) {
		for (var k = 0; k < testimDots.length; k++) {
			testimContent[k].classList.remove("active");
			testimContent[k].classList.remove("inactive");
			testimDots[k].classList.remove("active");
		}

		if (slide < 0) {
			slide = currentSlide = testimContent.length - 1;
		}

		if (slide > testimContent.length - 1) {
			slide = currentSlide = 0;
		}

		if (currentActive != currentSlide) {
			testimContent[currentActive].classList.add("inactive");
		}
		testimContent[slide].classList.add("active");
		testimDots[slide].classList.add("active");

		currentActive = currentSlide;

		clearTimeout(testimTimer);
		testimTimer = setTimeout(function () {
			playSlide(currentSlide += 1);
		}, testimSpeed)
	}

	testimLeftArrow.addEventListener("click", function () {
		playSlide(currentSlide -= 1);
	}, { passive: true })

	testimRightArrow.addEventListener("click", function () {
		playSlide(currentSlide += 1);
	}, { passive: true })

	for (var l = 0; l < testimDots.length; l++) {
		testimDots[l].addEventListener("click", function () {
			playSlide(currentSlide = testimDots.indexOf(this));
		}, { passive: true })
	}

	playSlide(currentSlide);

	// keyboard shortcuts
	document.addEventListener("keyup", function (e) {
		switch (e.keyCode) {
			case 37:
				testimLeftArrow.click();
				break;

			case 39:
				testimRightArrow.click();
				break;

			case 39:
				testimRightArrow.click();
				break;

			default:
				break;
		}
	}, { passive: true })

	testim.addEventListener("touchstart", function (e) {
		touchStartPos = e.changedTouches[0].clientX;
	}, { passive: true })

	testim.addEventListener("touchend", function (e) {
		touchEndPos = e.changedTouches[0].clientX;
		touchPosDiff = touchStartPos - touchEndPos;

		if (touchPosDiff > 0 + ignoreTouch) {
			testimLeftArrow.click();
		} else if (touchPosDiff < 0 - ignoreTouch) {
			testimRightArrow.click();
		} else {
			return;
		}

	}, { passive: true })
}