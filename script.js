
let timeResult = document.querySelectorAll('.time__result')[0];
let gameCounter = document.querySelectorAll('.game__counter')[0];
let gameWin = document.querySelectorAll('.game__win')[0];
let popupNewgame = document.querySelectorAll('.popup__newgame')[0];
let popupLostgame = document.querySelectorAll('.popup__lostgame')[0];
let gamePopup = document.querySelectorAll('.game__popup')[0];


let gameItems = document.querySelectorAll('.game__item');

let timerId = setTimeout(()=>{},1000)
let timeCounterResult = 0;
let timeCounterGame = 60;

let lostGame =  ()=>{
    gamePopup.classList.add('active');
    popupLostgame.classList.add('active');
    setTimeout(()=>{
        gamePopup.classList.remove('active');
        popupLostgame.classList.remove('active');
        startGame();
    }, 2000)
}

let winGame = ()=>{
    gamePopup.classList.add('active');
    gameWin.classList.add('active');
    timeResult.classList.add('active');
    startGame();
}

gameItems.forEach(item=>{
    item.addEventListener('mouseover', lostGame)
})

let showGamePopup = ()=>{
    popupNewgame.classList.add('active');
    setTimeout(()=>{
        popupNewgame.classList.remove('active');

    }, 2000)
}

let runTimeCounter = ()=>{
    if (timeCounterResult > 59 ) return;
    timeResult.innerHTML = timeCounterResult > 9 ?
        `00:${++timeCounterResult}` 
        :
        `00:0${++timeCounterResult}`;
    setTimeout(runTimeCounter, 1000)
}


let runTimeCounterGame = ()=>{
    if (timeCounterGame <=0 ) {
        winGame();
        return;
    }
    gameCounter.innerHTML = timeCounterGame > 9 ?
        `00:${--timeCounterGame}`
        :
        `00:0${--timeCounterGame}`;
    timerId = setTimeout(runTimeCounterGame, 1000)
}

let startGame = ()=>{
    timeCounterResult = 0;
    timeCounterGame = 60;
    gameWin.classList.remove('active');
    timeResult.classList.remove('active');
    gamePopup.classList.remove('active');
    clearTimeout(timerId);
    showGamePopup();
    runTimeCounter();
    runTimeCounterGame();
}
startGame();







