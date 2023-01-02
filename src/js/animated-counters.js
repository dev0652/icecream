// https://css-tricks.com/animating-number-counters/
function animateValue(obj, start, end, duration) {
	let startTimestamp = null;
	const step = (timestamp) => {
		if (!startTimestamp) startTimestamp = timestamp;
		const progress = Math.min((timestamp - startTimestamp) / duration, 1);
		obj.innerHTML = Math.floor(progress * (end - start) + start);
		if (progress < 1) {
			window.requestAnimationFrame(step);
		}
	};
	window.requestAnimationFrame(step);
}

const objects = document.querySelectorAll(".animated-counter");

// objects.forEach(obj => animateValue(obj, 0, obj.dataset.value, 1500));


// https://stackoverflow.com/questions/61177447/how-to-delay-a-javascript-function-until-it-is-in-the-middle-of-web-page

let calledStatus = 0;

window.onscroll = function () {
	const clientRect = document.querySelector('.benefits').getBoundingClientRect();

	if (clientRect.top < window.innerHeight && clientRect.top > (clientRect.height * -1) && calledStatus == 0) {
		objects.forEach(obj => animateValue(obj, 0, obj.dataset.value, 1500))
		calledStatus = 1;
	}
}