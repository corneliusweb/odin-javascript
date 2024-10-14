// Randomly generate computer choice.
function getComputerChoice() {
	const randomNumber = Math.floor(Math.random() * 3);

	if (randomNumber === 0) {
		return 'Rock';
	} else if (randomNumber === 1) {
		return 'Paper';
	} else if (randomNumber === 2) {
		return 'Scissors';
	}
}
// console.log(getComputerChoice());

function getHumanChoice() {
	const userChoice = prompt('Rock, Paper, Scissors?');
	if (userChoice) {
		const lowercase = userChoice.toLowerCase();
		const capitalized = lowercase.replace(
			lowercase[0],
			lowercase[0].toUpperCase()
		);
		return capitalized;
	}
}
// console.log(getHumanChoice());

let humanChoice = 0;
let computerChoice = 0;

function playRound(humanChoice, computerChoice) {
	if (computerChoice === humanChoice) {
		console.log(`That's a tie. Go again!`);
	}

	if (computerChoice === 'Rock' && humanChoice === 'Scissors') {
		console.log(`You lose! Rock breaks scissors`);
		computerChoice++;
	} else if (computerChoice === 'Rock' && humanChoice === 'Paper') {
		console.log(`You win! Paper traps rock`);
		humanChoice++;
	}

	if (computerChoice === 'Paper' && humanChoice === 'Rock') {
		console.log(`You lose! Paper traps rock`);
		computerChoice++;
	} else if (computerChoice === 'Paper' && humanChoice === 'Scissors') {
		console.log(`You win! Scissors cuts paper`);
		humanChoice++;
	}

	if (computerChoice === 'Scissors' && humanChoice === 'Paper') {
		console.log(`You lose! Scissor cuts paper`);
		computerChoice++;
	} else if (computerChoice === 'Scissors' && humanChoice === 'Rock') {
		console.log(`You win! Rock breaks scissors`);
		humanChoice++;
	}
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
