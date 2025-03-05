import { displayProjectInfo } from './projectInfo.mjs';

document.addEventListener('DOMContentLoaded', () => {
	displayProjectInfo();
	const deck = document.getElementById('deck');
	const deckCover = deck.querySelector('.deck-cover');
	// Toggle the "active" class on the deck when the deck cover is clicked
	deckCover.addEventListener('click', () => {
		deck.classList.toggle('active');

		// reset original title when closing the deck
		if (!deck.classList.contains('active')) {
			const infoContainer = document.querySelector('.container-info');
			infoContainer.innerHTML = '';
			const originalText = infoContainer.dataset.original || 'Read All About It!';
			const resetTitle = document.createElement('h2');
			resetTitle.classList.add('info-empty');
			resetTitle.textContent = originalText;
			infoContainer.appendChild(resetTitle);
		}
	});
});
