// function nextPanel(e) {
//     var elmnt = document.getElementById(e);
//     elmnt.scrollIntoView();
// }


function exitNav() {
    const navButton = document.querySelector('div input#navi-toggle');
    navButton.checked=false;
};

//use queryselector (class selector did not work) to find all video objects and pause them.
function stopVideo() {
    const popupVideos = document.querySelectorAll('video');
    popupVideos.forEach(function(video) {
        video.pause();
    });
};

function boxVisibility(e) {
    const boxButton = e.srcElement.attributes[0].value;
    const boxElement = document.querySelector(`div[data-key="${boxButton}"]`);
    const boxMedia = document.querySelector(`audio[data-key="${boxButton}"]`);
    const boxElements = document.querySelectorAll("div[data-key*='box-key-']");
    const boxMedias = document.querySelectorAll("audio[data-key*='box-key-']");
    
    if(!boxElement) return;

    boxElements.forEach(function(EachBoxElement) {
        if (!EachBoxElement.classList.contains('u-box-hide')) {
        EachBoxElement.classList.add('u-box-hide');
        } 
    });

    boxElement.classList.remove("u-box-hide");

    boxMedias.forEach(function(EachBoxMedia) {
       EachBoxMedia.pause();
    });

    if(boxMedia) { boxMedia.play() };
}

document.addEventListener('click', boxVisibility);