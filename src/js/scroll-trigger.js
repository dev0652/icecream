const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const benefits__icon = entry.target.querySelectorAll('.benefits__icon');
    // const benefits__icon = entry.target.querySelector('.benefits__icon');

    if (entry.isIntersecting) {
      benefits__icon.forEach(x => x.classList.add('text-focus-in'));
      // benefits__icon.classList.add('text-focus-in');
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    // benefits__icon.forEach(x => x.classList.remove('text-focus-in'));
    // benefits__icon.classList.remove('text-focus-in');
  });
});

observer.observe(document.querySelector('.benefits__list'));

// Products
const observerproduct = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const image__wrapper = entry.target.querySelector('.about__image-wrapper');
    const about__image = entry.target.querySelector('.about__image');

    if (entry.isIntersecting) {
      image__wrapper.classList.add('bounce-in-top');
      about__image.classList.add('bounce-in-top');
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    // image__wrapper.classList.remove('bounce-in-top');
    // about__image.classList.remove('bounce-in-top');
  });
});

observerproduct.observe(document.querySelector('.about__description'));

// about
// const observerabout = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     const product__card = entry.target.querySelectorAll('.product-card');
//     // const benefits__icon = entry.target.querySelector('.benefits__icon');

//     if (entry.isIntersecting) {
//       product__card.forEach(x => x.classList.add('product-image-pulsing'));
//       // benefits__icon.classList.add('text-focus-in');
//       return; // if we added the class, exit the function
//     }

//     // We're not intersecting, so remove the class!
//     product__card.forEach(x => x.classList.remove('product-image-pulsing'));
//     // benefits__icon.classList.remove('text-focus-in');
//   });
// });

// observerabout.observe(document.querySelector('.product-cards'));
