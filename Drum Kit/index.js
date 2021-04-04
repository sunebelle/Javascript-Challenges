const drumLetter = "wasdjkl";
const drumAudio  =["crash","snare","kick-bass","tom-1","tom-2","tom-3","tom-4"];


$("button").click(function() {
    let clickedLetter = this.innerHTML; 
    playAudio(clickedLetter); 
    makeEffect(clickedLetter);
})

$(document).keypress(function (e){
    playAudio(e.key);
    makeEffect(e.key)
})

function playAudio(key){
    let getNumber = drumLetter.indexOf(key);
    if (getNumber >= 0) {
        let audioName = drumAudio[getNumber];
        let sound = new Audio("sounds/"+audioName+".mp3")
        sound.play();
    } else {
        let breakSound  = new Audio ("sounds/wrong.mp3")
        breakSound.play();
    }
}

function makeEffect(currentKey){
    $("."+currentKey).addClass("pressed");
    setTimeout(()=> $("."+currentKey).removeClass("pressed"),100);
}
