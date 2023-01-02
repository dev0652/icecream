// About

let observerCow = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const image__wrapper = entry.target.querySelector('.about__image-wrapper');
		const about__image = entry.target.querySelector('.about__image');

		if (entry.isIntersecting) {
			image__wrapper.classList.add('bounce-in-top');
			about__image.classList.add('bounce-in-top');

			return; // if we added the class, exit the function
		}

		// Remove the class if you want the animation to repeat next time object comes into view
		// image__wrapper.classList.remove('bounce-in-top');
		// about__image.classList.remove('bounce-in-top');
	});
});

observerCow.observe(document.querySelector('.about__description'));


// Benefits

// let observerStats = new IntersectionObserver(entries => {
// 	entries.forEach(entry => {

// 		const counter = entry.target.querySelectorAll('.counter');

// 		if (entry.isIntersecting) {
// 			counter.forEach(x => x.classList.add('animated-counter'));

// 			return; // if we added the class, exit the function
// 		}

// 		// Remove the class if you want the animation to repeat next time object comes into view
// 		// animatedCounter.classList.remove('animated-counter');
// 	});
// });

// // observerStats.observe(document.querySelector('.benefits'));
// observerStats.observe(document.body);



