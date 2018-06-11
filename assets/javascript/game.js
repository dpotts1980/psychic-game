//Letter choices available
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Setting all to zero
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];



    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
		console.log(event);
        // Determines which key was pressed.
        var userGuess = event.key;
  
        // Randomly chooses a choice from the options array. This is the Computer's guess.
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        //this is where the user chooses which letter//
        var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

        //This logic determines the outcome of the game//
        
			if (options.indexOf(userGuess) > -1) {

				if (userGuess === computerGuess) {
					wins++;
					guessesLeft = 9;
					guessedLetters = [];
				}

				if (userGuess != computerGuess) {
					guessesLeft --;
					guessedLetters.push(userGuess);
				}

				if (guessesLeft === 0) {

				guessesLeft = 9;
				losses ++;
				guessChoices = [];

				
            }
            
			var html = 
			"<h1> The Psychic Game </h1>" +
			"<p>Guess what letter I'm thinking of!</p>" +
			"<p>Wins: " + wins + "</p>" +
			"<p>Losses: " + losses + "</p>" +
			"<p>Guesses Left: " + guessesLeft + "</p>" +
			"<p>Your Guesses so far: " + guessedLetters.join(", ") + "</p>";

			document.querySelector("#game").innerHTML = html;

			
			}
		};
