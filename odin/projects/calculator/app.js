let num1;
let operator = null;
let num2;

function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	return num1 / num2;
}

document
	.querySelector('form')
	.addEventListener('click', (event) => event.preventDefault());

const funcAndNumericBtns = document.querySelector('.func-and-numeric-btns');

let inputs = '0';

funcAndNumericBtns.addEventListener('click', (event) => {
	if (event.target.classList.contains('remainder')) {
		console.log('%');
	} else if (event.target.classList.contains('negation')) {
		console.log('-/+');
	} else if (event.target.classList.contains('clear')) {
		console.log('C');
	}

	// numeric buttons
	if (event.target.classList.contains('one')) {
		if (inputs === '0') {
			inputs = '1';
		} else {
			inputs += '1';
		}
		console.log(inputs);
	} else if (event.target.classList.contains('two')) {
		if (inputs === '0') {
			inputs = '2';
		} else {
			inputs += '2';
		}
		console.log(inputs);
	} else if (event.target.classList.contains('three')) {
		if (inputs === '0') {
			inputs = '3';
		} else {
			inputs += '3';
		}
		console.log(inputs);
	} else if (event.target.classList.contains('four')) {
		if (inputs === '0') {
			inputs = '4';
		} else {
			inputs += '4';
		}
		console.log(inputs);
	} else if (event.target.classList.contains('five')) {
		if (inputs === '0') {
			inputs = '5';
		} else {
			inputs += '5';
		}
		console.log(inputs);
	} else if (event.target.classList.contains('six')) {
		if (inputs === '0') {
			inputs = '6';
		} else {
			inputs += '6';
		}
		console.log(inputs);
	} else if (event.target.classList.contains('seven')) {
		if (inputs === '0') {
			inputs = '7';
		} else {
			inputs += '7';
		}
		console.log(inputs);
	} else if (event.target.classList.contains('eight')) {
		if (inputs === '0') {
			inputs = '8';
		} else {
			inputs += '8';
		}
		console.log(inputs);
	} else if (event.target.classList.contains('nine')) {
		if (inputs === '0') {
			inputs = '9';
		} else {
			inputs += '9';
		}
		console.log(inputs);
	} else if (event.target.classList.contains('zero')) {
		if (inputs === '0') {
			inputs = '';
		}
		inputs += '0';
		console.log(inputs);
	}

	if (event.target.classList.contains('dot')) {
		if (!inputs.includes('.')) {
			inputs += '.';
		}
		inputs += '';
		console.log(inputs);
	}
});

const operatorBtns = document.querySelector('.operator-btns');

operatorBtns.addEventListener('click', (event) => {
	if (event.target.classList.contains('divide')) {
		operator = 'divide';
		num1 = Number(inputs);
		inputs = '0';
		console.log(num1);
	} else if (event.target.classList.contains('times')) {
		operator = 'times';
		num1 = Number(inputs);
		inputs = '0';
		console.log(num1);
	} else if (event.target.classList.contains('minus')) {
		operator = 'minus';
		num1 = Number(inputs);
		inputs = '0';
		console.log(num1);
	} else if (event.target.classList.contains('plus')) {
		operator = 'plus';
		num1 = Number(inputs);
		inputs = '0';
		console.log(num1);
	} else if (event.target.classList.contains('equals')) {
		num2 = Number(inputs);
		operate();
		inputs = '0';
		operator = null;
	}
});

function operate() {
	if (operator === 'divide') {
		console.log(divide(num1, num2));
	} else if (operator === 'times') {
		console.log(multiply(num1, num2));
	} else if (operator === 'minus') {
		console.log(subtract(num1, num2));
	} else if (operator === 'plus') {
      console.log(add(num1, num2));
	}
}
