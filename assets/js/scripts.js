/**
 * Adding event listeners
 */

 document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName('button'); 

    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'start') {
                startGame(); 
            } else if (this.getAttribute('data-type') === 'game-choice') {
                let userChoice = this.getAttribute('id');  
                checkAnswer(userChoice);
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
            checkAnswer('rock');
        } else if (event.key === '2') {
            checkAnswer('paper'); 
        }
    })

})

/**
 * Sleep function for countdown
 */

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

/**
 * Light up the game buttons during countdown
 */

function buttonLightsOn() { 

    let frameCount = 10; 

    let brightColors = [
        '#E999FF', 
        '#FFE679',
        '#FF8D8D', 
        '#8CF68C',
        '#84B3FF'
    ];

    let lightColors = [
        '#F6D6FF',
        '#FEF6D4',
        '#FFD6D6',
        '#D8F3D8',
        '#D5E5FF',
        '#E9D4FC'
    ];

}

function startGame() {

    // Remove the start button and initial game text
    document.getElementById('main-image').style.width = '40%';
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('game-text').innerHTML = '';

    //Delay one second each time and display countdown
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
    
};

function displayWinner(userChoice, computerChoice) {  

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

    let userResultButton = document.getElementById('user-result-button'); 
    let computerResultButton = document.getElementById('computer-result-button'); 
    let winnerResult = document.getElementById('winner-result-text'); 
    let loserResult = document.getElementById('loser-result-text');  
    let how = document.getElementById('how'); 
    let resultText = document.getElementById('result-text'); 

    document.getElementById('display-results').style.display = 'flex';
    document.getElementById('game-text').style.display = 'none'; 

    winnerResult.style.textTransform = 'capitalize';
    loserResult.style.textTransform = 'capitalize';

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

    document.getElementById('play-again').style.display = 'flex';

};

function checkAnswer(userChoice) {

    let choices = document.getElementsByClassName('computer-choices'); 
    var computerChoice = choices[Math.floor(Math.random() * choices.length)].getAttribute('data-type');

    if (userChoice === 'rock') {
        document.getElementById('rock').style.backgroundColor = '#E999FF';
        document.getElementById('rock').style.borderColor = '#F6D6FF';
    } else if (userChoice === 'paper') {
        document.getElementById('paper').style.backgroundColor = '#FFE679'
        document.getElementById('paper').style.borderColor = '#FEF6D4'
    } else if (userChoice === 'scissors') {
        document.getElementById('scissors').style.backgroundColor = '#FF8D8D'
        document.getElementById('scissors').style.borderColor = '#FFD6D6'
    } else if (userChoice === 'lizard') {
        document.getElementById('lizard').style.backgroundColor = '#8CF68C'
        document.getElementById('lizard').style.borderColor = '#D8F3D8'
    } else if (userChoice === 'spock') {
        document.getElementById('spock').style.backgroundColor = '#84B3FF'
        document.getElementById('spock').style.borderColor = '#D5E5FF'
    } else {
        alert(`Unknown game choice: ${userChoice}`);
        throw `Unknown game choice: ${userChoice}. Aborting!`
    };

    if (computerChoice === 'rock') {
        document.getElementById('computer-rock').style.backgroundColor = '#E999FF';
        document.getElementById('computer-rock').style.borderColor = '#F6D6FF';
    } else if (computerChoice === 'scissors') {
        document.getElementById('computer-scissors').style.backgroundColor = '#FF8D8D';
        document.getElementById('computer-scissors').style.borderColor = '#FFD6D6';
    } else if (computerChoice === 'paper') {
        document.getElementById('computer-paper').style.backgroundColor = '#FFE679';
        document.getElementById('computer-paper').style.borderColor = '#FEF6D4';
    } else if (computerChoice === 'spock') {
        document.getElementById('computer-spock').style.backgroundColor = '#84B3FF';
        document.getElementById('computer-spock').style.borderColor = '#D5E5FF';
    } else if (computerChoice === 'lizard') {
        document.getElementById('computer-lizard').style.backgroundColor = '#8CF68C';
        document.getElementById('computer-lizard').style.borderColor = '#D8F3D8';
    };

    localStorage.setItem(userChoice, computerChoice);

    displayWinner(userChoice, computerChoice);

}

function restartGame() {

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

    startGame(); 

}

function incrementUserScore() {

    let oldScore = parseInt(document.getElementById('your-score').innerText); 
    document.getElementById('your-score').innerText = ++oldScore;
    
}

function incrementComputerScore() {

    let oldScore = parseInt(document.getElementById('computer-score').innerText); 
    document.getElementById('computer-score').innerText = ++oldScore;

}