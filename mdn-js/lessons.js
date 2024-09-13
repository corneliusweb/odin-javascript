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

	if (userRating >= 6) {
		output.textContent = `Song is good! I rate it ${
			(userRating / maxRating) * 100
		}%`;
	} else {
		output.textContent = `Song is below par! I rate it ${
			(userRating / maxRating) * 100
		}%`;
   }
}

const rateButton = document.querySelector('.rate-button');

rateButton.addEventListener('click', rateSong);
