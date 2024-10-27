const container = document.querySelector('.container');

function renderGrid(num) {
	const gridNum = num * num;

   const currentGrid = document.createElement('div');
   currentGrid.classList.add('current-grid')
	container.appendChild(currentGrid);

	let i = 1;
	while (i <= gridNum) {
		const grid = document.createElement('div');
		const gridWidth = Number((95 / num).toFixed(2)); // dividing by 95% instead of 100% makes sure that the gapping is accounted for.
		console.log(gridWidth);
		grid.style.flex = `1 1 ${gridWidth}%`;
		grid.style.aspectRatio = '1/1';
		grid.style.backgroundColor = '#222';
		currentGrid.appendChild(grid);

		i++;
	}
}

const button = document.querySelector('button');

button.addEventListener('click', () => {
	const num = +prompt('Enter grid size');
	if (!num) alert('Enter a valid number');
	if (num > 100) alert('Enter a number less than or equal to 100');

	if (num <= 100) {
		renderGrid(num);
	}
});
