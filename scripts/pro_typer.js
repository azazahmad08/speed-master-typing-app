// function playNow(){
//     const homeScreen = document.getElementById('home_screen');
//     homeScreen.classList.add('hidden');
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden')
// }
function continueGame() {
    const alphabet = getRandomAlphabets();
    console.log(alphabet);
    const displayAlphabet = document.getElementById('display_Alphabets');
    displayAlphabet.innerText = alphabet;
    setBackgroundColor(alphabet);

}

function playNow() {
    hideElementById('home_screen');
    showElementById('play-ground');
    continueGame();

}