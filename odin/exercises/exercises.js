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
