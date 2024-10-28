const container = document.querySelector('.container');
container.setAttribute(`style`, `display: flex; flex-wrap: wrap; width: 100%;`);

const gap = 2;
container.style.gap = `${gap}px`;

function renderGrid(num) {
	const gridNum = num * num;
	const itemSize = Number((100 / num).toFixed(2));

	let i = 1;
	while (i <= gridNum) {
		const item = document.createElement('div');
		item.setAttribute(
			`style`,
			`width: calc(${itemSize}% - ${gap}px); padding-bottom: ${itemSize}%; background-color: #222;`
		);
		item.addEventListener('mouseover', () => {
			item.style.backgroundColor = 'deeppink';
		});
		item.addEventListener('mouseout', () => {
			item.style.backgroundColor = '#222';
		});
		container.appendChild(item);
		i++;
	}
}

const button = document.querySelector('button');

button.addEventListener('click', () => {
	const num = +prompt('Enter grid size');
	if (!num) alert('Enter a valid number');
	if (num > 100) alert('Enter a number less than or equal to 100');

	if (num <= 100 && num > 0) {
		renderGrid(num);
	}
});
