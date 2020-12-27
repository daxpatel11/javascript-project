let blackjack = {
    'you': {'scoreSpan':'#your-score','div':'#your-box','score':0},
    'bot': {'scoreSpan':'#bot-score','div':'#bot-box','score':0},
    'cards' : ['2','3','4','5','6','7','8','9','10','J','Q','K','A'],
    'cardsMap' : {'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':10,'Q':10,'K':10,'A':11},
    'wins' : 0,
    'loses' : 0,
    'draws' : 0,
    'isstand':false,
    'turnsover':false,
}
const YOU =blackjack['you'];
const BOT = blackjack['bot'];

const hitSound = new Audio('sounds/swish.m4a');
const winSound = new Audio('sounds/cash.mp3');
const loseSound = new Audio('sounds/aww.mp3');
document.querySelector('#hit').addEventListener('click',blackjackHit);
document.querySelector('#stand').addEventListener('click',botlogic);
document.querySelector('#reset').addEventListener('click',reset);

function blackjackHit(){
    if(blackjack['isstand']==false){
    let rand=Math.floor(Math.random()*13);
    let card= blackjack['cards'][rand];
    console.log(card);
    updateScore(card,YOU);
    console.log(YOU['score']);
    showcard(card,YOU);
    ShowScore(YOU);
    }
}

function showcard(card,activePlayer){
    if(activePlayer['score']<=21){
    let cardImage = document.createElement('img');
    cardImage.src = `images/${card}.png`;
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
    }
}
function updateScore(card,activePlayer){
    activePlayer['score'] += blackjack['cardsMap'][card];
}

function ShowScore(activePlayer){
    if(activePlayer['score']>21){
        document.querySelector(activePlayer['scoreSpan']).textContent = "BURST";
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    }
    else{
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

function reset(){
    if(blackjack['turnsover']==true){
        blackjack['isstand']=false;
        blackjack['turnsover']=false;
    let YourImages = document.querySelector('#your-box').querySelectorAll('img');
    for(let i=0;i<YourImages.length;i++)
    {
        YourImages[i].remove();
    }
    YourImages = document.querySelector('#bot-box').querySelectorAll('img');
    for(let i=0;i<YourImages.length;i++)
    {
        YourImages[i].remove();
    }
    YOU['score']=0;
    BOT['score']=0;
    document.querySelector('#your-score').textContent = 0;
    document.querySelector('#your-score').style.color ='yellow';
    document.querySelector('#bot-score').textContent = 0;
    document.querySelector('#bot-score').style.color ='yellow';
  
    document.querySelector('#blackjack-result').textContent = 'Lets play!';
    document.querySelector('#blackjack-result').style.color = 'black';
    }
}
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}
async function botlogic(){
    blackjack['isstand']=true;
    
    while(BOT['score']<=16){
    let rand=Math.floor(Math.random()*13);
    let card = blackjack['cards'][rand];
    showcard(card,BOT);
    updateScore(card,BOT);
    ShowScore(BOT);
    await sleep(1000);
    }
    
    if(BOT['score']>16)
    {
        showresult();
        blackjack['turnsover']=true;
    }
    
}
function computewinner(){
    let winner;
    console.log(YOU['score']);
    console.log(BOT['score']);
    if(YOU['score']<=21 && (YOU['score']>BOT['score'] || BOT['score']>21))
    {   console.log('You Won');
        winner=YOU;
        blackjack['wins']++;
    }
    else if(BOT['score']<=21 && (BOT['score'] > YOU['score'] || YOU['score']))
    {   console.log('You lose');
        winner=BOT;
        blackjack['loses']++;
    }
    else if( YOU['score']==BOT['score'] || (YOU['score']>21 && BOT['score']>21))
    {
        console.log('Its a Tie!');
        blackjack['draws']++;
    }
    return winner;
}
function showresult(){
    let winner=computewinner();
    let message,messagecolor;
    console.log(winner);
    if(winner==YOU){
        message='You Won!';
        messagecolor ='green';
        winSound.play();
    }
    else if(winner==BOT)
    {
        message='You Lose!';
        messagecolor='red';
        loseSound.play();
    }
    else{
        message = 'Its a tie!';
        messagecolor = 'yellow';
    }
    document.querySelector('#blackjack-result').textContent = message;
    document.querySelector('#blackjack-result').style.color = messagecolor;
    document.querySelector('#wins').textContent = blackjack['wins'];
    document.querySelector('#losses').textContent = blackjack['loses'];
    document.querySelector('#ties').textContent = blackjack['draws'];

}
