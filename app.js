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

// get input from user, if input is correct return input, else loop request until input's correct
function userPlay() {
	let pick = prompt('Choose rock, paper or scissors').toLowerCase();
	if (pick === 'rock' || pick === 'paper' || pick === 'scissors') {
		return pick;
	} else {
		let check = 0;
		do {
			pick = prompt(
				'Oops, something went wrong. Try again. Rock, paper or scissors?'
			).toLowerCase();
			if (pick === 'rock' || pick === 'paper' || pick === 'scissors') {
				check = 1;
			}
		} while (check !== 1);
	}
	return pick;
}
