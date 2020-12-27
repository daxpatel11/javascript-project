function rpsgame(Yourchoice){
   // console.log(Yourchoice);
    var humanchoice,botchoice;
    humanchoice = Yourchoice.id;
    var rand=Math.floor(Math.random()*3);
    let rps=['rock','paper','scissors'];
    botchoice=rps[rand];
    console.log(humanchoice,botchoice);
    results = decidewinner(humanchoice,botchoice);
    //console.log(results);
   message = finalmessage(results);
   console.log(message);
   frontend(message,humanchoice,botchoice);
}

function decidewinner(humanchoice,botchoice){
    let rpsdatabase = { 
        'rock' : { 'scissors':1,'rock':0.5,'paper':0},
        'paper' : { 'rock':1,'paper':0.5,'scissors':0},
        'scissors' : { 'paper':1,'scissors':0.5,'rock':0},      
 
    };
    let yourScore = rpsdatabase[humanchoice][botchoice];
    let computerScore= rpsdatabase[botchoice][humanchoice];
    return [yourScore,computerScore];
} 
function finalmessage(results)
{
    if(results[0]>results[1])
    {
        return {'message':"You Won!",'color':'green'};
    }
    else if(results[0]==results[1])
    {
        return {'message':"You Tie!",'color':'yellow'};
    }
    else{
        return {'message':"You Lose!",'color':'red'};
    }
}
function frontend(message,humanchoice,botchoice){
    var imagedatabase ={
        'rock' : document.getElementById('rock').src,
        'paper' : document.getElementById('paper').src,
        'scissors' : document.getElementById('scissors').src,
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv= document.createElement('div');
    var botDiv=document.createElement('div');
    var messageDiv=document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagedatabase[humanchoice] +"' height=200 width=200 display:flex >";
    botDiv.innerHTML = "<img src='" + imagedatabase[botchoice] +"' height=200 width=200 display:flex >";
    messageDiv.innerHTML = "<h1 style='color: " + message['color'] + "; font-size:60; '>" + message['message'] +"</h1>"
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}