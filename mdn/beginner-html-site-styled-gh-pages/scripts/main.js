const image = document.querySelector('img');

image.addEventListener('click', () => {
	const imageSrc = image.getAttribute('src');
	if (imageSrc === './images/firefox-icon.png') {
		image.setAttribute('src', './images/firefox2.jpg');
	} else {
		image.setAttribute('src', './images/firefox-icon.png');
	}
});
