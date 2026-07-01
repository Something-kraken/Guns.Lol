const enterScreen = document.getElementById("enter-screen");
const video = document.getElementById("bg-video");
const cards = document.querySelectorAll(".card");

// Hide everything until user clicks
video.pause();

enterScreen.addEventListener("click", () => {

    // Fade out the enter screen
    enterScreen.style.opacity = "0";

    setTimeout(() => {
        enterScreen.style.display = "none";
    }, 1000);

    // Play video with original audio
    video.muted = false;
    video.volume = 1;
    video.play().catch(err => {
        console.log("Playback blocked:", err);
    });

});

// Card click animation
cards.forEach(card => {

    card.addEventListener("click", function () {

        this.style.transform = "scale(.96)";

        setTimeout(() => {
            this.style.transform = "";
        }, 180);

    });

});
