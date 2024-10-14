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
   // check if a user entered a valid character to avoid throwing error for trying to convert empty strings.
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

function playGame() {
	let humanScore = 0;
	let computerScore = 0;

   function playRound(humanChoice, computerChoice) {
      // check if computer and the user chose the same word
		if (computerChoice === humanChoice) {
			console.log(`That's a tie. Go again!`);
		}

		if (computerChoice === 'Rock' && humanChoice === 'Scissors') {
			console.log(`You lose! Rock breaks scissors`);
			computerScore++;
		} else if (computerChoice === 'Rock' && humanChoice === 'Paper') {
			console.log(`You win! Paper traps rock`);
			humanScore++;
		}

		if (computerChoice === 'Paper' && humanChoice === 'Rock') {
			console.log(`You lose! Paper traps rock`);
			computerScore++;
		} else if (computerChoice === 'Paper' && humanChoice === 'Scissors') {
			console.log(`You win! Scissors cuts paper`);
			humanScore++;
		}

		if (computerChoice === 'Scissors' && humanChoice === 'Paper') {
			console.log(`You lose! Scissor cuts paper`);
			computerScore++;
		} else if (computerChoice === 'Scissors' && humanChoice === 'Rock') {
			console.log(`You win! Rock breaks scissors`);
			humanScore++;
		}
	}

	const roundCount = 5;

	for (let i = 1; i <= roundCount; i++) {
		playRound(getHumanChoice(), getComputerChoice());
	}
	console.log(`Computer score: ${computerScore}\nYour score: ${humanScore}`);
}
playGame();
