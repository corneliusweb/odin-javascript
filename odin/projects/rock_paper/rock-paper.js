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

function playGame() {
	let humanScore = 0;
	let computerScore = 0;

	const roundResult = document.querySelector('.round-result');
	const runningScore = document.querySelector('.running-score');
	const finalResult = document.querySelector('.final-result');

	function playRound(humanChoice, computerChoice) {
		// check if computer and the user chose the same word
		if (computerChoice === humanChoice) {
			roundResult.textContent = `That's a tie. Go again!`;
		}

		if (computerChoice === 'Rock' && humanChoice === 'Scissors') {
			computerScore++;
			roundResult.textContent = `You lose! Rock breaks scissors`;
			runningScore.textContent = `Your Score: ${humanScore}. Computer Score: ${computerScore}`;
		} else if (computerChoice === 'Rock' && humanChoice === 'Paper') {
			humanScore++;
			roundResult.textContent = `You win! Paper traps rock`;
			runningScore.textContent = `Your Score: ${humanScore}. Computer Score: ${computerScore}`;
		}

		if (computerChoice === 'Paper' && humanChoice === 'Rock') {
			computerScore++;
			roundResult.textContent = `You lose! Paper traps rock`;
			runningScore.textContent = `Your Score: ${humanScore}. Computer Score: ${computerScore}`;
		} else if (computerChoice === 'Paper' && humanChoice === 'Scissors') {
			humanScore++;
			roundResult.textContent = `You win! Scissors cuts paper`;
			runningScore.textContent = `Your Score: ${humanScore}. Computer Score: ${computerScore}`;
		}

		if (computerChoice === 'Scissors' && humanChoice === 'Paper') {
			computerScore++;
			roundResult.textContent = `You lose! Scissor cuts paper`;
			runningScore.textContent = `Your Score: ${humanScore}. Computer Score: ${computerScore}`;
		} else if (computerChoice === 'Scissors' && humanChoice === 'Rock') {
			humanScore++;
			roundResult.textContent = `You win! Rock breaks scissors`;
			runningScore.textContent = `Your Score: ${humanScore}. Computer Score: ${computerScore}`;
      }
      
		if (humanScore === 5 && computerScore < 5) {
			finalResult.textContent = 'You win!!';
		} else if (computerScore === 5 && humanScore < 5) {
			finalResult.textContent = 'Computer win!!!';
		}
	}

	const btns = document.querySelector('.game-btns');
	btns.addEventListener('click', (event) => {
		let playerSelection = '';
		if (event.target.classList.contains('rock')) {
			playerSelection = 'Rock';
			playRound(playerSelection, getComputerChoice());
		} else if (event.target.classList.contains('paper')) {
			playerSelection = 'Paper';
			playRound(playerSelection, getComputerChoice());
		} else if (event.target.classList.contains('scissors')) {
			playerSelection = 'Scissors';
			playRound(playerSelection, getComputerChoice());
		}
	});
}
playGame();
