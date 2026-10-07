let randomNumber=parseInt(Math.random()*100+1)
const submit=document.querySelector('#subt')
const userInput= document.querySelector('#guessField')
const guessSlot= document.querySelector('.guesses')
const remaining= document.querySelector('.lastResult')
const lowOrHi= document.querySelector('.lowOrHi')
const startOver= document.querySelector('.resultParas')

const button=document.createElement('button')

let prevGuess=[]
let numGuess=1

let playGame=true //in whatever game we design there is a variable like this to see whether we can play the game or not

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

//we will write functions like this a lot
function validateGuess(guess){
    //to check value is number and b/w 1 and 100
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess<1){
        alert('Please enter a number more than 1')
    }else if(guess>100){
        alert('Please enter a number less than 100')
    }else{
        prevGuess.push(guess);
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame();
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    //check whether number is > , < or == and use displayMessage() to display the message
    if(guess===randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    }else if(guess<randomNumber){
        displayMessage(`Number is TOOO low`)
    }else if(guess>randomNumber){
        displayMessage(`Number is TOOO high`)
    }
}

//This is a cleanup method
function displayGuess(guess){
    //clean input field, update array, remaining guess
    userInput.value=''
    guessSlot.innerHTML+=`${guess} `
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message){
    //dom manipulation using loOrHi
    lowOrHi.innerHTML=`<h2>${message}</h2>`
    // console.log(lowOrHi)
}

function endGame(){
    //
    userInput.value=''
    userInput.setAttribute('disabled','')
    button.classList.add('button')
    button.innerHTML=`<p id="newGame">Start new Game</p>`
    startOver.appendChild(button)
    playGame=false
    newGame()
}

function newGame(){
    //
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber=parseInt(Math.random()*100+1);
        prevGuess=[]
        numGuess=1
        guessSlot.innerHTML=''
        remaining.innerHTML=`${10-numGuess}`
        lowOrHi=''
        userInput.removeAttribute('disabled')
        startOver.removeChild(button)
        playGame=true
    })
}

