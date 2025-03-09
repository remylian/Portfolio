// mobile.mjs

export function initCarousel() {
	// Hide the deck cover, as it's not used in mobile carousel mode.
	const deck = document.getElementById('deck');
	const deckCover = deck.querySelector('.deck-cover');
	if (deckCover) {
		deckCover.style.display = 'none';
	}

	// Select all project cards (skip the deck cover).
	const cards = deck.querySelectorAll('.card:not(.deck-cover)');
	let currentIndex = 0;

	// Function to show the card at currentIndex and hide the others.
	function showCard(index) {
		cards.forEach((card, i) => {
			card.style.display = i === index ? 'block' : 'none';
		});
	}

	// Initially display the first card.
	showCard(currentIndex);

	// Create navigation controls.
	const carouselControls = document.createElement('div');
	carouselControls.classList.add('carousel-controls');

	const prevButton = document.createElement('button');
	prevButton.textContent = 'Prev';
	const nextButton = document.createElement('button');
	nextButton.textContent = 'Next';

	carouselControls.appendChild(prevButton);
	carouselControls.appendChild(nextButton);
	deck.appendChild(carouselControls);

	// Event listeners for the navigation buttons.
	prevButton.addEventListener('click', () => {
		currentIndex = (currentIndex - 1 + cards.length) % cards.length;
		showCard(currentIndex);
	});

	nextButton.addEventListener('click', () => {
		currentIndex = (currentIndex + 1) % cards.length;
		showCard(currentIndex);
	});
}
