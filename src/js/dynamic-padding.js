// Dynamically adjust 'padding-top' value for 'main' when header has fixed positioning

(() => {
	const { height: pageHeaderHeight } = document
		.querySelector(".header")
		.getBoundingClientRect()

	document.body.style.paddingTop = `${pageHeaderHeight}px`
})();