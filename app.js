// build rock paper scissors game

// variables to keep track of score
let playerScore = 0;
let computerScore = 0;

// randomly returns rock, paper or scissors as the computer's pick
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

// get input from user, if input is correct return input, else loop request until input is correct
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

// play a round, find and return a winner
function playRound(playerSelection, computerSelection) {
	let message = '';

	// helper functions for player or computer wins
	function playerWin(announceWinner) {
		message = announceWinner;
		playerScore += 1;
		return message;
	}

	function computerWin(announceWinner) {
		message = announceWinner;
		computerScore += 1;
		return message;
	}

	if (playerSelection === computerSelection) {
		message = "It's a tie. Go again";
		return message;
	} else if (playerSelection === 'rock' && computerSelection === 'paper') {
		computerWin('You lose. Paper beats rock');
	} else if (playerSelection === 'rock' && computerSelection === 'scissors') {
		playerWin('You win. Rock beats scissors');
	} else if (playerSelection === 'paper' && computerSelection === 'rock') {
		playerWin('You win. Paper beats rock');
	} else if (playerSelection === 'paper' && computerSelection === 'scissors') {
		computerWin('You lose. Scissors beats paper');
	} else if (playerSelection === 'scissors' && computerSelection === 'rock') {
		computerWin('You lose. Rock beats scissors');
	} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
		playerWin('You win. Scissors beats paper');
	} else {
		message = 'Oops. Something went wrong';
		return message;
	}

	console.log(
		`${message}. Score: You ${playerScore}-${computerScore} The computer.`
	);
}

// plays a game of best of five and prints final score
function game() {
	let counter = 0;
	do {
		console.log(playRound(userPlay(), computerPlay()));
		if (playerScore === 3) {
			console.log(
				`You've won the game! Final Score: You ${playerScore}-${computerScore} The computer.`
			);
			counter = 1;
		} else if (computerScore === 3) {
			console.log(
				`You've lost the game. Final Score: You ${playerScore}-${computerScore} The computer.`
			);
			counter = 1;
		}
	} while (counter < 1);
}

game();
