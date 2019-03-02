function nextPanel(e) {
    var elmnt = document.getElementById(e);
    elmnt.scrollIntoView();
}

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