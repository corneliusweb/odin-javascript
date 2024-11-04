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
const inputEl = document.querySelector('.display input');
document.addEventListener('DOMContentLoaded', () =>
	inputs === '' ? (inputEl.value = '0') : (inputEl.value = '')
);

function removeFirstZero() {
	if (inputEl.value.length > 0 && inputEl.value[0] === '0') {
		inputEl.value = inputEl.value.slice(1);
   } 
}

funcAndNumericBtns.addEventListener('click', (event) => {
	removeFirstZero();
	if (event.target.classList.contains('remainder')) {
		if (num1 !== undefined || inputs !== '') {
			if (num1 !== undefined && inputs !== '') {
				const num = Number(inputs);
				const percent = (num / 100) * num1;
				num2 = percent;
				operate();
				inputEl.value = num1;
			} else if (num1 === undefined && inputs !== '') {
				const num = Number(inputs);
				num1 = num / 100;
				inputs = '';
				inputEl.value = num1;
			} else if (num1 && inputs === '') {
				num1 = num1 / 100;
				inputs = '';
				inputEl.value = num1;
			}
		}
	} else if (event.target.classList.contains('negation')) {
		if (num1 && inputs === '') {
			const negate = num1 * -1;
			if (Math.sign(num1) !== -1 || Math.sign(num1) !== 0) {
            num1 = negate;
            inputEl.value = num1;
			} else {
				num1 = Math.abs(num1);
				inputEl.value = num1;
			}
		} else {
			if (!inputs.includes('-')) {
            inputs = '-' + inputs;
            inputEl.value = inputs;
			} else {
            inputs = inputs.slice(1);
            inputEl.value = inputs;
			}
		}
	} else if (event.target.classList.contains('clear')) {
		if (num1 !== undefined) {
			num1 = undefined;
		}
		restart();
		inputEl.value = '0';
	}

	// numeric buttons
	if (event.target.classList.contains('one')) {
		if (inputs === '' || inputs === '0') {
			inputs = '1';
		} else {
			inputs += '1';
		}
		inputEl.value += '1';
	} else if (event.target.classList.contains('two')) {
		if (inputs === '' || inputs === '0') {
			inputs = '2';
		} else {
			inputs += '2';
		}
		inputEl.value += '2';
	} else if (event.target.classList.contains('three')) {
		if (inputs === '' || inputs === '0') {
			inputs = '3';
		} else {
			inputs += '3';
		}
		inputEl.value += '3';
	} else if (event.target.classList.contains('four')) {
		if (inputs === '' || inputs === '0') {
			inputs = '4';
		} else {
			inputs += '4';
		}
		inputEl.value += '4';
	} else if (event.target.classList.contains('five')) {
		if (inputs === '' || inputs === '0') {
			inputs = '5';
		} else {
			inputs += '5';
		}
		inputEl.value += '5';
	} else if (event.target.classList.contains('six')) {
		if (inputs === '' || inputs === '0') {
			inputs = '6';
		} else {
			inputs += '6';
		}
		inputEl.value += '6';
	} else if (event.target.classList.contains('seven')) {
		if (inputs === '' || inputs === '0') {
			inputs = '7';
		} else {
			inputs += '7';
		}
		inputEl.value += '7';
	} else if (event.target.classList.contains('eight')) {
		if (inputs === '' || inputs === '0') {
			inputs = '8';
		} else {
			inputs += '8';
		}
		inputEl.value += '8';
	} else if (event.target.classList.contains('nine')) {
		if (inputs === '' || inputs === '0') {
			inputs = '9';
		} else {
			inputs += '9';
		}
		inputEl.value += '9';
	} else if (event.target.classList.contains('zero')) {
		if (inputs === '') {
			inputs = '0';
			inputEl.value += '0';
		} else if (inputs === '0' && inputEl.value === '0') {
			inputs += '';
		} else {
			inputs += '0';
			inputEl.value += '0';
		}
	}

	if (event.target.classList.contains('dot')) {
		if (!inputs.includes('.')) {
         inputs += '.';
         inputEl.value += '.'
		}
		inputs += '';
	}
});

const operatorBtns = document.querySelector('.operator-btns');

function removeDuplicateOperator(op) {
	const indexOfMainOp = inputEl.value[inputEl.value.length - 2];
	const indexOfDuplicateOp = inputEl.value[inputEl.value.length - 1];

	if (indexOfDuplicateOp === op && indexOfMainOp === op) {
		inputEl.value = inputEl.value.replace(indexOfDuplicateOp, '');
	}
}

operatorBtns.addEventListener('click', (event) => {
	if (event.target.classList.contains('divide')) {
		const currentOperator = 'divide';
		if (operator === null) {
			operator = currentOperator;

			if (inputs === '' && num1 === undefined) {
				num1 = 0;
				inputEl.value = num1;
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
		inputEl.value += '/';
		removeDuplicateOperator('/');
	} else if (event.target.classList.contains('times')) {
		const currentOperator = 'times';
		if (operator === null) {
			operator = currentOperator;

			if (inputs === '' && num1 === undefined) {
				num1 = 0;
				inputEl.value = num1;
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
		inputEl.value += '*';
		removeDuplicateOperator('*');
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
		inputEl.value += '-';
		removeDuplicateOperator('-');
	} else if (event.target.classList.contains('plus')) {
		const currentOperator = 'plus';
		if (operator === null) {
			operator = currentOperator;

			if (inputs === '' && num1 === undefined) {
				num1 = 0;
				inputEl.value = num1;
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
		inputEl.value += '+';
		removeDuplicateOperator('+');
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
		inputEl.value = num1;
	} else if (operator === 'times') {
		num1 = multiply(num1, num2);
		inputEl.value = num1;
	} else if (operator === 'minus') {
		num1 = subtract(num1, num2);
		inputEl.value = num1;
	} else if (operator === 'plus') {
		num1 = add(num1, num2);
		inputEl.value = num1;
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
