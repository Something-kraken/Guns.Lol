
const enterScreen = document.getElementById("enter-screen");
const video = document.getElementById("bg-video");

enterScreen.addEventListener("click", () => {

    enterScreen.style.opacity = "0";

    setTimeout(() => {
        enterScreen.style.display = "none";
    }, 800);

    video.muted = false;
    video.play();

});