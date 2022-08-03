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
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('game-text').innerHTML = '';

    //Delay one second each time and display countdown
    sleep(800)
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

function computerChoice() {  
    
}

function checkAnswer(userChoice) {

    let choices = document.getElementsByClassName('computer-choices'); 
    var computerChoice = choices[Math.floor(Math.random() * choices.length)].getAttribute('data-type');

    console.log(computerChoice);

    if (userChoice === 'rock' && computerChoice === 'rock') {
         alert("It's a draw!");       
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        alert('You win!')
    } else if (userChoice === 'rock' && computerChoice === 'paper') {
        alert('Computer wins!')
    } else if (userChoice === 'rock' && computerChoice === 'spock') {
        alert('Computer wins!')
    } else if (userChoice === 'rock' && computerChoice === 'lizard') {
        alert('You win!')
    }

    

}

function incrementUserScore() {
    
}

function incrementComputerScore() {

}

function displayWinner() {

}