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
console.log(getComputerChoice());

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
console.log(getHumanChoice());
