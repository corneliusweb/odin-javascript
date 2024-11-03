let num1;
let num2;
let inputs = '';
let operator = null;

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
	return num2 === 0 ? "Can't divide by 0" : num1 / num2;
}

document
	.querySelector('form')
	.addEventListener('click', (event) => event.preventDefault());

const funcAndNumericBtns = document.querySelector('.func-and-numeric-btns');

funcAndNumericBtns.addEventListener('click', (event) => {
	if (event.target.classList.contains('remainder')) {
		if (num1 !== undefined || inputs !== '') {
			if (num1 !== undefined && inputs !== '') {
				const num = Number(inputs);
				const percent = (num / 100) * num1;
				num2 = percent;
				operate();
				console.log(num1);
			} else if (num1 === undefined && inputs !== '') {
				const num = Number(inputs);
				num1 = num / 100;
				inputs = '';
				console.log(num1);
			} else if (num1 && inputs === '') {
				num1 = num1 / 100;
				inputs = '';
				console.log(num1);
			}
		}
		console.log('%');
	} else if (event.target.classList.contains('negation')) {
		if (num1 && inputs === '') {
			const negate = num1 * -1;
			if (Math.sign(num1) !== -1 || Math.sign(num1) !== 0) {
				num1 = negate;
			} else {
				num1 = Math.abs(num1);
			}
		} else {
			if (!inputs.includes('-')) {
				inputs = '-' + inputs;
			} else {
				inputs = inputs.slice(1);
			}
		}
		console.log('-/+');
	} else if (event.target.classList.contains('clear')) {
		if (num1 !== undefined) {
			num1 = undefined;
		}
		restart();
		console.log('Cleared');
	}

	// numeric buttons
	if (event.target.classList.contains('one')) {
		if (inputs === '' || inputs === '0') {
			inputs = '1';
		} else {
			inputs += '1';
		}
		console.log(inputs);
	} else if (event.target.classList.contains('two')) {
		if (inputs === '' || inputs === '0') {
			inputs = '2';
		} else {
			inputs += '2';
		}
		console.log(inputs);
	} else if (event.target.classList.contains('three')) {
		if (inputs === '' || inputs === '0') {
			inputs = '3';
		} else {
			inputs += '3';
		}
		console.log(inputs);
	} else if (event.target.classList.contains('four')) {
		if (inputs === '' || inputs === '0') {
			inputs = '4';
		} else {
			inputs += '4';
		}
		console.log(inputs);
	} else if (event.target.classList.contains('five')) {
		if (inputs === '' || inputs === '0') {
			inputs = '5';
		} else {
			inputs += '5';
		}
		console.log(inputs);
	} else if (event.target.classList.contains('six')) {
		if (inputs === '' || inputs === '0') {
			inputs = '6';
		} else {
			inputs += '6';
		}
		console.log(inputs);
	} else if (event.target.classList.contains('seven')) {
		if (inputs === '' || inputs === '0') {
			inputs = '7';
		} else {
			inputs += '7';
		}
		console.log(inputs);
	} else if (event.target.classList.contains('eight')) {
		if (inputs === '' || inputs === '0') {
			inputs = '8';
		} else {
			inputs += '8';
		}
		console.log(inputs);
	} else if (event.target.classList.contains('nine')) {
		if (inputs === '' || inputs === '0') {
			inputs = '9';
		} else {
			inputs += '9';
		}
		console.log(inputs);
	} else if (event.target.classList.contains('zero')) {
		if (inputs === '') {
			inputs = '0';
		} else if (inputs === '0') {
			inputs += '';
		} else {
			inputs += '0';
		}
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
		const currentOperator = 'divide';
		if (operator === null) {
			operator = currentOperator;

			if (inputs === '' && num1 === undefined) {
				num1 = 0;
				console.log(num1);
			} else {
				if (num1 === undefined && inputs !== '') {
					num1 = Number(inputs);
				} else if (num1 !== undefined && inputs !== '') {
					num2 = Number(inputs);
					num1 /= num2;
				}
				inputs = '';
			}
		} else {
			earlyOperate();
			operator = currentOperator;
		}
	} else if (event.target.classList.contains('times')) {
		const currentOperator = 'times';
		if (operator === null) {
			operator = currentOperator;

			if (inputs === '' && num1 === undefined) {
				num1 = 1;
				console.log(num1);
			} else {
				if (num1 === undefined && inputs !== '') {
					num1 = Number(inputs);
				} else if (num1 !== undefined && inputs !== '') {
					num2 = Number(inputs);
					num1 *= num2;
				}
				inputs = '';
			}
		} else {
			earlyOperate();
			operator = currentOperator;
		}
	} else if (event.target.classList.contains('minus')) {
		const currentOperator = 'minus';
		if (operator === null) {
			if (inputs !== '' || num1 !== undefined) {
				operator = currentOperator;
			}

			if (inputs === '' && num1 === undefined) {
				inputs = '-' + inputs;
				console.log(inputs);
			} else {
				if (num1 === undefined && inputs !== '') {
					num1 = Number(inputs);
				} else if (num1 !== undefined && inputs !== '') {
					num2 = Number(inputs);
					num1 -= num2;
				}
				inputs = '';
			}
		} else {
			earlyOperate();
			operator = currentOperator;
		}
	} else if (event.target.classList.contains('plus')) {
		const currentOperator = 'plus';
		if (operator === null) {
			operator = currentOperator;

			if (inputs === '' && num1 === undefined) {
				num1 = 0;
				console.log(num1);
			} else {
				if (num1 === undefined && inputs !== '') {
					num1 = Number(inputs);
				} else if (num1 !== undefined && inputs !== '') {
					num2 = Number(inputs);
					num1 += num2;
				}
				inputs = '';
			}
		} else {
			earlyOperate();
			operator = currentOperator;
		}
	}

	if (event.target.classList.contains('equals')) {
		if (operator !== null) {
			if (num2 === undefined && inputs === '') {
				num2 = num1;
				operate();
				restart();
			} else {
				num2 = Number(inputs);
				operate();
				restart();
			}
		}
	}
});

function operate() {
	if (operator === 'divide') {
		num1 = divide(num1, num2);
		console.log(num1);
	} else if (operator === 'times') {
		num1 = multiply(num1, num2);
		console.log(num1);
	} else if (operator === 'minus') {
		num1 = subtract(num1, num2);
		console.log(num1);
	} else if (operator === 'plus') {
		num1 = add(num1, num2);
		console.log(num1);
	}
}

function restart() {
	if (num2 !== undefined) {
		num2 = undefined;
	}
	if (operator !== null) {
		operator = null;
	}
	if (inputs !== '') {
		inputs = '';
	}
}

function earlyOperate() {
	if (num1 && inputs !== '') {
		num2 = Number(inputs);
		operate();
	}
	if (inputs !== '') {
		inputs = '';
	}
	if (num2 !== undefined) {
		num2 = undefined;
	}
}
