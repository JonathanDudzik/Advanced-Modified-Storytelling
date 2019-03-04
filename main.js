// function nextPanel(e) {
//     var elmnt = document.getElementById(e);
//     elmnt.scrollIntoView();
// }

//selects all icon-buttons
// const iconButtonsAll = document.querySelectorAll(".icon-container__button")
//selects ONE icon button based on the data-attribute
// const iconButton = document.querySelector(`figure[data-key="vca-audio"]`)

function playAudio(e) {
    const iconButton = e.srcElement.attributes[0].value;
    const conceptMedia = document.querySelector(`audio[data-key="${iconButton}"]`)
    const conceptElement = document.querySelector(`div[data-key="${iconButton}"]`)
    const slides = document.querySelectorAll("div[class$='__show']");
    if(!conceptElement) return;
    if(conceptMedia) {conceptMedia.play()};
    
    slides.forEach(function(slide) {
        slide.classList.remove('vca-container__show');
    });
    
    conceptElement.classList.add('vca-container__show');
}


// function playAudio(e) {
//     const audio = document.querySelector(`audio[data-audio="vca-audio"]`)
//     const vcaAudioDisplay = document.querySelector(`div[data-audio="vca-audio"]`)
//     vcaAudioDisplay.classList.add('vca-container__show');
//     audio.play();
// }

document.addEventListener('click', playAudio);

// function playSound(e) {
//     //is there a data-key in an audio element that matches the keyCode that is down
//     //creating a custom attribute and then selecting it's contents with an attribute selector
//     //if the custom attribute key does not exist, returns "null"
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     //"window" is the root of the DOM while "document" is the main object of the rendered DOM
//     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//     if(!audio) return; //stop the function from running
//     audio.currentTime = 0; //rewind to the start
//     audio.play();
//     //classList is an alternative to accessing an element's classes via element.className
//     key.classList.add('playing');
//   };

//   function removeTransition(e) {
//     if(e.propertyName !== 'transform') return; //skip it if it's not a transform
//     //this is equal to the key - console.log(this);
//     this.classList.remove('playing');
//   }

//   //querySelectorAll selects EVERY matching instance query
//   const keys = document.querySelectorAll('.key');
//   keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//   //keep the event listener decoupled from the function it fires
//   window.addEventListener('keydown', playSound);