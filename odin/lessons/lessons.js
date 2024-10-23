// Write a function called add7 that takes one number and returns that number + 7.
function add(num) {
	return num + 7;
}
console.log(add(4));

// Write a function called multiply that takes 2 numbers and returns their product.
function multiply(num1, num2) {
	return num1 * num2;
}
console.log(multiply(67, 3));

/**
 * Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
 */
function capitalize(str) {
	const lowercase = str.toLowerCase();
	const firstLetter = lowercase[0];
	const converted = lowercase.replace(firstLetter, firstLetter.toUpperCase());

	return converted;
}
console.log(capitalize('hELlo'));

// Write a function called lastLetter that takes a string and returns the very last letter of that string:
function lastLetter(str) {
	return str[str.length - 1];
}
console.log(lastLetter('jammy'));

// Practicing Algorithm with FizBuzz game

/**
 * Get and store the user input in a variable
 *    In this example, I'll use function
 * Convert the input to number
 * Create a loop to run from the user input till 0
 * Check if the number is divisible by 3 and 5
 * If it is, log 'FizBuzz'
 * Check if the number is divisible by 3 or 5
 * If it is, log Fizz or Buzz respectively
 * Else, log the number
 */

// Very unnecessary, but I have got practice function parameters
function getInput(input) {
	// input = +prompt('Enter number');

	// If I am getting the input from DOM, test if it's a number
	if (isNaN(input)) {
		return; // returns undefined if not a number
	} else {
		return input;
	}
}

function checkFizzBuzz(num) {
	// make sure getInput didn't return `undefined`
	if (typeof num !== 'undefined') {
		//Loop through the user input till 0
		for (let c = 1; c <= num; c++) {
			if (c % 3 === 0 && c % 5 === 0) {
				console.log('FizBuzz');
			} else if (c % 3 === 0) {
				console.log('Fizz');
			} else if (c % 5 === 0) {
				console.log('Buzz');
			} else {
				console.log(c);
			}
		}
		// if getInput returned `undefined`, log this
	} else {
		console.log("Hey man! Can't you read?");
	}
}
//checkFizzBuzz(getInput(+'8' + +'8'));

const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
	e.preventDefault();
	console.log(e);
});
