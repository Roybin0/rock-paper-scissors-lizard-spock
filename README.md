# Rock, Paper, Scissors, Lizard, Spock! 

## Introduction

Welcome to Rock, Paper, Scissors, Lizard, Spock! 

This website has been designed with fun in mind. A working replication of the Rock, Paper, Scissors, Lizard, Spock game, created by Sam Kass and Karen Brylain 1998 ([source](http://www.samkass.com/theories/RPSSL.html)). The website is contained on a single page and uses Javascript to allow the user to choose a button for rock, paper, scissors, lizard or spock and play against the computer.

![](https://roybin0.github.io/rock-paper-scissors-lizard-spock/assets/images/am-i-responsive.png)

The link to the live website can be found here: [Rock, Paper, Scissors, Lizard, Spock!](https://roybin0.github.io/rock-paper-scissors-lizard-spock/index.html).

## Table of Contents

* [User Experience](#ux)
    * [User Stories](#user-stories)
    * [Strategy](#strategy)
    * [Scope](#scope)
    * [Structure](#structure)
    * [Skeleton](#skeleton)
    * [Surface](#surface)
* [Features](#features)
    * [Expanding Menu Links](#expanding-menu-links)
    * [Scores](#scores)
    * [User Name](#user-name)
    * [Countdown](#countdown)
    * [Previous Results](#previous-results)
    * [Footer](#footer)
* [Testing](#testing)
* [Errors and Bugs](#errors-and-bugs)
* [Future Features](#future-features)
* [Validator Testing](#validator-testing)
* [Lighthouse Report](#lighthouse-report)
* [Deployment](#deployment)
* [Credits](#credits)
    * [Media](#media)
    * [Reference Material](#reference-material)
    * [Other Code](#other-code)
    * [Acknowledgements](#acknowledgements)
   

## UX

## User Stories

As a <strong>User</strong> I want:

1. To navigate and understand a site quickly and easily
2. To see clear instructions structured well
3. To see a quick response after any website interaction 
4. To use any device without seeing an impact on experience

As a <strong>Site Owner</strong> I want:

1. To provide a fun, well structured website
2. To ensure the website is easy to understand 
3. To meet accessibility minimum standards on all devices

## Strategy

* Project Purpose
    * The purpose of this website is to provide a fun game for users. 
    * This website is designed for use by anyone looking for an interactive game against a computer. 
   
## Scope

* Website features
    * Responsive design for multiple screen sizes
    * Visually pleasing and clear structure
    * Quick response time to user input 
    
    <br>
   
* Content features
    * Buttons that are clickable and responsive 
    * Area to keep total score
    * Ability to see historical round results 
   
## Structure

* Clear layout with obvious and easy to find "Start" button
* Responsive design. 
* Colours and fonts are accessible for all users.
* The buttons are disabled until it's time for the user to make a choice. 
* The expandable menu links in the header contain instructions on how to play.
* There are two game areas - one for the user and one for the computer.
* The center section display each round results. 
* The Footer is clear and contains links to social media profiles.

## Skeleton

Figma was used to create wireframes of the intial website design. In building the website and after discussion with my mentor, I decided move the instructions into expandable sections to keep focus on the main game. 

### Landing page - Desktop

![](https://roybin0.github.io/rock-paper-scissors-lizard-spock/assets/images/figma-desktop.png)

### Landing page - Mobile 

![](https://roybin0.github.io/rock-paper-scissors-lizard-spock/assets/images/figma-mobile.png)

### Starting the game produces a countdown

![](https://roybin0.github.io/rock-paper-scissors-lizard-spock/assets/images/figma-start-game.png)

### The User must then make their choice

![](https://roybin0.github.io/rock-paper-scissors-lizard-spock/assets/images/figma-choice.png)

### Results are displayed on screen

![](https://roybin0.github.io/rock-paper-scissors-lizard-spock/assets/images/figma-result.png)

## Surface 

* Colour scheme was kept light with each option assigned to a different colour. The light colours allow for accessibility and future development of dark mode. 
* Two [Google Fonts](https://fonts.google.com/) were chosen - Varela Round (for headings) and Outfit (for paragraphs).

## Features

* The site is laid out over a single page.
* It contains a header with some expandable menu tabs and a footer. 
* The game can be repeatedly played without having to refresh the page.  

## Expanding Menu Links

Instructions to play the game, and the rules of the game can be found in expandable links in the header of the website. This keeps the focus on the main game and gives the User the option to read more if they wish. 

![](https://roybin0.github.io/rock-paper-scissors-lizard-spock/assets/images/expanding-links.png)

## Scores

A section for both User and computer scores is visible underneath the header. This keeps a total score of all games played until the window is refreshed. 

![](https://roybin0.github.io/rock-paper-scissors-lizard-spock/assets/images/scores.png)

## User Name

After clicking the "Start" button, the User is prompted to enter their name. This is shown in the score section, and in the previous results section. If no name is entered, the website will simply use "Your score" instead. 

![](https://roybin0.github.io/rock-paper-scissors-lizard-spock/assets/images/enter-name.png)

## Countdown

Once a name is entered, a 3 second countdown begins. This gives the user time to decide which button they would like to choose. 

![](https://roybin0.github.io/rock-paper-scissors-lizard-spock/assets/images/countdown.png)

## Previous Results

The User has an option to display their previous round results if they wish. This button is enabled once the User chooses to "Play again" to prevent information being repeated on screen. 

![](https://roybin0.github.io/rock-paper-scissors-lizard-spock/assets/images/previous-results.png)

## Footer

The footer contains a copyright section and links to social media profiles. 

![](https://roybin0.github.io/rock-paper-scissors-lizard-spock/assets/images/footer.png)


## Testing

### Desktop

Google Chrome, Mozilla Firefox & Safari; page loads successfully, game and buttons working as expected. Responsive behaviour looks good. 

### Tablet & Mobile 

Huawei P20 Pro, Galaxy A40, Galaxy Tab; page loads successfully, game and burrons working as expected. Mobile design in place. 

### Chrome Developer Tools 

Responsive behaviour tested thoroughly and looks good. Page and buttons working as expected with no errors. 

## Errors and Bugs

* Expanding tabs in header initially caused issues with site layout as it pushed the game buttons out of sync. This was resolved by moving the score sections into the main container. 
* The previous results table added the most recent round to the bottom of the table which was not always visible to the User. This was resolved by changing where the new rows were inserted. 

## Future Features 

* A dark mode option for users who prefer dark mode could be added in the future. 
* A video or gif showing a hand making the User's chosen option would be a nice additional feature. Would need to ensure this does not slow down loading or response times. 


## Validator Testing

### Wave Web Accessibility 

* Two errors were initially reported related to the buttons that appear in the results. The buttons were not names proeprly. This was resolved by adding a title attribute to the result buttons. Report can be viewed here:
    * [Wave Web - Rock, Paper, Scissors, Lizard, Spock!](https://wave.webaim.org/report#/https://roybin0.github.io/rock-paper-scissors-lizard-spock/index.html)

### HTML 

* HTML was tested using the WS Nu HTML Checker. No errors found. Reportcan be found here: 
    * [Nu HTML - Rock, Paper, Scissors, Lizard, Spock!](https://validator.w3.org/nu/?doc=https%3A%2F%2Froybin0.github.io%2Frock-paper-scissors-lizard-spock%2Findex.html)


### CSS 

* CSS was tested using the W3C CSS Validation Service. No errors found. Reports are available for each page:
    * [W3C CSS Validator - Rock, Paper, Scissors, Lizard, Spock!](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Froybin0.github.io%2Frock-paper-scissors-lizard-spock%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)  


## Lighthouse Report 

The Lighthouse report shows the following results: 

![](https://roybin0.github.io/rock-paper-scissors-lizard-spock/assets/images/lighthouse-report.png)

The lowest score is 90 for Performance. It is noted that some image elements do not have a fixed width and height. 

## Deployment 

My site was deployed via GitHub using the following steps:

    1. In the GitHub repository, navigate to the settings tab.
    2. Select the Pages link in the left side menu.
    3. Under Source, change drop-down menu to select the main branch.
    4. Click Save
    5. The page will automatically refresh and display a banner to indicate the successful deployment.

## Credits 

## Media 

* The main website image has been sourced from the [Big Bang Theory fandom site](https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock)
* Game button icons have been sourced from [Font Awesome](https://fontawesome.com/).

## Reference Material

* The rules of the game have been referenced from the creator, Sam Kass' website which can be viewed [here](http://www.samkass.com/theories/RPSSL.html).

## Other Code 

* A tutorial for the countdown from James Hibbard on sitepoint.com was used. Link to tutorial [here](https://www.sitepoint.com/delay-sleep-pause-wait/).
* Expanding menu links were adapted with the help of w3schools. Link to tutorial [here](https://www.w3schools.com/howto/howto_js_collapsible.asp).
* The shadowing of the game buttons was adapted from Anh on codepen.io. The source can be viewed [here](https://codepen.io/vladracoare/pen/jOPmMap).
* The functions for incrementing scores have been adapted from code institute's Love Maths website. Link to code [here](    // Increment score code adapted from Code Institute's Love Maths tutorial - https://github.com/Code-Institute-Solutions/love-maths-2.0-sourcecode/blob/master/05-tidying-up/01-a-few-last-things/assets/js/script.js - See README for ful details).
* Social media links in footer were adapted from Code Institute's Love Running website. Link to code [here](https://github.com/Code-Institute-Solutions/love-running-2.0-sourcecode/tree/main/06-site-footer/01-footer-main-structure).
 

## Acknowledgements 

* A big thank you to my mentor Rahul for the advice and guidance throughout this project.
* Further thanks to my lead Nick for the scheduling help in the run up to the project deadline date.  
