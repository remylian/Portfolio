import { typewriterEffect } from './typewriter.mjs';

const projectsData = {
	Rainydays:
		'An online shop for outdoor jackets. This was my first project and a course Assignment for my HTML/CSS class at Noroff School of technology and digital media',
	"Adventurer's Alehouse":
		"Adventurer's Alehouse is my 1st year project exam. It is a blogg page themed around roleplaying games and showcases what i have learned during my first year at Noroff School of technology and digital media.",
	'Community Science Museum':
		'Community Science Museum was a Semester Project for my 1st semester at Noroff School of technology and digital media. It is meant to showcase my understanding of HTML/CSS as well as other relevant skills such as planning and design',
};

// The displayProjectInfo function updates the info container based on the button clicked.
export function displayProjectInfo() {
	document.querySelectorAll('.info-btn').forEach((button) => {
		button.addEventListener('click', (e) => {
			e.preventDefault();
			// Find the closest card container and then its h2 for the title
			const card = button.closest('.card');
			const projectTitle = card.querySelector('h2').textContent;

			// Select the container where the info should be displayed
			const infoContainer = document.querySelector('.container-info');
			// Clear any previous content
			infoContainer.innerHTML = '';

			// Create and insert the title element
			const titleElement = document.createElement('h2');
			titleElement.textContent = projectTitle;
			infoContainer.appendChild(titleElement);

			// Create the paragraph element that will receive the typewriter text
			const infoElement = document.createElement('p');
			infoContainer.appendChild(infoElement);

			// Use the typewriter effect function to display the text
			const text = projectsData[projectTitle] || 'No project information available.';
			typewriterEffect(infoElement, text, 50); // adjust delay as needed
		});
	});
}
