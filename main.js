// function nextPanel(e) {
//     var elmnt = document.getElementById(e);
//     elmnt.scrollIntoView();
// }

function playAudio(e) {
    const iconButton = e.srcElement.attributes[0].value;
    const conceptMedia = document.querySelector(`audio[data-key="${iconButton}"]`)
    const conceptElement = document.querySelector(`div[data-key="${iconButton}"]`)
    const slides = document.querySelectorAll("div[class$='__show']");
    if(!conceptElement) return;
    // if(conceptMedia) {conceptMedia.play()};
    
    slides.forEach(function(slide) {
        slide.classList.remove('vca-container__show');
    });
    
    conceptElement.classList.add('vca-container__show');
}

document.addEventListener('click', playAudio);