// build rock paper scissors game

// function that randomly returns rock, paper or scissors as the computer's pick
function computerPlay() {
	let random = Math.floor(Math.random() * 3);
	if (random === 0) {
		return 'rock';
	} else if (random === 1) {
		return 'paper';
	} else {
		return 'scissors';
	}
}
