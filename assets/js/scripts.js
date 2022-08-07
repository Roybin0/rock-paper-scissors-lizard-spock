/**
 * Adding event listeners
 */

 document.addEventListener("DOMContentLoaded", function() {

    buttonLightsOff();

    let buttons = document.getElementsByTagName('button'); 

    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'start') {
                startGame(); 
            } else if (this.getAttribute('data-type') === 'game-choice') {
                let userChoice = this.getAttribute('id');  
                computerAnswer(userChoice);
            } else if (this.getAttribute('data-type') === 'restart') {
                restartGame();
            }
        });
    };

    var tab = document.getElementsByClassName('tab-links');
    var i;

    for (i = 0; i < tab.length; i++) {
        tab[i].addEventListener('click', function() {
            this.classList.toggle('tab-active');

            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        });
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            startGame();
        }
    })

    document.addEventListener('keydown', function(event) {
        if (event.key === '1' ) {
            computerAnswer('rock');
        } else if (event.key === '2') {
            computerAnswer('paper'); 
        } else if (event.key === '3') {
            computerAnswer('scissors'); 
        } else if (event.key === '4') {
            computerAnswer('lizard'); 
        } else if (event.key === '5') {
            computerAnswer('spock'); 
        }
    });

});

/**
 * Sleep function for countdown
 */

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

/**
 * Prevent buttons flashing on load
 */

function buttonLightsOff() {

    document.getElementById('rock').style.animation = 'none';
    document.getElementById('paper').style.animation = 'none';
    document.getElementById('scissors').style.animation = 'none';
    document.getElementById('lizard').style.animation = 'none';
    document.getElementById('spock').style.animation = 'none';
    document.getElementById('computer-rock').style.animation = 'none';
    document.getElementById('computer-paper').style.animation = 'none';
    document.getElementById('computer-scissors').style.animation = 'none';
    document.getElementById('computer-lizard').style.animation = 'none';
    document.getElementById('computer-spock').style.animation = 'none';

}

/**
 * Light up the game buttons during countdown
 */

function buttonLightsOn() { 

    document.getElementById('rock').style.animation = 'blinkRock 1s infinite';
    document.getElementById('paper').style.animation = 'blinkPaper 1s infinite';
    document.getElementById('scissors').style.animation = 'blinkScissors 1s infinite';
    document.getElementById('lizard').style.animation = 'blinkLizard 1s infinite';
    document.getElementById('spock').style.animation = 'blinkSpock 1s infinite';
    document.getElementById('computer-rock').style.animation = 'blinkRock 1s infinite';
    document.getElementById('computer-paper').style.animation = 'blinkPaper 1s infinite';
    document.getElementById('computer-scissors').style.animation = 'blinkScissors 1s infinite';
    document.getElementById('computer-lizard').style.animation = 'blinkLizard 1s infinite';
    document.getElementById('computer-spock').style.animation = 'blinkSpock 1s infinite';

};

/**
 * Function to start the game - initiates a countdown, reduces
 * the size of the main image and removes the "start" button
 */

function startGame() {

    // Ask user to enter their name and update name elements 
    let name = prompt("Enter your name:"); 
    
    if (name != null) {
        document.getElementById('user-name-score').innerHTML = name + "'s";
        document.getElementById('user-name-results').innerHTML = name;
    } else {
        document.getElementById('user-name-score').innerHTML = 'Your';
        document.getElementById('user-name-results').innerHTML = 'You';
    }

    // Turn on flashing game buttons 
    buttonLightsOn();

    // Remove the start button and initial game text
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('game-text').innerHTML = '';

    // Delay one second each time and display countdown
    sleep(100)
        .then(() => document.getElementById('game-text').style.fontSize = '300%')
        .then(() => document.getElementById('game-text').style.fontWeight = '300')
        .then(() => document.getElementById('game-text').innerHTML = '3s')
        .then(() => sleep(1000))
        .then(() => document.getElementById('game-text').innerHTML = '2s')
        .then(() => sleep(1000))
        .then(() => document.getElementById('game-text').innerHTML = '1s')
        .then(() => sleep(1000))
        .then(() => document.getElementById('game-text').innerHTML = 'Make your choice!')
        .then(() => buttonLightsOff())
    
    // Activate buttons 
    const buttons = [
        document.getElementById('rock'), 
        document.getElementById('paper'),
        document.getElementById('scissors'),
        document.getElementById('lizard'),
        document.getElementById('spock'),
        document.getElementById('computer-rock'),
        document.getElementById('computer-paper'),
        document.getElementById('computer-scissors'),
        document.getElementById('computer-lizard'),
        document.getElementById('computer-spock'),
    ]

    for (i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false; 
    }

};

/**
 * Use local storage to display results of last 
 * three rounds 
 */

function previousResults(userChoice, computerChoice) {

    let table = document.getElementById('last-result'); 
    let rowCount = table.rows.length;
    let row = table.insertRow(rowCount); 



    let roundNumber = row.insertCell(0); 
    let round = document.createElement('tr')
    round.innerHTML = 'Round' + rowCount; 
    roundNumber.appendChild(round); 

    let userResults = row.insertCell(1); 
    userResults.innerHTML = userChoice; 

    let computerResults = row.insertCell(2); 
    computerResults.innerHTML = computerChoice;     

};


/**
 * Function to display the user and computer choices, 
 * and declare the winner 
 */

function displayWinner(userChoice, computerChoice) {  

    // Reduce size of main image 
    document.getElementById('main-image').style.width = '40%';

    // Create arrays of buttons, results and how user or computer has been beaten 
    const buttonWin = [
        `<button class="game-icon rock"><i class="fa-regular fa-hand-back-fist fa-beat" style="--fa-beat-scale: 2.0"></i>Rock</button>`,
        `<button class="game-icon paper-result"><i class="fa-regular fa-hand fa-beat" style="--fa-beat-scale: 2.0"></i>Paper</button>`,
        `<button class="game-icon scissors"><i class="fa-regular fa-hand-scissors fa-beat" style="--fa-beat-scale: 2.0"></i>Scissors</button>`,
        `<button class="game-icon spock"><i class="fa-regular fa-hand-spock fa-beat" style="--fa-beat-scale: 2.0"></i>Spock</button>`,
        `<button class="game-icon lizard"><i class="fa-regular fa-hand-lizard fa-beat" style="--fa-beat-scale: 2.0"></i>Lizard</button>`,
    ]

    const buttonLose = [
        `<button class="game-icon rock"><i class="fa-regular fa-hand-back-fist"></i>Rock</button>`,
        `<button class="game-icon paper-result"><i class="fa-regular fa-hand"></i>Paper</button>`,
        `<button class="game-icon scissors"><i class="fa-regular fa-hand-scissors"></i>Scissors</button>`,
        `<button class="game-icon spock"><i class="fa-regular fa-hand-spock"></i>Spock</button>`,
        `<button class="game-icon lizard"><i class="fa-regular fa-hand-lizard"></i>Lizard</button>`,
    ]

    const howText = [
        'matches',
        'cuts',
        'crushes',
        'poisons', 
        'smashes', 
        'decapitates', 
        'eats', 
        'disproves', 
        'vaporizes',
        'covers',
    ]

    const results = [
        "It's a draw!",
        "Congratulations, you win!", 
        "Computer wins, try again!",  
    ]

    // Fetch elements from index.html 
    let userResultButton = document.getElementById('user-result-button'); 
    let computerResultButton = document.getElementById('computer-result-button'); 
    let winnerResult = document.getElementById('winner-result-text'); 
    let loserResult = document.getElementById('loser-result-text');  
    let how = document.getElementById('how'); 
    let resultText = document.getElementById('result-text'); 

    //Remove game text and add results text 
    document.getElementById('display-results').style.display = 'flex';
    document.getElementById('game-text').style.display = 'none'; 

    //Capitalise the user and computer choices 
    winnerResult.style.textTransform = 'capitalize';
    loserResult.style.textTransform = 'capitalize';

    //Compare choices and declare winner 
    if (userChoice === 'rock' && computerChoice === 'rock')  {
        userResultButton.innerHTML = buttonWin[0]; 
        computerResultButton.innerHTML = buttonWin[0]; 
        winnerResult.innerHTML = userChoice;    
        loserResult.innerHTML = computerChoice;        
        how.innerHTML = howText[0];
        resultText.innerHTML = results[0];
        incrementUserScore();
        incrementComputerScore();
    } else if (userChoice === 'rock' && computerChoice === 'paper')  {
        userResultButton.innerHTML = buttonLose[0]; 
        computerResultButton.innerHTML = buttonWin[1]; 
        winnerResult.innerHTML = computerChoice; 
        loserResult.innerHTML = userChoice; 
        how.innerHTML = howText[9];
        resultText.innerHTML = results[2];
        incrementComputerScore();
    } else if (userChoice === 'rock' && computerChoice === 'scissors')  {
        userResultButton.innerHTML = buttonWin[0]; 
        computerResultButton.innerHTML = buttonLose[2]; 
        winnerResult.innerHTML = userChoice; 
        loserResult.innerHTML = computerChoice; 
        how.innerHTML = howText[2];
        resultText.innerHTML = results[1];
        incrementUserScore();
    } else if (userChoice === 'rock' && computerChoice === 'lizard')  {
        userResultButton.innerHTML = buttonWin[0]; 
        computerResultButton.innerHTML = buttonLose[4]; 
        winnerResult.innerHTML = userChoice; 
        loserResult.innerHTML = computerChoice; 
        how.innerHTML= howText[2];
        resultText.innerHTML = results[1];
        incrementUserScore();
    } else if (userChoice === 'rock' && computerChoice === 'spock')  {
        userResultButton.innerHTML = buttonLose[0]; 
        computerResultButton.innerHTML = buttonWin[3]; 
        winnerResult.innerHTML = computerChoice; 
        loserResult.innerHTML = userChoice; 
        how.innerHTML = howText[8];
        resultText.innerHTML = results[2];
        incrementComputerScore();
    } else if (userChoice === 'paper' && computerChoice === 'paper')  {
        userResultButton.innerHTML = buttonWin[1]; 
        computerResultButton.innerHTML = buttonWin[1]; 
        winnerResult.innerHTML = userChoice; 
        loserResult.innerHTML = computerChoice; 
        how.innerHTML = howText[0];
        resultText.innerHTML = results[0];
        incrementUserScore();
        incrementComputerScore();
    } else if (userChoice === 'paper' && computerChoice === 'rock')  {
        userResultButton.innerHTML = buttonWin[1]; 
        computerResultButton.innerHTML = buttonLose[0]; 
        winnerResult.innerHTML = userChoice; 
        loserResult.innerHTML = computerChoice; 
        how.innerHTML = howText[9];
        resultText.innerHTML = results[1];
        incrementUserScore();
    } else if (userChoice === 'paper' && computerChoice === 'scissors')  {
        userResultButton.innerHTML = buttonLose[1]; 
        computerResultButton.innerHTML = buttonWin[2]; 
        winnerResult.innerHTML = computerChoice; 
        loserResult.innerHTML = userChoice; 
        how.innerHTML = howText[1];
        resultText.innerHTML = results[2];
        incrementComputerScore();
    } else if (userChoice === 'paper' && computerChoice === 'lizard')  {
        userResultButton.innerHTML = buttonLose[1]; 
        computerResultButton.innerHTML = buttonWin[4]; 
        winnerResult.innerHTML = computerChoice; 
        loserResult.innerHTML = userChoice; 
        how.innerHTML= howText[6];
        resultText.innerHTML = results[2];
        incrementComputerScore();
    } else if (userChoice === 'paper' && computerChoice === 'spock')  {
        userResultButton.innerHTML = buttonWin[1]; 
        computerResultButton.innerHTML = buttonLose[3]; 
        winnerResult.innerHTML = userChoice; 
        loserResult.innerHTML = computerChoice; 
        how.innerHTML = howText[7];
        resultText.innerHTML = results[1];
        incrementUserScore();
    } else if (userChoice === 'scissors' && computerChoice === 'paper')  {
        userResultButton.innerHTML = buttonWin[2]; 
        computerResultButton.innerHTML = buttonLose[1]; 
        winnerResult.innerHTML = userChoice; 
        loserResult.innerHTML = computerChoice; 
        how.innerHTML = howText[1];
        resultText.innerHTML = results[1];
        incrementUserScore();
    } else if (userChoice === 'scissors' && computerChoice === 'rock')  {
        userResultButton.innerHTML = buttonLose[2]; 
        computerResultButton.innerHTML = buttonWin[0]; 
        winnerResult.innerHTML = computerChoice; 
        loserResult.innerHTML = userChoice; 
        how.innerHTML = howText[2];
        resultText.innerHTML = results[2];
        incrementComputerScore();
    } else if (userChoice === 'scissors' && computerChoice === 'scissors')  {
        userResultButton.innerHTML = buttonWin[2]; 
        computerResultButton.innerHTML = buttonWin[2]; 
        winnerResult.innerHTML = computerChoice; 
        loserResult.innerHTML = userChoice; 
        how.innerHTML = howText[0];
        resultText.innerHTML = results[0];
        incrementUserScore();
        incrementComputerScore();
    } else if (userChoice === 'scissors' && computerChoice === 'lizard')  {
        userResultButton.innerHTML = buttonWin[2]; 
        computerResultButton.innerHTML = buttonLose[4]; 
        winnerResult.innerHTML = userChoice; 
        loserResult.innerHTML = computerChoice; 
        how.innerHTML= howText[5];
        resultText.innerHTML = results[1];
        incrementUserScore();
    } else if (userChoice === 'scissors' && computerChoice === 'spock')  {
        userResultButton.innerHTML = buttonLose[2]; 
        computerResultButton.innerHTML = buttonWin[3]; 
        winnerResult.innerHTML = computerChoice; 
        loserResult.innerHTML = userChoice; 
        how.innerHTML = howText[4];
        resultText.innerHTML = results[2];
        incrementComputerScore();
    } else if (userChoice === 'spock' && computerChoice === 'paper')  {
        userResultButton.innerHTML = buttonLose[3]; 
        computerResultButton.innerHTML = buttonWin[1]; 
        winnerResult.innerHTML = computerChoice; 
        loserResult.innerHTML = userChoice; 
        how.innerHTML = howText[7];
        resultText.innerHTML = results[2];
        incrementComputerScore();
    } else if (userChoice === 'spock' && computerChoice === 'rock')  {
        userResultButton.innerHTML = buttonWin[2]; 
        computerResultButton.innerHTML = buttonLose[0]; 
        winnerResult.innerHTML = userChoice; 
        loserResult.innerHTML = computerChoice; 
        how.innerHTML = howText[8];
        resultText.innerHTML = results[1];
        incrementUserScore();
    } else if (userChoice === 'spock' && computerChoice === 'scissors')  {
        userResultButton.innerHTML = buttonWin[3]; 
        computerResultButton.innerHTML = buttonLose[2]; 
        winnerResult.innerHTML = userChoice; 
        loserResult.innerHTML = computerChoice; 
        how.innerHTML = howText[4];
        resultText.innerHTML = results[1];
        incrementUserScore();
    } else if (userChoice === 'spock' && computerChoice === 'lizard')  {
        userResultButton.innerHTML = buttonLose[3]; 
        computerResultButton.innerHTML = buttonWin[4]; 
        winnerResult.innerHTML = computerChoice; 
        loserResult.innerHTML = userChoice; 
        how.innerHTML= howText[3];
        resultText.innerHTML = results[2];
        incrementComputerScore();
    } else if (userChoice === 'spock' && computerChoice === 'spock')  {
        userResultButton.innerHTML = buttonWin[3]; 
        computerResultButton.innerHTML = buttonWin[3]; 
        winnerResult.innerHTML = computerChoice; 
        loserResult.innerHTML = userChoice; 
        how.innerHTML = howText[0];
        resultText.innerHTML = results[0];
        incrementUserScore();
        incrementComputerScore();
    } else if (userChoice === 'lizard' && computerChoice === 'paper')  {
        userResultButton.innerHTML = buttonWin[4]; 
        computerResultButton.innerHTML = buttonLose[1]; 
        winnerResult.innerHTML = userChoice; 
        loserResult.innerHTML = computerChoice; 
        how.innerHTML = howText[6];
        resultText.innerHTML = results[1];
        incrementUserScore();
    } else if (userChoice === 'lizard' && computerChoice === 'rock')  {
        userResultButton.innerHTML = buttonLose[4]; 
        computerResultButton.innerHTML = buttonWin[0]; 
        winnerResult.innerHTML = computerChoice; 
        loserResult.innerHTML = userChoice; 
        how.innerHTML = howText[2];
        resultText.innerHTML = results[2];
        incrementComputerScore();
    } else if (userChoice === 'lizard' && computerChoice === 'scissors')  {
        userResultButton.innerHTML = buttonLose[4]; 
        computerResultButton.innerHTML = buttonWin[2]; 
        winnerResult.innerHTML = computerChoice; 
        loserResult.innerHTML = userChoice; 
        how.innerHTML = howText[5];
        resultText.innerHTML = results[2];
        incrementComputerScore();
    } else if (userChoice === 'lizard' && computerChoice === 'lizard')  {
        userResultButton.innerHTML = buttonWin[4]; 
        computerResultButton.innerHTML = buttonWin[4]; 
        winnerResult.innerHTML = computerChoice; 
        loserResult.innerHTML = userChoice; 
        how.innerHTML= howText[0];
        resultText.innerHTML = results[0];
        incrementComputerScore();
        incrementUserScore();
    } else if (userChoice === 'lizard' && computerChoice === 'spock')  {
        userResultButton.innerHTML = buttonWin[4]; 
        computerResultButton.innerHTML = buttonLose[3]; 
        winnerResult.innerHTML = userChoice; 
        loserResult.innerHTML = computerChoice; 
        how.innerHTML = howText[3];
        resultText.innerHTML = results[1];
        incrementUserScore();
        
    }

    // Disable game buttons 
    const buttons = [
        document.getElementById('rock'), 
        document.getElementById('paper'),
        document.getElementById('scissors'),
        document.getElementById('lizard'),
        document.getElementById('spock'),
        document.getElementById('computer-rock'),
        document.getElementById('computer-paper'),
        document.getElementById('computer-scissors'),
        document.getElementById('computer-lizard'),
        document.getElementById('computer-spock'),
    ]

    for (i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true; 
    }

    // Display play again button 
    document.getElementById('play-again').style.display = 'flex';

    // Save results to local storage 
    localStorage.setItem('user', JSON.stringify(userChoice));
    localStorage.setItem('computer', JSON.stringify(computerChoice));

    previousResults(localStorage.getItem('user'), localStorage.getItem('computer'));

};

/**
 * Function to create the computers choice which is passed
 * to the Display Winner function
 */

function computerAnswer(userChoice) {

    // Get random computer choice
    let choices = document.getElementsByClassName('computer-choices'); 
    var computerChoice = choices[Math.floor(Math.random() * choices.length)].getAttribute('data-type');

    // Highlight user button choice 
    if (userChoice === 'rock') {
        document.getElementById('rock').style.backgroundColor = '#E480FF';
        document.getElementById('rock').style.borderColor = '#F6D6FF';
    } else if (userChoice === 'paper') {
        document.getElementById('paper').style.backgroundColor = '#FEDD5F'
        document.getElementById('paper').style.borderColor = '#FEF6D4'
    } else if (userChoice === 'scissors') {
        document.getElementById('scissors').style.backgroundColor = '#FF8080'
        document.getElementById('scissors').style.borderColor = '#FFD6D6'
    } else if (userChoice === 'lizard') {
        document.getElementById('lizard').style.backgroundColor = '#89DC8B'
        document.getElementById('lizard').style.borderColor = '#D8F3D8'
    } else if (userChoice === 'spock') {
        document.getElementById('spock').style.backgroundColor = '#81B2FA'
        document.getElementById('spock').style.borderColor = '#D5E5FF'
    } else {
        alert(`Unknown game choice: ${userChoice}`);
        throw `Unknown game choice: ${userChoice}. Aborting!`
    };

    // Highlight computer button choice 
    if (computerChoice === 'rock') {
        document.getElementById('computer-rock').style.backgroundColor = '#E480FF';
        document.getElementById('computer-rock').style.borderColor = '#F6D6FF';
    } else if (computerChoice === 'scissors') {
        document.getElementById('computer-scissors').style.backgroundColor = '#FF8080';
        document.getElementById('computer-scissors').style.borderColor = '#FFD6D6';
    } else if (computerChoice === 'paper') {
        document.getElementById('computer-paper').style.backgroundColor = '#FEDD5F';
        document.getElementById('computer-paper').style.borderColor = '#FEF6D4';
    } else if (computerChoice === 'spock') {
        document.getElementById('computer-spock').style.backgroundColor = '#89DC8B';
        document.getElementById('computer-spock').style.borderColor = '#D5E5FF';
    } else if (computerChoice === 'lizard') {
        document.getElementById('computer-lizard').style.backgroundColor = '#81B2FA';
        document.getElementById('computer-lizard').style.borderColor = '#D8F3D8';
    };

    // Pass results to displayWinner function 
    displayWinner(userChoice, computerChoice);

}

/**
 * Function to play the game again 
 */

function restartGame() {

    // Remove results display and set background color of buttons to original 
    document.getElementById('display-results').style.display = 'none';
    document.getElementById('game-text').style.display = 'flex'; 
    document.getElementById('play-again').style.display = 'none';

    document.getElementById('rock').style.backgroundColor = '#F6D6FF'
    document.getElementById('rock').style.borderColor = '#E999FF'

    document.getElementById('computer-rock').style.backgroundColor = '#F6D6FF'
    document.getElementById('computer-rock').style.borderColor = '#E999FF'

    document.getElementById('paper').style.backgroundColor = '#FEF6D4'
    document.getElementById('paper').style.borderColor = '#FFE679'

    document.getElementById('computer-paper').style.backgroundColor = '#FEF6D4'
    document.getElementById('computer-paper').style.borderColor = '#FFE679'

    document.getElementById('scissors').style.backgroundColor = '#FFD6D6'
    document.getElementById('scissors').style.borderColor = '#FF8D8D'

    document.getElementById('computer-scissors').style.backgroundColor = '#FFD6D6'
    document.getElementById('computer-scissors').style.borderColor = '#FF8D8D'

    document.getElementById('lizard').style.backgroundColor = '#D8F3D8'
    document.getElementById('lizard').style.borderColor = '#8CF68C'

    document.getElementById('computer-lizard').style.backgroundColor = '#D8F3D8'
    document.getElementById('computer-lizard').style.borderColor = '#8CF68C'

    document.getElementById('spock').style.backgroundColor = '#D5E5FF'
    document.getElementById('spock').style.borderColor = '#84B3FF'

    document.getElementById('computer-spock').style.backgroundColor = '#D5E5FF'
    document.getElementById('computer-spock').style.borderColor = '#84B3FF'

    // Start game again 
    startGame(); 

}

/**
 * Function to increment the users score
 */

function incrementUserScore() {

    let oldScore = parseInt(document.getElementById('your-score').innerText); 
    document.getElementById('your-score').innerText = ++oldScore;
    
}

/**
 * Function to increment the computers score
 */

function incrementComputerScore() {

    let oldScore = parseInt(document.getElementById('computer-score').innerText); 
    document.getElementById('computer-score').innerText = ++oldScore;

}