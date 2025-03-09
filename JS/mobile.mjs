import { typewriterEffect } from './typewriter.mjs';

export function initMobileLayout() {
	// ----- 1. Toggle Deck Cover to Show/Hide Carousel -----
	// (Assuming you want the deck cover to act as a toggle for the mobile carousel)
	const deckCover = document.querySelector('.deck .deck-cover');
	const mobileCarousel = document.getElementById('mobileCarousel');
	if (deckCover && mobileCarousel) {
		// Initially hide the carousel if not already hidden
		mobileCarousel.style.display = 'none';
		deckCover.addEventListener('click', () => {
			// Toggle a CSS class to animate the deck cover (make sure .slide-out is defined in CSS)
			deckCover.classList.toggle('slide-out');

			// Toggle the mobile carousel's visibility
			if (mobileCarousel.style.display === 'none' || mobileCarousel.style.display === '') {
				mobileCarousel.style.display = 'block';
			} else {
				mobileCarousel.style.display = 'none';
				// Remove the slide-out class so the cover returns to its original state
				deckCover.classList.remove('slide-out');
				// Optionally, you can also reset the info container here if desired.
				const infoContainer = document.querySelector('.container-info');
				infoContainer.innerHTML = '';
				const originalText = infoContainer.dataset.original || 'Read All About It!';
				const resetTitle = document.createElement('h2');
				resetTitle.classList.add('info-empty');
				resetTitle.textContent = originalText;
				infoContainer.appendChild(resetTitle);
			}
		});
	}

	// ----- 2. Carousel Slider Functionality -----
	const carousel = document.querySelector('.carousel');
	if (carousel) {
		const cards = Array.from(document.querySelectorAll('.mobile-card'));
		let currentIndex = 0;
		updateCarousel();

		const prevButton = document.querySelector('.carousel-controls .prev');
		const nextButton = document.querySelector('.carousel-controls .next');

		if (prevButton) {
			prevButton.addEventListener('click', (e) => {
				e.preventDefault();
				currentIndex = (currentIndex - 1 + cards.length) % cards.length;
				updateCarousel();
			});
		}
		if (nextButton) {
			nextButton.addEventListener('click', (e) => {
				e.preventDefault();
				currentIndex = (currentIndex + 1) % cards.length;
				updateCarousel();
			});
		}

		function updateCarousel() {
			// Assuming each card is 100% width of the carousel, slide the carousel horizontally.
			const offset = -currentIndex * 100;
			carousel.style.transform = `translateX(${offset}%)`;
			// Optionally, update an active class on cards:
			cards.forEach((card, index) => {
				card.classList.toggle('active', index === currentIndex);
			});
		}
	}

	// ----- 3. About Me Button with Typewriter Effect -----
	const aboutMeMobileBtn = document.getElementById('aboutBtn');
	if (aboutMeMobileBtn) {
		aboutMeMobileBtn.addEventListener('click', () => {
			const infoContainer = document.querySelector('.container-info');
			infoContainer.innerHTML = '';

			const heading = document.createElement('h2');
			heading.textContent = 'Who Dis?';
			infoContainer.appendChild(heading);

			const aboutMeContent = document.createElement('div');
			// Define your about text using newline characters for breaks
			const contentText = `Name: Remy Lian
Age: 44
Country: Norway
Hobbies: many
more info in link`;
			infoContainer.appendChild(aboutMeContent);

			// Call the typewriter effect, and after finishing, append a link
			typewriterEffect(aboutMeContent, contentText, 50, () => {
				const link = document.createElement('a');
				link.href = '#'; // Set your URL here
				link.textContent = 'More info here';
				link.classList.add('about-me-link');
				infoContainer.appendChild(document.createElement('br'));
				infoContainer.appendChild(link);
			});
		});
	}
}
