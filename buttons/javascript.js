var all_buttons=document.getElementsByTagName('button');
var choices=['btn-primary','btn-danger','btn-warning','btn-success'];
function buttoncolorchange(yourcolor){
    if(yourcolor.value=='red')
    allred();
    else if(yourcolor.value=='green')
    allgreen();
    else if(yourcolor.value=='reset')
    allreset();
    else
    allrandom();
}
var copy_buttons=[];
for(let i=0;i<all_buttons.length;i++)
{
    copy_buttons.push(all_buttons[i].classList[1]);
}

function allred(){
    for(let i=0;i< all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}
function allgreen(){
    for(let i=0;i< all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}
function allreset(){
    for(let i=0;i< all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copy_buttons[i]);
    }
}
function allrandom(){
   
    for(let i=0;i< all_buttons.length;i++){
        var rand = Math.floor(Math.random()*4);
        
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[rand]);
    }
}