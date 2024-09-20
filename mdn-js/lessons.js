// let a = 33;
// let b = 77 * a;

// console.log(b);

function createPara() {
	const para = document.createElement('p');
	para.textContent = 'You clicked the fucking button you mf!!';
	document.body.appendChild(para);
}

const buttons = document.querySelectorAll('.alert-me');

for (const button of buttons) {
	button.addEventListener('click', createPara);
}

const song = 'Mockingbird';
const maxRating = 10;

function rateSong() {
	const userRating = +prompt('What do you rate Mockingbird?');
	let output = document.querySelector('.display');

	if (typeof userRating === 'number') {
		if (userRating <= maxRating && userRating > 0) {
			output.textContent = `The song Mockingbird is good. I rate it ${
				(userRating / maxRating) * 100
			}%`;
		} else {
			output.textContent =
				'Invalid rating! Please enter a number between 0 and 10.';
		}
	} else {
		output.textContent = 'Invalid input! Please enter a number.';
	}
}

const rateButton = document.querySelector('.rate-button');

rateButton.addEventListener('click', rateSong);
