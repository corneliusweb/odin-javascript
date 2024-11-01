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
		console.log('1');
	} else if (event.target.classList.contains('two')) {
		console.log('2');
	} else if (event.target.classList.contains('three')) {
		console.log('3');
	} else if (event.target.classList.contains('four')) {
		console.log('4');
	} else if (event.target.classList.contains('five')) {
		console.log('5');
	} else if (event.target.classList.contains('six')) {
		console.log('6');
	} else if (event.target.classList.contains('seven')) {
		console.log('7');
	} else if (event.target.classList.contains('eight')) {
		console.log('8');
	} else if (event.target.classList.contains('nine')) {
		console.log('9');
   } else if (event.target.classList.contains('zero')) {
      console.log('0')
   }
   
   if (event.target.classList.contains('dot')) {
      console.log('dot')
   }
});

const operatorBtns = document.querySelector('.operator-btns');

operatorBtns.addEventListener('click', (event) => {
   if (event.target.classList.contains('divide')) {
		console.log('/');
	} else if (event.target.classList.contains('times')) {
		console.log('X');
	} else if (event.target.classList.contains('minus')) {
		console.log('-');
	} else if (event.target.classList.contains('plus')) {
		console.log('+');
	} else if (event.target.classList.contains('equals')) {
		console.log('=');
	}
})