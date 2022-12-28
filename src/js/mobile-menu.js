(() => {
	const mobileMenu = document.querySelector('.js-menu-container');
	const openMenuBtn = document.querySelector('.js-open-menu');
	const closeMenuBtn = document.querySelector('.js-close-menu');

	const toggleMenu = () => {
		const isMenuOpen =
			openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
		openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
		mobileMenu.classList.toggle('is-open');

		const scrollLockMethod = !isMenuOpen
			? 'disableBodyScroll'
			: 'enableBodyScroll';
		bodyScrollLock[scrollLockMethod](document.body);
	};

	openMenuBtn.addEventListener('click', toggleMenu, { passive: true });
	closeMenuBtn.addEventListener('click', toggleMenu, { passive: true });

	// Close the mobile menu on wider screens if the device orientation changes

	window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
		if (!e.matches) return;
		mobileMenu.classList.remove('is-open');
		openMenuBtn.setAttribute('aria-expanded', false);
		bodyScrollLock.enableBodyScroll(document.body);
	}, { passive: true });

	// Close menu when a button or link is clicked
	document.querySelectorAll('[js-close-on-click]').forEach(item => {
		item.addEventListener('click', event => {

			mobileMenu.classList.remove('is-open');
			openMenuBtn.setAttribute('aria-expanded', false);
			bodyScrollLock.enableBodyScroll(document.body);
		}, { passive: true })
	})
})();
