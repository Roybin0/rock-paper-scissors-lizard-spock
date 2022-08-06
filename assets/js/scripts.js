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
            } 
        })
    }

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

    document.getElementById('start-btn').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            startGame();
        }
    })

    document.getElementById('rock').addEventListener('keydown', function(event) {
        if (event.key === '1' ) {
            let userAnswer = this.getAttribute('id');
            checkAnswer(userAnswer);
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

    let userResultButton = document.getElementById('user-result-button'); 
    let computerResultButton = document.getElementById('computer-result-button'); 
    let winnerResult = document.getElementById('winner-result-text'); 
    let loserResult = document.getElementById('loser-result-text');  
    let how = document.getElementById('how'); 
    let resultText = document.getElementById('result-text'); 

    document.getElementById('display-results').style.display = 'flex';
    document.getElementById('start-btn').innerHTML = 'Play again';
    document.getElementById('game-text').style.display = 'none'; 

    if (userChoice === 'rock' && computerChoice === 'rock')  {
        userResultButton.innerHTML = buttonWin[0]; 
        computerResultButton.innerHTML = buttonWin[0]; 
        winnerResult.innerHTML = userChoice; 
        winnerResult.style.textTransform = 'capitalize';
        loserResult.innerHTML = computerChoice; 
        loserResult.style.textTransform = 'capitalize';
        how.innerHTML = 'matches';
        resultText.innerHTML = "It's a draw!"
    } else if (userChoice === 'rock' && computerChoice === 'paper')  {
        userResultButton.innerHTML = buttonLose[0]; 
        computerResultButton.innerHTML = buttonWin[1]; 
        winnerResult.innerHTML = computerChoice; 
        winnerResult.style.textTransform = 'capitalize';
        loserResult.innerHTML = userChoice; 
        loserResult.style.textTransform = 'capitalize';
        how.innerHTML = "covers";
        resultText.innerHTML = 'Computer wins! Try again!'
    } else if (userChoice === 'rock' && computerChoice === 'scissors')  {
        userResultButton.innerHTML = buttonWin[0]; 
        computerResultButton.innerHTML = buttonLose[2]; 
        winnerResult.innerHTML = userChoice; 
        winnerResult.style.textTransform = 'capitalize';
        loserResult.innerHTML = computerChoice; 
        loserResult.style.textTransform = 'capitalize';
        how.innerHTML = "crushes";
        resultText.innerHTML = 'Congratulations, you win!'
    } else if (userChoice === 'rock' && computerChoice === 'lizard')  {
        userResultButton.innerHTML = buttonWin[0]; 
        computerResultButton.innerHTML = buttonLose[4]; 
        winnerResult.innerHTML = userChoice; 
        winnerResult.style.textTransform = 'capitalize';
        loserResult.innerHTML = computerChoice; 
        loserResult.style.textTransform = 'capitalize';
        how.innerHTML= "crushes";
        resultText.innerHTML = 'Congratulations, you win!'
    } else if (userChoice === 'rock' && computerChoice === 'spock')  {
        userResultButton.innerHTML = buttonLose[0]; 
        computerResultButton.innerHTML = buttonWin[3]; 
        winnerResult.innerHTML = computerChoice; 
        winnerResult.style.textTransform = 'capitalize';
        loserResult.innerHTML = userChoice; 
        loserResult.style.textTransform = 'capitalize';
        how.innerHTML = "vaporizes";
        resultText.innerHTML = 'Computer wins! Try again!'
    }
};

function checkAnswer(userChoice) {

    let choices = document.getElementsByClassName('computer-choices'); 
    var computerChoice = choices[Math.floor(Math.random() * choices.length)].getAttribute('data-type');

    if (userChoice === 'rock' && computerChoice === 'rock') {
        document.getElementById('rock').style.backgroundColor = '#E999FF';
        document.getElementById('rock').style.borderColor = '#F6D6FF'; 
        document.getElementById('computer-rock').style.backgroundColor = '#E999FF';
        document.getElementById('computer-rock').style.borderColor = '#F6D6FF'; 
        displayWinner(userChoice, computerChoice);     
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        document.getElementById('rock').style.backgroundColor = '#E999FF'
        document.getElementById('rock').style.borderColor = '#F6D6FF'
        document.getElementById('computer-scissors').style.backgroundColor = '#FF8D8D';
        document.getElementById('computer-scissors').style.borderColor = '#FFD6D6'; 
        displayWinner(userChoice, computerChoice);
    } else if (userChoice === 'rock' && computerChoice === 'paper') {
        document.getElementById('rock').style.backgroundColor = '#E999FF'
        document.getElementById('rock').style.borderColor = '#F6D6FF'
        document.getElementById('computer-paper').style.backgroundColor = '#FFE679';
        document.getElementById('computer-paper').style.borderColor = '#FEF6D4'; 
        displayWinner(userChoice, computerChoice);
    } else if (userChoice === 'rock' && computerChoice === 'spock') {
        document.getElementById('rock').style.backgroundColor = '#E999FF'
        document.getElementById('rock').style.borderColor = '#F6D6FF'
        document.getElementById('computer-spock').style.backgroundColor = '#84B3FF';
        document.getElementById('computer-spock').style.borderColor = '#D5E5FF'; 
        displayWinner(userChoice, computerChoice);
    } else if (userChoice === 'rock' && computerChoice === 'lizard') {
        document.getElementById('rock').style.backgroundColor = '#E999FF'
        document.getElementById('rock').style.borderColor = '#F6D6FF'
        document.getElementById('computer-lizard').style.backgroundColor = '#8CF68C';
        document.getElementById('computer-lizard').style.borderColor = '#D8F3D8'; 
        displayWinner(userChoice, computerChoice);
    } else {
        alert(`Unknown game choice: ${userChoice}`);
        throw `Unknown game choice: ${userChoice}. Aborting!`
    };

    localStorage.setItem(userChoice, computerChoice);



}

function incrementUserScore() {
    
}

function incrementComputerScore() {

}