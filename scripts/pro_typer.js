// function playNow(){
//     const homeScreen = document.getElementById('home_screen');
//     homeScreen.classList.add('hidden');
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden')
// }
function handleKeyboardButtonPress(event) {
    // variable to get key
    const playerPressed = event.key;

    // current alphabet khoja
    const currentAlphabets = document.getElementById('display_Alphabets');
    const currentAlpha = currentAlphabets.innerText;

    // lowercase
    const alphabet = currentAlpha.toLowerCase();
    console.log(playerPressed, alphabet)


    if (playerPressed === alphabet) {
        const scoreGet = document.getElementById('score');
        const score = scoreGet.innerText;
        const scoreNumber = parseInt(score);
        // console.log(scoreNumber);
        const scoreNumberUpdate = scoreNumber + 1;
        scoreGet.innerText = scoreNumberUpdate;

        removeBackgroundColor(alphabet);
        continueGame();
    }
    else {
        const lifeGet = document.getElementById('life');
        const life = lifeGet.innerText;
        const lifeUpdated = parseInt(life);
        // console.log(scoreNumber);
        const lifeWeGetUpdated = lifeUpdated - 1;
        lifeGet.innerText = lifeWeGetUpdated;

        if(lifeGet === 0){
            hideElementById('play-ground');
            showElementById('result');
            
        }

    }
}

document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame() {
    const alphabet = getRandomAlphabets();
    // console.log(alphabet);
    const displayAlphabet = document.getElementById('display_Alphabets');
    displayAlphabet.innerText = alphabet;
    setBackgroundColor(alphabet);

}

function playNow() {
    hideElementById('home_screen');
    showElementById('play-ground');
    continueGame();

}