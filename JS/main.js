import { displayAboutMeInfo } from './aboutMe.mjs';
import { displayProjectInfo } from './projectInfo.mjs';

document.addEventListener('DOMContentLoaded', () => {
	displayProjectInfo();
	displayAboutMeInfo();

	const deck = document.getElementById('deck');
	const deckCover = deck.querySelector('.deck-cover');
	deckCover.addEventListener('click', () => {
		deck.classList.toggle('active');
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

// Show about-me when Button is clicked.
const aboutBtn = document.getElementById('aboutBtn');
const aboutInfo = document.querySelector('.container-about-me');

aboutBtn.addEventListener('click', () => {
	aboutInfo.classList.toggle('active');
});

// Conditionally load mobile-specific code if on mobile
if (window.innerWidth <= 999) {
	import('./mobile.mjs').then(() => {});
}
