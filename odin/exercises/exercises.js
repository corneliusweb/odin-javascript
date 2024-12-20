// DOM Exercise

const DOMElementArray = []; // Collect all the body nodes to append them once.

const body = document.querySelector('body');
const container = document.querySelector('#container');
const content = document.createElement('div');

content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const h1 = document.querySelector('#h1');
h1.textContent = 'JavaScript Lessons taught at Odin';
body.insertBefore(h1, container);

const para1 = document.createElement('p');
para1.textContent = "Hey I'm red!";
para1.setAttribute('style', 'color:red');
DOMElementArray.push(para1);

const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!";
h3.style.color = 'blue';
DOMElementArray.push(h3);

for (const element of DOMElementArray) {
	body.appendChild(element);
}

const div = document.createElement('div');
div.setAttribute('style', 'border: 2px solid black; background: pink;');

const divH1 = document.createElement('h1');
divH1.textContent = "I'm in a div";
div.appendChild(divH1);

const divPara = document.createElement('p');
divPara.textContent = 'ME TOO!';
div.appendChild(divPara);

body.appendChild(div);

/** function sumOfTripledEvens(array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		// Step 1: If the element is an even number
		if (array[i] % 2 === 0) {
			// Step 2: Multiply this number by three
			const tripleEvenNumber = array[i] * 3;

			// Step 3: Add the new number to the total
			sum += tripleEvenNumber;
		}
	}
	return sum;
}
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// first, filter even numbers
// second, map to times by 3
// lastly, reduce to sum all

// let filteredArr = arr.filter((num) => num % 2 === 0);
// let mappedArray = filteredArr.map((num) => num * 3);
// let reducedArr = mappedArray.reduce((total, num) => {
//    return total + num;
// }, 0)
// console.log(reducedArr)

function sumOfTripledEvens(arr) {
	const filteredArr = arr.filter((num) => num % 2 === 0);
	const mappedArray = filteredArr.map((num) => num * 3);
	const reducedArr = mappedArray.reduce((acc, curr) => acc + curr, 0);
	return reducedArr;
}
console.log(sumOfTripledEvens(arr));

function camelize(str) {
	const splitStr = str.split('-');
	const upperCase = splitStr.map((word, index) =>
		index === 0 ? word : word[0].toUpperCase() + word.slice(1)
	);
	const camelized = upperCase.join('');
	return camelized;
}
console.log(camelize('list-style-image'));

const arr1 = [5, 3, 8, 1];

function filterRange(arr, a, b) {
	return arr.filter((item) => item >= a && item <= b);
}
const filtered = filterRange(arr1, 1, 4);
console.log(filtered);
console.log(arr1);

// function filterRangeInPlace(arr, a, b) {
//    arr.filter
// }

let arr2 = [5, 2, 1, -10, 8];
const sorted = arr2.sort((a, b) => b - a);
console.log(sorted);

let arr3 = ['HTML', 'JavaScript', 'CSS'];
function copySorted(arr) {
	return arr.slice().sort();
}
console.log(copySorted(arr3));
console.log(arr3);

let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 28 };

let users = [john, pete, mary];
let names = users.map((user) => user.name);
console.log(names);

let john1 = { name: 'John', surname: 'Smith', id: 1 };
let pete1 = { name: 'Pete', surname: 'Hunt', id: 2 };
let mary1 = { name: 'Mary', surname: 'Key', id: 3 };

let users1 = [john1, pete1, mary1];
let usersMapped = users1.map((user) => ({
	fullName: `${user.name} ${user.surname}`,
	id: user.id,
}));
console.log(usersMapped);

function sortByAge(arr) {
	return arr.sort((a, b) => a.age - b.age);
}
console.log(sortByAge(users));

function getAverageAge(users) {
	return Math.floor(
		users.reduce((acc, curr) => acc + curr.age, 0) / users.length
	);
}
console.log(getAverageAge(users));

