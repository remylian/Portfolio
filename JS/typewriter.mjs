export function typewriterEffect(element, text, delay = 100) {
	let i = 0;
	element.textContent = ''; // Clear existing content

	function addChar() {
		if (i < text.length) {
			element.textContent += text.charAt(i);
			i++;
			setTimeout(addChar, delay);
		}
	}
	addChar();
}
