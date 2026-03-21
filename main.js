(function() {
	// Simple slideshow for hero section
	const slides = document.querySelectorAll('#hero-slideshow .slide');
	const dots = document.querySelectorAll('#hero-slideshow .dot');
	let current = 0;
	function showSlide(idx) {
		slides.forEach((slide, i) => {
			slide.style.display = i === idx ? 'block' : 'none';
			if (dots[i]) dots[i].style.background = i === idx ? 'var(--golden-grey)' : '#bbb';
		});
		current = idx;
	}
	function nextSlide() {
		showSlide((current + 1) % slides.length);
	}
	let interval = setInterval(nextSlide, 4000);
	dots.forEach((dot, i) => {
		dot.addEventListener('click', () => {
			showSlide(i);
			clearInterval(interval);
			interval = setInterval(nextSlide, 4000);
		});
	});
	showSlide(0);
})();
