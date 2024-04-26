// Synthsound 3 strings nice.wav by smallclone -- https://freesound.org/s/692913/ -- License: Creative Commons 0
// Click2.wav by EdgardEdition -- https://freesound.org/s/113087/ -- License: Attribution 3.0
// Elastic band c note by mudflea2 -- https://freesound.org/s/708182/ -- License: Creative Commons 0

const click2 = new Audio('sounds/click2.wav');
const cnote = new Audio('sounds/elastic-band-c-note.wav');
const buttons = document.querySelectorAll(".button-grid button");

function playCNote() {
    for (let i=0; i < 10; i++) {
        const cloneCNote = cnote.cloneNode();
        window.setTimeout(() => {
            cloneCNote.play();
        }, i * 250);
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        click2.play();
    });
    button.addEventListener("mouseenter", () => {
        // you can only play one file at a time
        cnote.play();

        // if you need to play overlapping sounds,
        // use the cloneNode() function and play that clone

        // const cloneCNote = cnote.cloneNode();
        // cloneCNote.play();
    });
});