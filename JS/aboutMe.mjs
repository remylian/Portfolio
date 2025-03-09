import { typewriterEffect } from './typewriter.mjs';

const aboutMeData =
	'Hello there! My name is Remy Lian, a 44-year-old frontend developer currently completing my first year of studies. I enjoy the problem solving aspect of coding and am constantly seeking to learn and refine my skills. Outside of the digital world, my family is my greatest inspiration and a source of balance in my life. I practice martial arts, which has instilled in me discipline, focus, and resilience—qualities that I bring to every project. In my spare time, I enjoy both tabletop and PC gaming, activities that sharpen my strategic thinking and fuel my creativity. I am excited to merge my technical skills with my personal passions to create engaging and innovative digital experiences.';

export function displayAboutMeInfo() {
	// Select the button inside the About Me infowrapper
	const aboutMeInfoBtn = document.getElementById('aboutMeInfo');
	if (aboutMeInfoBtn) {
		aboutMeInfoBtn.addEventListener('click', (e) => {
			e.preventDefault(); // Prevent any default action

			// Select the info container where the text will appear
			const infoContainer = document.querySelector('.container-info');
			// Clear any existing content
			infoContainer.innerHTML = '';

			// Create and append a heading (optional)
			const heading = document.createElement('h2');
			heading.textContent = 'About Me:';
			infoContainer.appendChild(heading);

			// Create a container for the typewriter text
			const aboutMeContent = document.createElement('div');
			infoContainer.style.padding = '0.5rem';
			infoContainer.appendChild(aboutMeContent);

			const aboutText = aboutMeData;

			// Call the typewriter effect
			typewriterEffect(aboutMeContent, aboutText, 25);
		});
	}
}
